import React, { useContext } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { PageContainer } from "./styled";
import { TextField } from "@material-ui/core";

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
        <TextField
          variant="outlined"
          onClick={() => goToSearch(navigate)}
          placeholder={"  Restaurante"}
        />
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
