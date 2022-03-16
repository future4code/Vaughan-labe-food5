import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { BotaoContainer, EntrarPageContainer, ContainerCentral, ContainerPagina } from "./styled";
import TextFieldStyled from "@material-ui/core/TextField";
import Logo from "../../assets/logo/logoLogin.svg"



const LoginPage = () => {
    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
        console.log('Deu certo:',response.data.token)
        localStorage.setItem('token',response.data.token)
            history('/home')

        })
        .catch((error) => {
            console.log('Deu errado:',error.response.data.message)
        })
    }   


    
    return (
        <ContainerPagina>
        <ContainerCentral> <img src={Logo} /> </ContainerCentral>
        <BotaoContainer>

        <ContainerCentral><h3>Entrar</h3> </ContainerCentral> 
            
            
        <TextFieldStyled 
        id="outlined-basic" 
        label="E-mail" 
        variant="outlined" 
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}          
                        
        />
        <TextFieldStyled
        id="outlined-basic" 
        label="Senha" 
        variant="outlined"
        placeholder="senha"
        value={password}
        type="password"
        onChange={onChangePassword}
        
        />
        
        <EntrarPageContainer onClick={onSubmitLogin}> <strong> Entrar </strong></EntrarPageContainer>
        <ContainerCentral> 
        <h4> Não possui cadastro? Clique <span onClick={() =>
         history('/cadastro')
        }> aqui.</span> 
        </h4>
        </ContainerCentral>

        </BotaoContainer>
        </ContainerPagina>
    )
}

export default LoginPage;