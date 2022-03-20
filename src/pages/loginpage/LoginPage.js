import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { BotaoContainer, EntrarPageContainer, ContainerCentral, ContainerPagina } from "./styled";
import {TextField, InputAdornment, IconButton} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Logo from "../../assets/logo/logoLogin.svg"
import {useUnProtectedPage} from '../../hooks/useUnProtectedPage'


const LoginPage = () => {
    useUnProtectedPage()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    
    

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
        localStorage.setItem('token',response.data.token)
            navigate('/home')

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
            
            
        <TextField 
        id="outlined-basic" 
        label="E-mail" 
        variant="outlined" 
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}          
                        
        />
        <TextField
        id="outlined-basic" 
        label="Senha" 
        variant="outlined"
        placeholder="senha"
        value={password}
        type={showPassword ? "text" : "password"}
        onChange={onChangePassword}
        InputProps={{ 
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        
        />
        
        <EntrarPageContainer onClick={onSubmitLogin}> <strong> Entrar </strong></EntrarPageContainer>
        <ContainerCentral> 
        <h4> Não possui cadastro? Clique <span onClick={() =>
         navigate('/cadastro')
        }> aqui.</span> 
        </h4>
        </ContainerCentral>

        </BotaoContainer>
        </ContainerPagina>
    )
}

export default LoginPage;