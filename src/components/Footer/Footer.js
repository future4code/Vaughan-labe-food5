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
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/carrinho");
  };

  const goToProfile = () => {
    navigate("/perfil");
  };

  return (
    <FooterCard>
      <Item1>
        <HomepageIcon src={homepage} onClick={goToHomepage} />
      </Item1>
      <Item2>
        <ShoppingCartIcon src={shoppingCart} onClick={goToCart} />
      </Item2>
      <Item3>
        <AvatarIcon src={avatar} onClick={goToProfile} />
      </Item3>
    </FooterCard>
  );
};

export default Footer;