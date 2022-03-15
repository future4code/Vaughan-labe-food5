import React, {useState} from 'react';
// import { Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import axios from "axios"
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {

    const history = useNavigate
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    

    const onChangeName = (event) => {
        setname(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangeCpf = (event) => {
        setCpf(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitSignUp = () => {
        console.log(name,email,cpf,password)
        const body = {
            name: name,
            email:email,
            cpf: cpf,
            password: password
        }
        axios.post(`${BASE_URL}/signup`, body)
        .then((response) => {
        console.log('Deu certo:',response.data.token)
        localStorage.setItem('token',response.data.token)
            history('/signup')

        })
        .catch((error) => {
            console.log('Deu errado:',error.response.data.message)
        })
    }   

    
    return (
        <form >
        
        <TextField id="outlined-basic" label="Nome" variant="outlined" value={name} onChange={onChangeName}/>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" value={email} onChange={onChangeEmail}/>
        <TextField id="outlined-basic" label="CPF" variant="outlined" value={cpf} onChange={onChangeCpf}/>
        <TextField id="outlined-basic" label="Senha" variant="outlined" value={password} onChange={onChangePassword}/>
        {/* <TextField id="outlined-basic" label="Confirmar Senha" variant="outlined" value={Confirmpassword} onChange={onChangePassword}/> */}
            
            
            <button onClick={onSubmitSignUp}>CRIAR</button>
    </form>
      );
}

export default SignupPage;