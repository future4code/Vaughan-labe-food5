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
  const [foods, isLoadingFoods, errorFoods] = useRequestData(
    `${BASE_URL}/restaurants/${pathParams.id}`
  );
  // useProtectedPage();

  const AddProductToCart = () => {
    sets.setOpenModal(true);
  };

  const addCart = (
    idProduct,
    nameProduct,
    photoUrlProduct,
    descriptionProduct,
    priceProduct
  ) => {
    console.log(
      "addCartFunction",
      idProduct,
      nameProduct,
      photoUrlProduct,
      descriptionProduct,
      priceProduct
    );
  };

  const onClickClose = () => sets.setOpenModal(false);

  const listFoods =
    foods &&
    foods.restaurant &&
    foods.restaurant.products.map(
      ({ id, name, photoUrl, description, price }) => {
        return (
            <CardFood
              key={id}
              title={name}
              image={photoUrl}
              description={description}
              price={price}
              onClickAdd={AddProductToCart}

              value={states.openModal}
              onClickClose={onClickClose}
            />
        );
      }
    );
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
