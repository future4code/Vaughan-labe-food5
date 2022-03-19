import React from "react";
import { Foot, ConteinerThumb, IMG, RestaurantContainer, ImgContainer } from "./styled";

const FeedThumbnail = ({
  deliveryTime,
  id,
  image,
  name,
  shipping,
  onClickRestaurant,
}) => {
  return (
    <ConteinerThumb key={id} onClick={onClickRestaurant}>
      <IMG src={image} alt={name} />
        <RestaurantContainer>
        <strong>{name}</strong>
        <Foot>
          <small>
            {deliveryTime - 10}-{deliveryTime} min
          </small>
          <br />
          <small>Frete R${shipping},00</small>
          </Foot>
        </RestaurantContainer>
      
    </ConteinerThumb>
  );
};

export default FeedThumbnail;

