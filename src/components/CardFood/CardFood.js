import React from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { CardContainer, CardText, ColorTxt, ButtonCnt,IconBtn } from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ModalQuantityFood from "../ModalQuantityFood/ModalQuantityFood";

const CardFood = ({product, quantity, addCart,onChangeQuantity, onClickAdd }) => {

  return (
    <div>
    <CardContainer>
      
      <img src={product.photoUrl} alt={product.name} />

      <CardText>
        <IconBtn>
          <Badge  color="primary" badgeContent={quantity} showZero>
            <ShoppingCartIcon color="secondary"/>
          </Badge>
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
          <Button
            onClick={onClickAdd}
            color="primary"
            variant="outlined"
          >
            Adicionar
          </Button>
        </ButtonCnt>
      </CardText>
      <ModalQuantityFood 
      quantity={quantity}
      onChangeQuantity={onChangeQuantity}
      product={product}
      addCart={addCart} 
      />
    </CardContainer>
    </div>
  );
};

export default CardFood;
