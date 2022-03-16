import React, { useContext } from "react";
import { Conteiner, RestaurantContainer } from "./styled";
import FeedThumbnail from "./FeedThumbnail";
import { GlobalStateContext } from "../Global/GlobalStateContext";

const FeedCard = (props) => {
  const { products } = useContext(GlobalStateContext);

  const produtosImg =
    products &&
    products.map((p, i) => {
      return p;
    });

  return (
    <Conteiner>
      
      {props && (
        <FeedThumbnail
          onClickRestaurant={props.onClickRestaurant}
          id={props.restaurants.id}
          name={props.restaurants.name}
          image={props.restaurants.logoUrl}
          shipping={props.restaurants.shipping}
          deliveryTime={props.restaurants.deliveryTime}
        />
      )}
    </Conteiner>
  );
};

export default FeedCard;
// address:
// category:
// deliveryTime:
// description:
// id:
// logoUrl:
// name:
// shipping:
