import React from "react";
import { Foot, ConteinerThumb, IMG } from "./styled";

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
      <IMG src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <div>
          <small>
            {deliveryTime - 10}-{deliveryTime} min
          </small>
          <br />
          <small>Frete R${shipping},00</small>
        </div>
      </div>
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
