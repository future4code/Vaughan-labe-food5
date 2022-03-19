import React, { useContext, useEffect, useState } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  ConteinerInput,
  PageContainer,
  ConteinerNav,
  SectionNavbar,
} from "./styled";
import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

const FeedPage = () => {
  const { states, sets } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate(`/busca`);
  };
  const goToRestaurantDetail = (id) => {
    sets.setFilteredRestaurants(states.restaurants);
    navigate(`/restaurante/${id}`);
  };

  useEffect(() => {
    sets.setFilteredRestaurants(states.restaurants);
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
      </PageContainer>
      <Footer />
    </div>
  );
};
export default FeedPage;
