import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { TextField } from '@material-ui/core'



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
            history('/login')

        })
        .catch((error) => {
            console.log('Deu errado:',error.response.data.message)
        })
    }   

   


    return (
        <div>
            <h1>Entrar</h1>
            
            
        <TextField id="outlined-basic" label="E-mail" variant="outlined" 
        
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}          
                        
        />
        <TextField id="outlined-basic" label="E-mail" variant="outlined"

        placeholder="senha"
        type="password"
        value={password}
        onChange={onChangePassword}
        
        />
        
            <button onClick={onSubmitLogin}>Entrar</button>
            <p>Não possui cadastro? Clique aqui.</p>
        </div>
    )
}

export default LoginPage;