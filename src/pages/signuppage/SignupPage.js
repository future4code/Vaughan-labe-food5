import React, { useState } from "react";
// import { Box } from '@material-ui/core'
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToFeed } from "../../router/Coordinator";

const SignupPage = () => {
  const navigate = useNavigate();
  const { form, onChangeForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitSignUp = (event) => {
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
  };

  return (
    <form onSubmit={onSubmitSignUp}>
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
        value={form.password}
        onChange={onChangeForm}
        required
      />
      {/* <TextField id="outlined-basic" label="Confirmar Senha" variant="outlined" value={Confirmpassword} onChange={onChangePassword}/> */}

      <Button type="submit">Fazer Cadastro</Button>
    </form>
  );
};

export default SignupPage;
