import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useEffect, useState, useContext, createContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { AddressContainer, RestaurantContainer, AdressDelivery,
    AdressContainer,
    CartContainer,
    Title,
    ShippingText,
    SubtotalPrice,
    TotalPrice,
    PaymentMethodText,
    ProductContainer,
    ProductImageContainer,
    ProductInfoContainer,
    QuantityContainer,
    ProductInfo,
    RemoveButtonContainer,
    RemoveButton,
    ButtonContainer,
    PaymentContainer,
    Quantity,
    CheckBox,} from './styled';
import {
    getProfile, getDetailRestaurant,
  } from "../../axiosRequests/user";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
  } from "@material-ui/core";
  import CardFood from '../../components/CardFood/CardFood';
  import { Button, Checkbox } from '@material-ui/core';
import { RestaurantMenu } from '@material-ui/icons';

const CartPage = () => {
    const [address, setAddress] = useState({});
    const { states, sets } = useContext(GlobalStateContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [product, setProduct] = useState([]);
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState([]);
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState([]);

  const removeItem = (item) => {
    const newArray = product.filter((pdt) => {
      return pdt.id !== item.id;
    });
    setProduct(newArray);
  };

    useEffect(() => {
        getProfile(setAddress);
        getDetailRestaurant(states.cart.idRestaurant, setRestaurant);
      }, []);

const renderAddress =  address.address ? (
    <AddressContainer>
            <p>Endereço de entrega:</p>
            <span>{address.address}</span>
          </AddressContainer>
    ) : (
    <AdressContainer>
        <p>Favor cadastrar um endereçoclicando <strong onClick={() => navigate("/endereco")}>aqui.</strong></p>
    </AdressContainer>
    );


    return (
        console.log("CARRINHO", states.cart),
        console.log("RESTAURANTE", restaurant),
        <>
        <Header />
        <CartContainer>
            {renderAddress}

            {restaurant.map((restaurant) => (
            
            <RestaurantContainer>
                <p>{restaurant.name}</p>
                <span>Restaurant Address</span>
                <span>Delivery time</span>
            </RestaurantContainer>
            ))}
 
        
                {states.cart.map((item) => {
                    return (
                        <ProductContainer>
                            <ProductImageContainer>
                                <img src={item.photoUrl} alt="product Img" />
                            </ProductImageContainer>
                            <ProductInfoContainer>
                                <QuantityContainer>
                                    <Quantity>{item.quantity}</Quantity>
                                </QuantityContainer>
                                <ProductInfo>
                                <p>{item.name}</p>
                                <span>{item.description}</span>
                                <strong>R${item.price}</strong>
                                </ProductInfo>
                            <RemoveButtonContainer>
                                <RemoveButton onClick={() => removeItem(item)}>
                                remover
                                </RemoveButton>
                            </RemoveButtonContainer>
                            
                            </ProductInfoContainer>
                            </ProductContainer>
                    );
                }
                )}

                <ShippingText>
                <p>Frete:</p>
                <p>{shipping}</p>
            </ShippingText>
            
            <SubtotalPrice>
                <p>Subtotal:</p>
                <p>{states.cart.reduce((frete, pdt) => {
                    return pdt.price * pdt.quantity + frete;
                }
                , 0)}</p>
            </SubtotalPrice>
        

            
            <PaymentContainer>
            <p>Forma de pagamento</p>
            <FormControl component="fieldset">
                <RadioGroup aria-label="payment" name="payment" value={payment} onChange={(e) => setPayment(e.target.value)}>
                    <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel value="cartao" control={<Radio />} label="Cartão" />
                </RadioGroup>
            </FormControl>
            </PaymentContainer>
            
            
            <ButtonContainer>
                <Button variant="contained" color="primary" fullWidth style={{margin: "10px"}} >
                    Confirmar
                </Button>
            </ButtonContainer>
            

           

        </CartContainer>
        <Footer />
        </>
    );
};

export default CartPage;