import React, { useState, useEffect } from "react";
import CardFood from "../../components/CardFood/CardFood";
import ModalQuantityFood from "../../components/ModalQuantityFood/ModalQuantityFood";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
//import {useProtectedPage} from "../../hooks/useProtectedPage"
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";

const RestaurantPage = () => {
  const [quantityProduct , setQuantityProduct] = useState(0)
  const [productSelected, setProdutcSelected] = useState({})
  const [btn, setBtn] = useState([])
  
  const { states, sets } = useContext(GlobalStateContext);
  const pathParams = useParams();
  const [foods, isLoadingFoods, errorFoods] = useRequestData(
    `${BASE_URL}/restaurants/${pathParams.id}`
  );
  // useProtectedPage();

  useEffect(() => {
    sets.setOpenModal(false)
  }, [])

  const  onChangeQuantity = (event) => {
    setQuantityProduct(event.target.value)
  }

  const AddProductToCart = (prod) => {
    setProdutcSelected(prod)
    sets.setOpenModal(true);

  };

  const addCart = (
    product, quantity
    
  ) => {
    const foodItem = {...product, quantity:quantity, btnValue: 'remover'
      
    }

    const newCart = [...states.cart, foodItem]
    sets.setCart(newCart)
    sets.setOpenModal(false)
    const foodItemBtn = {...product, quantity:quantity, btnValue: "remover"
    }
    const newBtn = [...btn, foodItemBtn]
    setBtn(newBtn)

  };


  const listFoods =
    foods &&
    foods.restaurant &&
    foods.restaurant.products.map(
      (product) => {

        const quantityOnCart = states.cart && states.cart.map((cart)=>{
          if(cart.id === product.id){
            return cart.quantity
          }
        })

        
        const changeBtnValue = states.cart && states.cart.map((cart)=>{
          if(cart.id === product.id){
            return cart.btnValue
          }
        })

        const toRemove = () => {
    
          const updateProductsInCart = states.cart && states.cart.map((item) => {
            if(item.id === product.id){
            //  return item.quantity = item.quantity -1
            return {
              ...item,
              quantity: item.quantity -1
            }
            }
            return item
          }).filter((item) => {
            return item.quantity > 0
          })

          sets.setCart(updateProductsInCart)

          console.log("REMOVI", states.cart)
        }

        return (
          <CardFood
            prodSelected={productSelected}
            product={product}
            key={product.id}
            restaurantId={pathParams.id}
            quantity={quantityProduct}
            senQuantity={quantityOnCart}
            addCart={addCart}
            onChangeQuantity={onChangeQuantity}
            onClickAdd={() => AddProductToCart(product)}
            onClickRemove={toRemove}
            sendBtnChange={changeBtnValue}
          />
        );
      }
    );
  return (
    <div>
      <h1>Restaurantes</h1>


      {foods && foods.restaurant && (
        <CardRestaurant
          image={foods.restaurant.logoUrl}
          title={foods.restaurant.name}
          category={foods.restaurant.category}
          time={foods.restaurant.deliveryTime}
          shipping={foods.restaurant.shipping}
          address={foods.restaurant.address}
        />
      )}

      {isLoadingFoods && <p>Carregando</p>}
      {!isLoadingFoods && errorFoods && <p>Erro</p>}
      {!isLoadingFoods && foods && listFoods}
      {!isLoadingFoods && foods && listFoods.length === 0 && (
        <p>Não há nenhuma postagem</p>
      )}
      <Footer />
    </div>
  );
};

export default RestaurantPage;
