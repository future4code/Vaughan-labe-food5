import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useEffect, useState, useContext, createContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import {
  AddressContainer,
  RestaurantContainer,
  AdressContainer,
  CartContainer,
  ShippingText,
  SubtotalPrice,
  ButtonContainer,
  PaymentContainer,
  PlaceholderCtn,
} from "./styled";
import {
  getProfile,
  getDetailRestaurant,
  sendOrder,
} from "../../axiosRequests/user";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import CardFood from "../../components/CardFood/CardFood";
import { Button, Checkbox } from "@material-ui/core";
import { RestaurantMenu } from "@material-ui/icons";
import { useRequestData } from "../../hooks/useRequestData";
import CardFoodInCart from "../../components/CardFoodInCart/CardFoodInCart";
import cartEmpty from "../../assets/empty-cart.png";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const CartPage = () => {
  useProtectedPage();
  const [address, setAddress] = useState({});
  const { states, sets } = useContext(GlobalStateContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [product, setProduct] = useState([]);
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState([]);
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState([]);
  const [
    restaurantDetails,
    isLoadingRestaurantDetails,
    errorRestaurantDetails,
  ] = useRequestData(`${BASE_URL}/restaurants/${states.restaurantId}`);

  useEffect(() => {
    getProfile(setAddress);
    getDetailRestaurant(states.cart.idRestaurant, setRestaurant);
  }, []);

  const renderAddress = address.address ? (
    <AddressContainer>
      <p>Endereço de entrega:</p>
      <span>{address.address}</span>
    </AddressContainer>
  ) : (
    <AdressContainer>
      <p>
        Favor cadastrar um endereço clicando{" "}
        <strong onClick={() => navigate("/endereco")}>aqui.</strong>
      </p>
    </AdressContainer>
  );

  const listProductsInCart =
    states.cart &&
    states.cart.map((product) => {
      const toRemove = () => {
        const updateProductsInCart =
          states.cart &&
          states.cart
            .map((item) => {
              if (item.id === product.id) {
                //  return item.quantity = item.quantity -1
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }
              return item;
            })
            .filter((item) => {
              return item.quantity > 0;
            });

        sets.setCart(updateProductsInCart);

        console.log("REMOVI", states.cart);
      };

      return (
        <CardFoodInCart
          product={product}
          key={product.id}
          senQuantity={product.quantity}
          onClickRemove={toRemove}
        />
      );
    });

  const cartId =
    states.cart &&
    states.cart.map((product) => {
      return product.id;
    });

  const cartQuantity =
    states.cart &&
    states.cart.map((product) => {
      return product.quantity;
    });

  const body = {
    products: states.cart,
    paymentMethod: payment,
  };

  return (
    <>
      <Header />
      <CartContainer>
        {renderAddress}

        {restaurantDetails && restaurantDetails.restaurant && (
          <RestaurantContainer>
            <p>{restaurantDetails.restaurant.name}</p>
            <span>{restaurantDetails.restaurant.address}</span>
            <span>{restaurantDetails.restaurant.deliveryTime}</span>
          </RestaurantContainer>
        )}

        {states.cart && states.cart.length > 0 ? (
          listProductsInCart
        ) : (
          <PlaceholderCtn>
            <h3>O seu carrinho está vazio</h3>
            <img src={cartEmpty} alt="Carrinho vazio" />
          </PlaceholderCtn>
        )}

        {restaurantDetails && restaurantDetails.restaurant && (
          <ShippingText>
            <p>Frete: R${restaurantDetails.restaurant.shipping}</p>
          </ShippingText>
        )}

        {restaurantDetails &&
          restaurantDetails.restaurant &&
          states.cart &&
          states.cart.length > 0 && (
            <SubtotalPrice>
              <span>
                Subtotal: R$
                {states.cart.reduce((acc, item) => {
                  return (
                    acc +
                    item.price * item.quantity +
                    Number(`${restaurantDetails.restaurant.shipping}`)
                  );
                }, 0)}
              </span>
            </SubtotalPrice>
          )}

        {states.cart && states.cart.length > 0 && (
          <PaymentContainer>
            <p>Forma de pagamento</p>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="payment"
                name="payment"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <FormControlLabel
                  value="money"
                  control={<Radio />}
                  label="Dinheiro"
                />
                <FormControlLabel
                  value="creditcard"
                  control={<Radio />}
                  label="Cartão"
                />
              </RadioGroup>
            </FormControl>
          </PaymentContainer>
        )}

        {states.cart && states.cart.length > 0 && (
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ margin: "10px" }}
              onClick={() => {
                if (address.address) {
                  sendOrder(states.restaurantId, body);
                  setTimeout(() => {
                    navigate("/home");
                  }, 500);
                } else {
                  alert("Favor cadastrar um endereço");
                }
              }}
            >
              Confirmar
            </Button>
          </ButtonContainer>
        )}
      </CartContainer>
      <Footer />
    </>
  );
};

export default CartPage;
