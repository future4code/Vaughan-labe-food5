import CreateIcon from "@material-ui/icons/Create";
import {
  Title,
  Container,
  Container2,
  RegisteredProfile,
  EditContainer,
  OrderHistoryContainer,
  AddressContainer,
  PageContainer,
  OrderHistoryTitleContainer,
} from "./styled";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { goToEditProfile, goToEditAddress } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  handleLogin,
  getOrderHistory,
} from "../../axiosRequests/user";
import Footer from "../../components/Footer/Footer";
import useForm from "../../hooks/useForm";
import Header from "../../components/Header/Header";
import { useProtectedPage } from '../../hooks/useProtectedPage'

const ProfilePage = () => {
  useProtectedPage()
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getProfile(setProfile);
    getOrderHistory(setOrderHistory);
  }, []);

  const formatDateToLocalDate = (date) => {
    const dateUTC = new Date(date);
    return dateUTC.toLocaleDateString();
  };

  const formatDateToLocalTime = (date) => {
    const dateUTC = new Date(date);
    return dateUTC.toLocaleTimeString();
  };

  const renderAddress = profile.address ? (
    <>
    <AddressContainer>
            <p>Endereço cadastrado:</p>
            <p>{profile.address}</p>
          </AddressContainer>
          <EditContainer>
            <CreateIcon onClick={() => goToEditAddress(navigate)} />
          </EditContainer>
          </>
  ) : (
    <AddressContainer>
      <p>
        Favor cadastrar um endereçoclicando{" "}
        <strong onClick={() => navigate("/endereco")}>aqui.</strong>
      </p>
    </AddressContainer>
  );

  return (
    console.log(orderHistory),
    <>
    <Header />
      <PageContainer>
        <Container>
          <RegisteredProfile>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
          </RegisteredProfile>
          <EditContainer>
            <CreateIcon onClick={() => goToEditProfile(navigate)} />
          </EditContainer>
        </Container>

        <Container2>
          {renderAddress}
        </Container2>

        <OrderHistoryTitleContainer>
          <p>Histórico de pedidos</p>
          <hr />



          {orderHistory.length > 0 ? (
            <div>
              {orderHistory.map((order) => {
                return (
                  <OrderHistoryContainer key={order.id}>
                    <p>{order.restaurantName}</p>
                  <span>{formatDateToLocalDate(order.createdAt)}, {formatDateToLocalTime(order.createdAt)}</span>
                  <br />
                  <strong>SUBTOTAL: R${order.totalPrice}</strong>
                  </OrderHistoryContainer>
                );
              })}
            </div>
      
              
          ) : (
            <p>Nenhum pedido realizado</p>
          )}


        </OrderHistoryTitleContainer>
      </PageContainer>

      <Footer />
    </>
  );
};

export default ProfilePage;
