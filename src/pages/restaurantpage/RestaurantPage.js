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
import styled from 'styled-components';

const Badge = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color: #E86E5A;
position: relative;
top: -40px;
right: -180px;
color: #fff;
padding: 0.5rem;
height: 10px;
width: 10px;
border-radius: 50%;
`

const RestaurantPage = () => {
  const [quantityProduct , setQuantityProduct] = useState(0)
  const [productSelected, setProdutcSelected] = useState({})
  const [showBadge, setShowBadge] = useState(false);
  
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
    const foodItem = {...product, quantity:quantity,
      
    }

    const newCart = [...states.cart, foodItem]
    console.log("foodITEM", foodItem)
    sets.setCart(newCart)
    sets.setOpenModal(false)
    setShowBadge(true)
  };

 


  const listFoods =
    foods &&
    foods.restaurant &&
    foods.restaurant.products.map(
      (product) => {

        const quantityOnCart = states.cart && states.cart.map((cart)=>{
          if(cart.id === product.id){
            return <Badge>{cart.quantity}</Badge>
          }
        })

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
            showBadge={showBadge}
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
