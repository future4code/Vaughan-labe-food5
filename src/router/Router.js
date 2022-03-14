import { Route, Routes } from "react-router-dom";
import React from "react";
import FeedPage from "../pages/feedpage/FeedPage";
import LoginPage from "../pages/loginpage/LoginPage";
import SignupPage from "../pages/signuppage/SignupPage";
import AddressRegisterPage from "../pages/addressregisterpage/AddressRegisterPage";
import RestaurantPage from "../pages/restaurantpage/RestaurantPage";
import CartPage from "../pages/cartpage/CartPage";
import ProfilePage from "../pages/profilepage/ProfilePage";
import OrderPage from "../pages/orderpage/OrderPage";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<FeedPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/cadastro" element={<SignupPage />} />
      <Route exact path="/endereço" element={<AddressRegisterPage />} />
      <Route exact path="/restaurantes" element={<RestaurantPage />} />
      <Route exact path="/carrinho" element={<CartPage />} />
      <Route exact path="/perfil" element={<ProfilePage />} />
      <Route exact path="/pedidoemandamento" element={<OrderPage />} />
    </Routes>
  );
};

export default Router;
