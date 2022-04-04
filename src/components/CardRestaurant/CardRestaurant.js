import React from "react";
import { BodyCtn, ColorTxt, TxtCtn, TxtBox } from "./styled";
import Typography from "@material-ui/core/Typography";

const CardRestaurant = (props) => {
  return (
    <BodyCtn>
      <img src={props.image} alt="imagem" />
      <Typography color="primary" variant="h5">
        {props.title}
      </Typography>
      <ColorTxt>
          <Typography variant="subtitle1" color="text.secondary">
            {props.category}
          </Typography>
          <TxtCtn>
              <TxtBox>
          <Typography variant="subtitle1" color="text.secondary">
            {props.time} min
          </Typography>
          </TxtBox>
          <TxtBox>
          <Typography variant="subtitle1" color="text.secondary">
            Frete R$:{props.shipping}
          </Typography>
          </TxtBox>
          </TxtCtn>
          <Typography variant="subtitle1" color="text.secondary">
            {props.address}
          </Typography>
        </ColorTxt>
    </BodyCtn>
  );
};

export default CardRestaurant;
