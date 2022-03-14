import React from 'react';
import CardFood from '../../components/CardFood/CardFood';


const RestaurantPage = () => {
    return (
        <div>
            <h1>Restaurantes</h1>

            <CardFood 
            image={"https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201908081118_5Eiz_c.png"}
            title={"hamburguer"}
            description={"um hamburguer de carne bovina com cheddar, alface e tomate"}
            price={"R$:27,99"}
            />
              <CardFood 
            image={"https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201908081118_5Eiz_c.png"}
            title={"hamburguer"}
            description={"um hamburguer de carne bovina com cheddar, alface e tomate"}
            price={"R$:27,99"}
            />
              <CardFood 
            image={"https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201908081118_5Eiz_c.png"}
            title={"hamburguer"}
            description={"um hamburguer de carne bovina com cheddar, alface e tomate"}
            price={"R$:27,99"}
            />
        </div>
      );
}

export default RestaurantPage;