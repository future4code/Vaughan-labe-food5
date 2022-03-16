import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import {  useContext } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { CtnMargin, CtnCloseBtn } from "./styled";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { GlobalStateContext } from "../Global/GlobalStateContext";

const quantities = [
  {
    value: 0,
  },
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
  {
    value: 10,
  },
  {
    value: 11,
  },
  {
    value: 12,
  },
  {
    value: 13,
  },
  {
    value: 14,
  },
  {
    value: 15,
  },
];

const ModalQuantityFood = ({
  product,
  quantity,
  addCart,
  onChangeQuantity,
}) => {
  const { states, sets } = useContext(GlobalStateContext);
  

  console.log("addcart função",addCart);

  // const handleChange = (event) => {
  //     setQuantity(event.target.value);
  //   };
const onCloseModal = () => {
  sets.setOpenModal(false)
}
  const addToCart = () => {
  sets.setOpenModal(false)

    addCart(
      product.id,
      product.name,
      product.price,
      product.description,
      product.photoUrl, 
      product.category
    );

  console.log("TESTE ADD TO CART")

  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "white",
    borderRadius: "5px",
    p: 4,
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.8)",
  };

  return (
    <div>
      <Modal
        open={states.openModal}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          style: { background: "rgba(0, 0, 0, 0.4)", opacity: "0.2" },
        }}
      >
        <Box sx={style}>
          <CtnCloseBtn>
            <IconButton aria-label="close" onClick={onCloseModal}>
              <CloseIcon />
            </IconButton>
          </CtnCloseBtn>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 5 }}
          >
            Selecione a quantidade desejada
          </Typography>
          <CtnMargin>
            <TextField
              select
              label="Quantidade"
              value={quantity}
              onChange={onChangeQuantity}
              fullWidth
              id="outlined-select-currency-native"
              variant="outlined"
              color="#C7C7CC"
              required
            >
              {quantities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </CtnMargin>
          <CtnCloseBtn>
            <Button color="secondary" onCLick={addToCart}>
              Adicionar ao carrinho
            </Button>
          </CtnCloseBtn>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalQuantityFood;
