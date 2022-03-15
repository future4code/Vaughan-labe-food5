import React from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { CardContainer, CardText, ColorTxt, ButtonCnt,IconBtn } from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CardFood = (props) => {
  return (
    <CardContainer>
      <img src={props.image} alt={props.title} />

      <CardText>
        <IconBtn>
          <Badge  color="primary" badgeContent={6} showZero>
            <ShoppingCartIcon color="secondary"/>
          </Badge>
        </IconBtn>

        <Typography color="primary" variant="h5">
          {props.title}
        </Typography>
        <ColorTxt>
          <Typography variant="subtitle1" color="text.secondary">
            {props.description}
          </Typography>
        </ColorTxt>
        <Typography variant="h6">R$: {props.price}</Typography>
        <ButtonCnt>
          <Button
            onClick={props.onClickAddProduct}
            color="primary"
            variant="outlined"
          >
            Adicionar
          </Button>
        </ButtonCnt>
      </CardText>
    </CardContainer>
  );
};

export default CardFood;
