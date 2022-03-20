import React, { useContext, useEffect, useState } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  ConteinerInput,
  PageContainer,
  OrderActive,
  OrderActiveCtn,
  CtnTimer,
  ColorWhite,
} from "./styled";
import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { getAuthToken } from "../../constants/token";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const FeedPage = () => {
  useProtectedPage();
  const { states, sets } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  const getActiveOrder = () => {
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: getAuthToken(),
        },
      })
      .then((res) => {
        sets.setOrderStatus(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToSearch = () => {
    navigate(`/busca`);
  };
  const goToRestaurantDetail = (id) => {
    sets.setFilteredRestaurants(states.restaurants);
    navigate(`/restaurante/${id}`);
  };

  useEffect(() => {
    sets.setFilteredRestaurants(states.restaurants);
    getActiveOrder();
  }, []);


  return (
    <div>
      <Header />
      <PageContainer>
        <ConteinerInput>
          <TextField
            variant="outlined"
            onClick={() => goToSearch(navigate)}
            placeholder={"  Restaurante"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </ConteinerInput>

        <Navbar />

        {states.filteredRestaurants &&
          states.filteredRestaurants.map((restaurant, i) => (
            <FeedCard
              key={i}
              restaurants={restaurant}
              onClickRestaurant={() => goToRestaurantDetail(restaurant.id)}
            />
          ))}
        {states.orderStatus && states.orderStatus ? (
          <OrderActiveCtn>
            <OrderActive>
              <CtnTimer>
                <AccessTimeIcon fontSize="large" />
              </CtnTimer>
              <div>
                <ColorWhite>
                  <p>Pedido em andamento</p>
                </ColorWhite>
                <p>{states.orderStatus && states.orderStatus.restaurantName}</p>
                <p><strong>SUBTOTAL R${states.orderStatus && states.orderStatus.totalPrice}</strong></p>
              </div>
            </OrderActive>
          </OrderActiveCtn>
        ) : (
          <></>
        )}
      </PageContainer>

      <Footer />
    </div>
  );
};
export default FeedPage;
