import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [cart, setCart] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [restaurantId, setRestaurantId] = useState("")

  console.log("ESTADO GLOBAL CART", cart)

  useEffect(() => {
    pegarRestaurants();
  }, []);
  useEffect(() => {
    pegarProducts();
  }, [restaurants]);


  // useEffect(() => {

  // }, [cart])

  const pegarProducts = () => {
    const newList = [];
    restaurants.forEach((p) => {
      axios
        .get(`${BASE_URL}/restaurants/${p.id}`, {
          headers: {
            Auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkJhbmFuaW5oYSwgOTgsIDY1IC0gQmFuYW5pbmhhIiwiaWF0IjoxNjQ3MjgxODYwfQ.v_AQdOG33NHtcXjizcAM6QR0qj-SCrtHx5VT0xM2XcE",
          },
        })
        .then((res) => {
          newList.push(res.data.restaurant.products);
          if (newList.length === 10) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setProducts(orderedList);
            
          }
        })
        .catch((error) => console.log(error.message));
    });
  };

  const pegarRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          Auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkJhbmFuaW5oYSwgOTgsIDY1IC0gQmFuYW5pbmhhIiwiaWF0IjoxNjQ3MjgxODYwfQ.v_AQdOG33NHtcXjizcAM6QR0qj-SCrtHx5VT0xM2XcE",
        },
      })
      .then(({ data }) => {
        setFilteredRestaurants(data.restaurants);
        const newRestaurants = [];
        data.restaurants.forEach((p) => newRestaurants.push(p));
        setRestaurants((oldRestaurants) => [
          ...oldRestaurants,
          ...newRestaurants,
        ]);
      });
  };

  const states = {openModal, products, restaurants, cart, restaurantId, filteredRestaurants}
  const sets = {setOpenModal, setProducts, setRestaurants, setCart, setRestaurantId, setFilteredRestaurants}

  return (
    <GlobalStateContext.Provider value={{ states, sets }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
// address:
// category:
// deliveryTime:
// description:
// id:
// logoUrl:
// name:
// shipping:
