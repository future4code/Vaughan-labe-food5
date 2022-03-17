import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import {
  CardContainer,
  CardText,
  ColorTxt,
  ButtonCnt,
  IconBtn,
} from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ModalQuantityFood from "../ModalQuantityFood/ModalQuantityFood";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";

const CardFood = ({
  senQuantity,
  prodSelected,
  product,
  quantity,
  addCart,
  onChangeQuantity,
  onClickAdd,
  onClickRemove,
  sendBtnChange
}) => {
  const { states, sets } = useContext(GlobalStateContext);

  useEffect(() => {}, [states.cart]);

  // badgeContent={senQuantity.length > 0  ? senQuantity : 0}

  return (
    <div>
      <CardContainer>
        <img src={product.photoUrl} alt={product.name} />

        <CardText>
          {/* <IconBtn>
            <Badge
              color="primary"
              badgeContent={senQuantity.length > 0 ? senQuantity : 0}
              showZero
            >
              <ShoppingCartIcon color="secondary" />
            </Badge>
          </IconBtn> */}

          {senQuantity.length > 0 ? <IconBtn><ShoppingCartIcon color="secondary" />{senQuantity}</IconBtn>: 
            <IconBtn><ShoppingCartIcon color="secondary" /></IconBtn>
          }

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
            {sendBtnChange.length > 0 && sendBtnChange.includes('remover') ? <Button onClick={onClickRemove} variant="outlined" color="error">Remover</Button> : <Button onClick={onClickAdd} color="primary" variant="outlined">Adicionar</Button>}

            {/* <Button onClick={onClickAdd} color="primary" variant="outlined">
              Adicionar
            </Button> */}

          </ButtonCnt>
        </CardText>
        {prodSelected && prodSelected.id && states.openModal && (
          <ModalQuantityFood
            quantity={quantity}
            onChangeQuantity={onChangeQuantity}
            product={prodSelected}
            addCart={addCart}
          />
        )}
      </CardContainer>
    </div>
  );
};

export default CardFood;
