import React from "react";
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
  const { states, sets } = useContext(GlobalStateContext);
  const pathParams = useParams();
  console.log("pathParamsn", pathParams);
  const [foods, isLoadingFoods, errorFoods] = useRequestData(
    `${BASE_URL}/restaurants/${pathParams.id}`
  );
  // useProtectedPage();

  const AddProductToCart = (id) => {
    sets.setOpenModal(true);
    console.log("ID",id)
  };


  const onClickClose = () => sets.setOpenModal(false);

  const listFoods =
    foods &&
    foods.restaurant &&
    foods.restaurant.products.map((food) => {
      return (
        <CardFood
          key={food.id}
          title={food.name}
          image={food.photoUrl}
          description={food.description}
          price={food.price}
          onClickAddProduct={() => AddProductToCart(food.id)}
        />
      );
    });
  return (
    <div>
      <h1>Restaurantes</h1>

      <ModalQuantityFood value={states.openModal} onClickClose={onClickClose}    />

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
