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

const ProfilePage = () => {
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

  return (
    <>
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
          <AddressContainer>
            <p>Endereço cadastrado:</p>
            <p>{profile.address}</p>
          </AddressContainer>
          <EditContainer>
            <CreateIcon onClick={() => goToEditAddress(navigate)} />
          </EditContainer>
        </Container2>
        <OrderHistoryTitleContainer>
          <p>Histórico de pedidos</p>
          <hr />
        </OrderHistoryTitleContainer>
        {orderHistory.map((order) => (
          <OrderHistoryContainer>
            <p>{order.restaurantName}</p>
            <strong>
              {formatDateToLocalDate(order.createdAt)},{" "}
              {formatDateToLocalTime(order.createdAt)}
            </strong>
            <h4>SUBTOTAL R$:{order.totalPrice + "0"}</h4>
          </OrderHistoryContainer>
        ))}
      </PageContainer>
      <Footer />
    </>
  );
};

export default ProfilePage;
