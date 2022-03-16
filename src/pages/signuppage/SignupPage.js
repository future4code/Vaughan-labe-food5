import React from "react";
// import { Box } from '@material-ui/core'
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToFeed } from "../../router/Coordinator";
import { useState } from "react";
import Logo from "../../assets/logo/logoLogin.svg";
import {
  BotaoContainer,
  EntrarPageContainer,
  ContainerCentral,
  ContainerPagina,
} from "./styled";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  const { form, onChangeForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitSignUp = (event) => {
    if (form.password === passwordConfirm) {
      event.preventDefault();
      axios
        .post(`${BASE_URL}/signup`, form)
        .then((response) => {
          alert("Cadastro realizado com sucesso! Peça seu pedido!");
          console.log("Deu certo:", response.data.token);
          localStorage.setItem("token", response.data.token);
          goToFeed(navigate);
        })
        .catch((error) => {
          console.log("Deu errado:", error.response.data.message);
        });
    } else {
      alert("Deve ser a mesma senha anterior.");
    }
  };

  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handlePassword = (event) => {
    setPasswordConfirm(event.target.value);
  };

  return (
    <ContainerPagina>
      <ContainerCentral>
        <img src={Logo} />
      </ContainerCentral>
      <ContainerCentral>
        <BotaoContainer>
          <ContainerCentral>
            <h3>Cadastro</h3>
          </ContainerCentral>

          <TextField
            name={"name"}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value={form.name}
            onChange={onChangeForm}
            required
          />
          <TextField
            name={"email"}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={form.email}
            onChange={onChangeForm}
            required
          />
          <TextField
            name={"cpf"}
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            value={form.cpf}
            onChange={onChangeForm}
            required
          />
          <TextField
            name={"password"}
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={onChangeForm}
            required
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
              ),
            }}
          />

          <TextField
            id="outlined-basic"
            label="Confirmar senha"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            placeholder="senha"
            value={passwordConfirm}
            onChange={handlePassword}
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
              ),
            }}
          />

          {/* <TextField id="outlined-basic" label="Confirmar Senha" variant="outlined" value={Confirmpassword} onChange={onChangePassword}/> */}

          <EntrarPageContainer onClick={onSubmitSignUp}>
            Fazer Cadastro
          </EntrarPageContainer>
        </BotaoContainer>
      </ContainerCentral>
    </ContainerPagina>
  );
};

export default SignupPage;
