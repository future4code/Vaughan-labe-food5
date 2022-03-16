import React from "react";
// import { Box } from '@material-ui/core'
import TextFieldStyled from "@material-ui/core/TextField";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToFeed } from "../../router/Coordinator";
import { useState } from "react";
import Logo from "../../assets/logo/logoLogin.svg"
import { BotaoContainer, EntrarPageContainer, ContainerCentral, ContainerPagina } from "./styled";


const SignupPage = () => {
  const navigate = useNavigate();
  const { form, onChangeForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    
  });

  const onSubmitSignUp = (event) => {
    if(form.password === passwordConfirm) {

   

    event.preventDefault();
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((response) => {
          alert("Cadastro realizado com sucesso! Peça seu pedido!")
        console.log("Deu certo:", response.data.token);
        localStorage.setItem("token", response.data.token);
        goToFeed(navigate);
      })
      .catch((error) => {
        console.log("Deu errado:", error.response.data.message);
      });

    } else{
        alert("Deve ser a mesma senha anterior.")
    }
  };


  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handlePassword = (event) => {
    setPasswordConfirm(event.target.value)
  }



  return (
    <ContainerPagina>
      <ContainerCentral>
      <img src={Logo}/>
      </ContainerCentral>
      <ContainerCentral>
      <BotaoContainer>
<ContainerCentral>
  <h3>Cadastro</h3>
</ContainerCentral>



     
      <TextFieldStyled
        name={"name"}
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        value={form.name}
        onChange={onChangeForm}
        required
      />
      <TextFieldStyled
        name={"email"}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={form.email}
        onChange={onChangeForm}
        required
      />
      <TextFieldStyled
        name={"cpf"}
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        value={form.cpf}
        onChange={onChangeForm}
        required
      />
      <TextFieldStyled
        name={"password"}
        id="outlined-basic"
        label="Senha"
        variant="outlined"
        type="password"
        value={form.password}
        onChange={onChangeForm}
        required
      />

        <TextFieldStyled
        id="outlined-basic" 
        label="Confirmar senha" 
        variant="outlined"
        type="password"
        placeholder="senha"
        value={passwordConfirm}
        
        onChange={handlePassword}
        
        />
        

      {/* <TextField id="outlined-basic" label="Confirmar Senha" variant="outlined" value={Confirmpassword} onChange={onChangePassword}/> */}

      <EntrarPageContainer onClick={onSubmitSignUp}>Fazer Cadastro</EntrarPageContainer>
    
    </BotaoContainer>
    </ContainerCentral>
    
    
   
    </ContainerPagina>
  );
};

export default SignupPage;
