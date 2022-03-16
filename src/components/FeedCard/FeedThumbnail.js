import React from "react";
import { Foot, ConteinerThumb, IMG, RestaurantContainer, ImgContainer } from "./styled";

const FeedThumbnail = ({
  address,
  category,
  deliveryTime,
  description,
  id,
  image,
  name,
  shipping,
  onClickRestaurant,
}) => {
  return (
    <ConteinerThumb key={id} onClick={onClickRestaurant}>
      {/* <ImgContainer> */}
      <IMG src={image} alt={name} />
      {/* </ImgContainer> */}
      
        <RestaurantContainer>
        <p>{name}</p>
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
// address:
// category:
// deliveryTime:
// description:
// id:
// logoUrl:
// name:
// shipping:
