import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { Title, Container, RegisteredProfile, EditContainer, SaveEditProfile } from './styled';
import { handleAdress } from "../../axiosRequests/user";
import Footer from "../../components/Footer/Footer";

const EditAddress = () => {
  const navigate= useNavigate();
  const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", apartment: ""});

  const handleSubmission = (event) => {
    event.preventDefault();
    handleAdress(form, clear, navigate);
  };

  const goBack = () => {
    navigate("/perfil");
  };

  return (
    <>
      <img src={back} onClick={goBack} />

      <Title>
      <h1>Editar Endereço</h1>
      </Title>

      <TextFieldStyled
        onSubmit={handleSubmission}
        name="street"
        value={form.street}
        onChange={onChange}
        variant="outlined"
        label="Logradouro"
        required
      />
      <TextFieldStyled
        name="number"
        value={form.number}
        onChange={onChange}
        variant="outlined"
        label="Número"
        required
      />
      <TextFieldStyled
        name="apartment"
        value={form.apartment}
        onChange={onChange}
        variant="outlined"
        label="Complemento"
        required
      />
        <TextFieldStyled
        name="neighbourhood"
        value={form.neighbourhood}
        onChange={onChange}
        variant="outlined"
        label="Bairro"
        required
        />
        <TextFieldStyled
        name="city"
        value={form.city}
        onChange={onChange}
        variant="outlined"
        label="Cidade"
        required
        />
        <TextFieldStyled
        name="state"
        value={form.state}
        onChange={onChange}
        variant="outlined"
        label="Estado"
        required
        />
      <SaveEditProfile
      onClick={handleSubmission}>SALVAR
      </SaveEditProfile>
      <Footer />
    </>
  );
};

export default EditAddress;