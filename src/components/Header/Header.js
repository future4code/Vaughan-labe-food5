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
const location = useLocation();


// const switchFunction = (string) => {
//     if (string.includes('/restaurante')) {
//         return "Restaurante";
//     }
// };


const changeHeaderTitle = (location) => {
    if (location.pathname.includes('/restaurante')) {
        return "Restaurante";
    } else if (location.pathname.includes('/carrinho')) {
        return "Carrinho";
    } else if (location.pathname.includes('/perfil')) {
        return "Meu perfil";
    } else if (location.pathname.includes('/home')) {
        return "Rappi4";
    } else if (location.pathname.includes('/pedido')) {
        return "Pedido";
    } else if (location.pathname.includes('/pedidos')) {
        return "Pedidos";
    } else if (location.pathname.includes('/restaurantes')) {
        return "Restaurantes";
    } else if (location.pathname.includes('/restaurante')) {
        return "Restaurante";
    } else if (location.pathname.includes('/carrinho')) {
        return "Carrinho";
    } else if (location.pathname.includes('/editarPerfil')) {
        return "Editar Perfil";
    } else if (location.pathname.includes('/editarEndereco')) {
        return "Editar Endereço";
    } else if (location.pathname.includes('/endereco')) {
        return "Meu endereço";
    } else {
        return "Rappi4";
    }


};
    
//     switch (location.pathname) {
//         case "/home":
//             return "Home";
//         case "/carrinho":
//             return "Carrinho";
//         case "/perfil":
//             return "Meu perfil";
//         case "/pedidoemandamento":
//             return "Pedido em andamento";
//         case "/restaurantes":
//             return "Restaurantes";
//         case "/editarPerfil":
//             return "Editar Perfil";
//         case "/editarEndereco":
//             return "Editar Endereço";
//         case "/endereco":
//             return "Meu endereço";
//         default:
//             return "Rappi4";
//     }
// };
        



    return (
        <HeaderContainer>
            <h4>{changeHeaderTitle(location)}</h4>
        </HeaderContainer>
      );
}

export default Header;