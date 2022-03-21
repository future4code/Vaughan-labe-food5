import { Route, Routes } from "react-router-dom";
import React from "react";
import FeedPage from "../pages/feedpage/FeedPage";
import LoginPage from "../pages/loginpage/LoginPage";
import SignupPage from "../pages/signuppage/SignupPage";
import Address from "../pages/addressregisterpage/Address";
import RestaurantPage from "../pages/restaurantpage/RestaurantPage";
import CartPage from "../pages/cartpage/CartPage";
import ProfilePage from "../pages/profilepage/ProfilePage";
import EditProfile from "../pages/profilepage/EditProfile";
import EditAddress from "../pages/profilepage/EditAddress";
import Splashscreen from "../pages/splashscreen/Splashscreen";
import SearchPage from "../pages/searchPage/SearchPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route exact path="/home" element={<FeedPage />} />
      <Route exact path="/busca" element={<SearchPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/cadastro" element={<SignupPage />} />
      <Route exact path="/endereco" element={<Address />} />
      <Route exact path="/editarPerfil" element={<EditProfile />} />
      <Route exact path="/editarEndereco" element={<EditAddress />} />
      <Route exact path={"/restaurante/:id"} element={<RestaurantPage />} />
      <Route exact path="/carrinho" element={<CartPage />} />
      <Route exact path="/perfil" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
