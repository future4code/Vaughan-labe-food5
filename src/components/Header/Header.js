import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import back from "../../assets/back.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderContainerBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  
  img {
    width: 30px;
    height: 30px;
    position: relative;
    left: 20px;
  }
`;

const HeaderContainerTitle = styled.div`
  display: flex;
`;

const DivFantasma = styled.div`
  width: 10px;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const hideBackFromHome = () => {
    if (location.pathname === "/home") {
      return (
        <HeaderContainerBack>
          <DivFantasma />
        </HeaderContainerBack>
      );
    } else {
      return (
        <HeaderContainerBack>
          <img src={back} alt="Voltar" onClick={goBack} />
        </HeaderContainerBack>
      );
    }
  };

  const changeHeaderTitle = (location) => {
    if (location.pathname.includes("/restaurante")) {
      return "Restaurante";
    } else if (location.pathname.includes("/carrinho")) {
      return "Carrinho";
    } else if (location.pathname.includes("/perfil")) {
      return "Meu perfil";
    } else if (location.pathname.includes("/home")) {
      return "Home";
    } else if (location.pathname.includes("/pedido")) {
      return "Pedido";
    } else if (location.pathname.includes("/pedidos")) {
      return "Pedidos";
    } else if (location.pathname.includes("/restaurantes")) {
      return "Restaurantes";
    } else if (location.pathname.includes("/restaurante")) {
      return "Restaurante";
    } else if (location.pathname.includes("/carrinho")) {
      return "Carrinho";
    } else if (location.pathname.includes("/editarPerfil")) {
      return "Editar Perfil";
    } else if (location.pathname.includes("/editarEndereco")) {
      return "Editar Endereço";
    } else if (location.pathname.includes("/endereco")) {
      return "Meu endereço";
    } else if (location.pathname.includes("/busca")) {
      return "Busca";
    } else {
      return "Rappi4";
    }
  };

  return (
    <HeaderContainer>
      <HeaderContainerBack>
        {hideBackFromHome()}
      </HeaderContainerBack>
      <HeaderContainerTitle>
        <h4>{changeHeaderTitle(location)}</h4>
      </HeaderContainerTitle>
      <DivFantasma />
    </HeaderContainer>
  );
};

export default Header;
