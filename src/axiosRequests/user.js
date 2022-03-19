import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAdress, goToFeed } from "../router/Coordinator";

// *************** AXIOS PARA LOGAR ***************** //

export const handleLogin = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      alert("ok");
      // console.log(res.data);
      // console.log(res.data.user.name)
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);

      if (res.data.user.hasAddress === false) {
        alert(
          `Olá ${res.data.user.name}! Parece que você não possui um endereço associado. Estamos te redirecionando...`
        );
        goToAdress(navigate);
      } else {
        alert("BEM VINDO");
        // goToFeed(navigate);
        goToFeed(navigate);
      }
      clear();
    })
    .catch((error) => {
      alert("deu erro no login");
      console.log(error.response);
    })
}

// *************** AXIOS PARA ALTERAR ENDEREÇO ***************** //


export const handleAdress = (body, clear, navigate) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    }
  }

  axios
    .put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
      alert("Endereço alterado com sucesso!");
      console.log(res.data);
      clear();
    })
    .catch((error) => {
      alert("Erro ao modificar endereço");
      console.log(error.response);
    })
}

// *************** AXIOS PARA PEGAR PERFIL ***************** //


export const getProfile = (setProfile) => {
  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    }
  }

  axios
    .get(`${BASE_URL}/profile`, headers)
    .then((response) => setProfile(response.data.user))
    .catch((error) => {
      console.log(error.response);
    })
}

// *************** AXIOS PARA ALTERARA PERFIL ***************** //

export const handleProfile = (body, clear, navigate) => {
  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    }
  }

  axios
    .put(`${BASE_URL}/profile`, body, headers)
    .then((res) => {
      alert("perfil alterado com sucesso");
      console.log(res.data);
      clear();
    })
    .catch((error) => {
      alert("perfil deu erro");
      console.log(error.response);
    })
}

// *************** AXIOS PARA PEGAR RESTAURANTES ***************** //


export const getRestaurants = (setRestaurants) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token")
    }
  }
  axios
    .get(`${BASE_URL}/restaurants`, headers)
    .then((response) => setRestaurants(response.data.restaurant))
    // console.log("Restaurants: ", restaurants);
    .catch((err) => {
      console.log(err.response);
    })
}

// *************** AXIOS PARA PEGAR DETALHES DO RESTAURANTE ***************** //


export const getDetailRestaurant = (id, setRestaurant) => {
  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }
  axios
    .get(`${BASE_URL}/restaurants/${id}`, headers)
    .then((response) => setRestaurant(response.data.restaurant))
    // .then((res) => {
    //   console.log(res.data.restaurant);
    //   setRestaurant(res.data.restaurant);
    // })
    .catch((err) => {
      console.log(err.response);
    })
}

// *************** AXIOS PARA PEGAR PEDIDOS ***************** //

export const getOrderHistory = (setOrders) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token")
    }
  }
  axios
    .get(`${BASE_URL}/orders/history`, headers)
    .then((response) => setOrders(response.data.orders))
    .catch((err) => {
      console.log(err.response);
    })
}


// *************** AXIOS ENVIAR PEDIDO ***************** //

export const sendOrder = (id, body, clear, navigate) => {
  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }

  axios
    .post(`${BASE_URL}/restaurants/${id}/order`, body, headers)
    .then((res) => {
      alert("Pedido enviado com sucesso!");
      console.log(res.data);
      clear();
    })
    .catch((error) => {
      alert("Pedido deu erro");
      console.log(error.response);
    })
}