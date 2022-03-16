import React from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import {useFormPerfil} from "../../hooks/useForm";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import {  SaveEditProfile, EditAddressContainer } from './styled';
import { handleAdress } from "../../axiosRequests/user";
import Footer from "../../components/Footer/Footer";

const EditAddress = () => {
  const navigate= useNavigate();
  const [form, onChange, clear] = useFormPerfil({ street: "", number: "", neighbourhood: "", city: "", state: "", apartment: ""});

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

        <EditAddressContainer>
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
        </EditAddressContainer>
      <Footer />
    </>
  );
};

export default EditAddress;