import React from "react";
import {
  FooterCard,
  Item1,
  Item2,
  Item3,
  HomepageIcon,
  ShoppingCartIcon,
  AvatarIcon,
} from "./Styled";
import homepage from "../../assets/footer/homepage.svg";
import shoppingCart from "../../assets/footer/shopping-cart.svg";
import avatar from "../../assets/footer/avatar.svg";
import homepage2 from "../../assets/footer/homepage2.svg";
import shoppingCart2 from "../../assets/footer/shopping-cart2.svg";
import avatar2 from "../../assets/footer/avatar2.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHomepage = () => {
    navigate("/home");
  };

  const goToCart = () => {
    navigate("/carrinho");
  };

  const goToProfile = () => {
    navigate("/perfil");
  };

  const iconeAvatar1 = avatar;
  const iconeAvatar2 = avatar2;
  const iconeHomepage1 = homepage;
  const iconeHomepage2 = homepage2;
  const iconeShoppingCart1 = shoppingCart;
  const iconeShoppingCart2 = shoppingCart2;

  const changeIconHomeBasedOnLocation = (location) => {
    switch (location.pathname) {
      case "/home":
        return iconeHomepage2;
      default:
        return iconeHomepage1;
    }
  };

  const changeIconCartBasedOnLocation = (location) => {
    switch (location.pathname) {
      case "/carrinho":
        return iconeShoppingCart2;
      default:
        return iconeShoppingCart1;
    }
  };

  const changeIconProfileBasedOnLocation = (location) => {
    switch (location.pathname) {
      case "/perfil":
        return iconeAvatar2;
      default:
        return iconeAvatar1;
    }
  };


  return (
    <FooterCard>
      <Item1>
        <HomepageIcon src={changeIconHomeBasedOnLocation(location)} onClick={goToHomepage} />
      </Item1>
      <Item2>
        <ShoppingCartIcon src={changeIconCartBasedOnLocation(location)} onClick={goToCart} />
      </Item2>
      <Item3>
        <AvatarIcon src={changeIconProfileBasedOnLocation(location)} onClick={goToProfile} />
      </Item3>
    </FooterCard>
  );
};

export default Footer;