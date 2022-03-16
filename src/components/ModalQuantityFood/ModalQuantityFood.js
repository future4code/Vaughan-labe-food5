import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { useState, useContext } from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {CtnMargin, CtnCloseBtn} from './styled';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
//import {GlobalStateContext} from "../Global/GlobalStateContext";

const quantities = [
    {
        value: 0
    },
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    },
    {
        value: 5
    },
    {
        value: 6
    },
    {
        value: 7
    },
    {
        value: 8
    },
    {
        value: 9
    },
    {
        value:10
    },
    {
        value: 11
      },
      {
        value: 12
      },
      {
        value: 13
      },
      {
        value: 14
      },
      {
          value: 15
      },
  ];


const ModalQuantityFood = (props) => {
  //   const { states, sets } = useContext(GlobalStateContext)
    const [quantity, setQuantity] = useState(null)
  //  // const [open, setOpen] = useState(false);
  //   const handleOpen = () => sets.setOpenModal(true);
  //   const handleClose = () => sets.setOpenModal(false);

    const handleChange = (event) => {
        setQuantity(event.target.value);
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
    textAlign:'center',
      background: 'rgba(0, 0, 0, 0.8)'

  };



  return (
    <div>
      <Button onClick={props.onClickOpen}>Open modal</Button>
      <Modal
        open={props.value}
        onClose={props.onClickClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: { background: "rgba(0, 0, 0, 0.4)", opacity: "0.2" } }} 
      >
        <Box sx={style}>
            <CtnCloseBtn>

         
        <IconButton aria-label="close" onClick={props.onClickClose} >
        <CloseIcon />
      </IconButton>
      </CtnCloseBtn>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 5 }}>
            Selecione a quantidade desejada
          </Typography>
          <CtnMargin>
          <TextField
          select
          label="Quantidade"
          value={quantity}
          onChange={handleChange}
          fullWidth
          id="outlined-select-currency-native"
          variant="outlined"
          color="#C7C7CC"
        >
          {quantities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </CtnMargin>
        <CtnCloseBtn>
        <Button color="secondary" onCLick={props.addToCart}>Adicionar ao carrinho</Button>
        </CtnCloseBtn>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalQuantityFood;
