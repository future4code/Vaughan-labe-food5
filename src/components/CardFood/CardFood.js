import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  CardContainer,
  CardText,
  ColorTitle,
  ButtonCnt,
} from "./styled";

const CardFood = (props) => {
  return (
    
    <CardContainer>
      <img src={props.image} alt={props.title} />

      <CardText>
        <ColorTitle>
          <Typography variant="h5">{props.title}</Typography>
        </ColorTitle>
        <Typography variant="subtitle1" color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="h6">R$: {props.price}</Typography>
        <ButtonCnt>
          <Button color="primary" variant="outlined">
            Adicionar
          </Button>
        </ButtonCnt>
      </CardText>
    </CardContainer>
    
  );
};

export default CardFood;
