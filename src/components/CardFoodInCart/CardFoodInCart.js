import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
// import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import {
  CardContainer,
  CardText,
  ColorTxt,
  ButtonCnt,
  IconBtn,
  // Badge,
} from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ModalQuantityFood from "../ModalQuantityFood/ModalQuantityFood";
import { GlobalStateContext } from "../Global/GlobalStateContext";
import styled from "styled-components";

const Badge = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color: #E86E5A;
position: relative;
right: -40px;
top: -15px;
color: #fff;
padding: 0.5rem;
height: 10px;
width: 10px;
border-radius: 50%;
`

const CardFoodInCart = ({
  senQuantity,
  prodSelected,
  product,
  quantity,
  addCart,
  onChangeQuantity,
  onClickRemove,
}) => {
  const { states, sets } = useContext(GlobalStateContext);

  useEffect(() => {}, [states.cart]);

  // badgeContent={senQuantity.length > 0  ? senQuantity : 0}

  return (
    <div>
      <CardContainer>
        <img src={product.photoUrl} alt={product.name} />

        <CardText>
            <IconBtn>
            <Badge>{senQuantity}</Badge> 
              <ShoppingCartIcon color="secondary" />
            </IconBtn>
            
          

          <Typography color="primary" variant="h5">
            {product.name}
          </Typography>
          <ColorTxt>
            <Typography variant="subtitle1" color="text.secondary">
              {product.description}
            </Typography>
          </ColorTxt>
          <Typography variant="h6">R$: {product.price}</Typography>
          <ButtonCnt>
            <Button onClick={onClickRemove} variant="outlined" color="error">Remover</Button>
          </ButtonCnt>
        </CardText>
      </CardContainer>
    </div>
  );
};

export default CardFoodInCart;
