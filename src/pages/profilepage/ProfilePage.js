import CreateIcon from '@material-ui/icons/Create';
import { Title, Container, Container2, RegisteredProfile, EditContainer, OrderHistoryContainer, AddressContainer, PageContainer } from './styled';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { goToEditProfile, goToEditAddress } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { getProfile, handleLogin, getOrderHistory } from "../../axiosRequests/user";
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

 
  return (
    <>
    <PageContainer>
        {/* <button onClick={() => handleLogin(
            {
                email: "astrodev@future4.com",
                password: "123456"
            },
            () => {},
            navigate
        )}>
            Login
        </button> */}
         <Title>
            <h1>Meu perfil</h1>
         </Title>
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
                <CreateIcon onClick={() => goToEditAddress(navigate)}/>
            </EditContainer>
        </Container2>
        <p>Histórico de pedidos</p>
        <hr/>
        {orderHistory.map(order => (
            <OrderHistoryContainer>
                <p>{order.restaurantName}</p>
                <span>{order.createdAt}</span>
                <h4>R$ {order.totalPrice}</h4>
            
            </OrderHistoryContainer>
        ))}
        
        </PageContainer>
        <Footer />
    </>

  )
}

export default ProfilePage;