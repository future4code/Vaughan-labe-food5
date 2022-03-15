import React from "react";
import CardFood from "../../components/CardFood/CardFood";
import ModalQuantityFood from "../../components/ModalQuantityFood/ModalQuantityFood";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
//import {useProtectedPage} from "../../hooks/useProtectedPage"
import {GlobalStateContext} from "../../components/Global/GlobalStateContext";
import { useContext } from "react";
import Footer from '../../components/Footer/Footer'

const RestaurantPage = () => {
  const { states, sets } = useContext(GlobalStateContext)
  const pathParams = useParams();
  console.log("pathParamsn", pathParams)
  const [foods, isLoadingFoods, errorFoods] = useRequestData(
    `${BASE_URL}/restaurants/${pathParams.id}`
  );
  // useProtectedPage();

const AddProductToCart = () => {
  sets.setOpenModal(true)
}

const onClickClose = () => sets.setOpenModal(false)

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
          onClickAddProduct={AddProductToCart }
        />
      );
    });
  return (
    <div>
      <h1>Restaurantes</h1>

<ModalQuantityFood value={states.openModal} onClickClose={onClickClose} />

      {foods && foods.restaurant && (<div>
          
          <img src={foods.restaurant.logoUrl} style={{width: '180px'}}/>
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
     <Footer />
    </div>
  );
};

export default RestaurantPage;
