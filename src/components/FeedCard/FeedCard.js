import React from "react";
import { Conteiner } from "./styled";
import FeedThumbnail from "./FeedThumbnail";

const FeedCard = (props) => {
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

