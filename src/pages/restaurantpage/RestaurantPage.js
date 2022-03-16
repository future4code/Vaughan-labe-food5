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

      {foods && foods.restaurant && (
        <div>
          <img src={foods.restaurant.logoUrl} style={{ width: "180px" }} />
          <h1>{foods.restaurant.name}</h1>
          <p>{foods.restaurant.category}</p>
          <p>
            {foods.restaurant.deliveryTime} min Frete R${" "}
            {foods.restaurant.shipping}
          </p>
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
