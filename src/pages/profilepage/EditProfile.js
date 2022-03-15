import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { Title, Container, RegisteredProfile, EditContainer, SaveEditProfile } from './styled';
import { handleProfile } from "../../axiosRequests/user";
import Footer from "../../components/Footer/Footer";

const EditProfile = () => {
  const navigate= useNavigate();
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" });

  const handleSubmission = (event) => {
    event.preventDefault();
    handleProfile(form, clear, navigate);
  };

  const goBack = () => {
    navigate("/perfil");
  };

  return (
    <>
      <img src={back} onClick={goBack} />

      <Title>
      <h1>Editar Perfil</h1>
      </Title>

      <TextFieldStyled
        onSubmit={handleSubmission}
        name="name"
        value={form.name}
        onChange={onChange}
        variant="outlined"
        label="Nome"
        className="Input_locus"
        required
      />
      <TextFieldStyled
        name="email"
        value={form.email}
        onChange={onChange}
        variant="outlined"
        label="E-mail"
        className="Input_locus"
        required
      />
      <TextFieldStyled
        name="cpf"
        value={form.cpf}
        onChange={onChange}
        variant="outlined"
        label="CPF"
        placeholder="Somente números"
        className="Input_locus"
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        required
      />
      <SaveEditProfile
      onClick={handleSubmission}>SALVAR</SaveEditProfile>
      <Footer />
    </>
  );
};

export default EditProfile;