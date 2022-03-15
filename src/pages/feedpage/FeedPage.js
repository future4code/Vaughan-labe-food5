import React, { useContext, useState } from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";

const FeedPage = () => {
  const { restaurants } = useContext(GlobalStateContext);
  return (
    <div>
      <h1>Feed</h1>
      <div>
        {restaurants &&
          restaurants.map((restaurant, i) => (
            <FeedCard key={i} restaurants={restaurant} />
          ))}
      </div>
    </div>
  );
};
export default FeedPage;
