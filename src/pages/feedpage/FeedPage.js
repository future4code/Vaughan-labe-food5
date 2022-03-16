import React, { useContext, useState } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { PageContainer } from './styled';

const FeedPage = () => {
    const navigate = useNavigate();

    const  goToRestaurantDetail = (id) => {
        navigate(`/restaurante/${id}`);
    }
  const { states } = useContext(GlobalStateContext);
  return (
    <div>
      <PageContainer>
        {states.restaurants &&
          states.restaurants.map((restaurant, i) => (
            <FeedCard key={i} restaurants={restaurant} onClickRestaurant={() =>  goToRestaurantDetail(restaurant.id)} />
          ))}
      </PageContainer>
      <Footer />
    </div>
  );
};
export default FeedPage;
