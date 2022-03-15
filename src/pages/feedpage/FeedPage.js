import React, { useContext, useState } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
const FeedPage = () => {
    const navigate = useNavigate()

    const  goToRestaurantDetail = (id) => {
        navigate(`/restaurante/${id}`);
    }
  const { states } = useContext(GlobalStateContext);
  return (
    <div>
      <h1>Feed</h1>
      <div>
        {states.restaurants &&
          states.restaurants.map((restaurant, i) => (
            <FeedCard key={i} restaurants={restaurant} onClickRestaurant={() =>  goToRestaurantDetail(restaurant.id)} />
          ))}
      </div>
    </div>
  );
};
export default FeedPage;
