import React, { useContext } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { ConteinerInput, PageContainer } from "./styled";
import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Navbar from "../../components/Navbar/Navbar";

const FeedPage = () => {
  const { states } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const goToSearch = () => {
    navigate(`/busca`);
  };
  const goToRestaurantDetail = (id) => {
    navigate(`/restaurante/${id}`);
  };
  
  return (
    <div>
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
        <Navbar/>
        {states.restaurants &&
          states.restaurants.map((restaurant, i) => (
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
