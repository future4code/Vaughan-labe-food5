import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E5E5EA;
    `;

const Header = () => {
const navigate = useNavigate();
const location = useLocation();

const changeHeaderTitle = (location) => {
    switch (location.pathname) {
        case "/home":
            return "Home";
        case "/carrinho":
            return "Carrinho";
        case "/perfil":
            return "Meu perfil";
        case "/pedidoemandamento":
            return "Pedido em andamento";
        case "/restaurantes":
            return "Restaurantes";
        case "/editarPerfil":
            return "Editar Perfil";
        case "/editarEndereco":
            return "Editar Endereço";
        case "/endereco":
            return "Meu endereço";
        default:
            return "Rappi4";
    }
};
        



    return (
        <HeaderContainer>
            <h4>{changeHeaderTitle(location)}</h4>
        </HeaderContainer>
      );
}

export default Header;