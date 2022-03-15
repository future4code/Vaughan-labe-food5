import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData";
import FeedCard from "../FeedCard/FeedCard";

export const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState({});
  const feeds = useRequestData([], `${BASE_URL}/restaurants`);

  useEffect(() => {
    pegarRestaurants();
  }, []);


  const pegarRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`,
      {
        headers: {
            Auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkJhbmFuaW5oYSwgOTgsIDY1IC0gQmFuYW5pbmhhIiwiaWF0IjoxNjQ3MjgxODYwfQ.v_AQdOG33NHtcXjizcAM6QR0qj-SCrtHx5VT0xM2XcE'
        }
    }
      )
      .then(( data ) => {
        const newRestaurant = [];
        data.data.restaurants.forEach((p) => newRestaurant.push(p));
        setRestaurants(newRestaurant);
        console.log(newRestaurant)
    });
  };


  const data = {
    restaurants,
    setRestaurants,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
