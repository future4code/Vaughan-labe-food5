import React from "react";
import CardFood from "../../components/CardFood/CardFood";
import ModalQuantityFood from "../../components/ModalQuantityFood/ModalQuantityFood";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
//import {useProtectedPage} from "../../hooks/useProtectedPage"

const RestaurantPage = () => {
  const [foods, isLoadingFoods, errorFoods] = useRequestData(
    `${BASE_URL}/restaurants/5`
  );
  // useProtectedPage();
  console.log(
    "CONSOLE RESTAUTANT PAGE produts",
    foods && foods.restaurant && foods.restaurant
  );

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
        />
      );
    });
  return (
    <div>
      <h1>Restaurantes</h1>
<ModalQuantityFood/>
      {foods && foods.restaurant && (<div>
          
          <img src={foods.restaurant.logoUrl}/>
          <h1>{foods.restaurant.name}</h1>
          <p>{foods.restaurant.category}</p>
          <p>{foods.restaurant.deliveryTime} min  Frete R$ {foods.restaurant.shipping}</p>
          <p>{foods.restaurant.address}</p>
      </div>
      )}

      {isLoadingFoods && <p>Carregando</p>}
      {!isLoadingFoods && errorFoods && <p>Erro</p>}
      {!isLoadingFoods && foods && listFoods}
      {!isLoadingFoods && foods && listFoods.length === 0 && (
        <p>Não há nenhuma postagem</p>
      )}
     
    </div>
  );
};

export default RestaurantPage;
