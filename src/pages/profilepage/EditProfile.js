import React from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import { useFormPerfil } from "../../hooks/useForm";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { SaveEditProfile, EditProfileContainer } from "./styled";
import { handleProfile } from "../../axiosRequests/user";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const EditProfile = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [form, onChange, clear] = useFormPerfil({
    name: "",
    email: "",
    cpf: "",
  });

  const handleSubmission = (event) => {
    event.preventDefault();
    handleProfile(form, clear, navigate);
    navigate(-1);
    alert("Perfil alterado com sucesso!");
  };


  return (
    <>
    <Header />
      <EditProfileContainer>
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
        <SaveEditProfile onClick={handleSubmission}>SALVAR</SaveEditProfile>
      </EditProfileContainer>
    </>
  );
};

export default EditProfile;
