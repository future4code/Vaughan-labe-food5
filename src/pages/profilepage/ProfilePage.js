import CreateIcon from '@material-ui/icons/Create';
import { Title, Container, RegisteredProfile, EditContainer } from './styled';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { goToEditProfile, goToEditAddress } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { getProfile, handleLogin } from "../../axiosRequests/user";
import Footer from "../../components/Footer/Footer";
import useForm from "../../hooks/useForm";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});



  useEffect(() => {
    getProfile(setProfile);
  }, []);

 
  return (
    <div>
        <button onClick={() => handleLogin(
            {
                email: "astrodev@future4.com",
                password: "123456"
            },
            () => {},
            navigate
        )}>
            Login
        </button>
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
        <Container>
             
            <RegisteredProfile>
                <p>Endereço cadastrado:</p>
                <p>{profile.address}</p>
            </RegisteredProfile>
            <EditContainer>
                <CreateIcon onClick={() => goToEditAddress(navigate)}/>
            </EditContainer>
        </Container>
        <Footer />
        </div>
  )
}

export default ProfilePage;