import { SectionNavbar } from "./styled";
import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";


 const Navbar = () => {
  const { states, sets } = useContext(GlobalStateContext);

  const filterByCategory = (category) => {
    sets.setFilteredRestaurants(states.restaurants);
  if (category === "Todas") {
    sets.setFilteredRestaurants(states.restaurants);
  }
  else {
    
    sets.setFilteredRestaurants(states.restaurants.filter(item => item.category === category));
  }
};

    return (
      <nav>
        <SectionNavbar >
          <ul >
          <li><strong onClick={() => filterByCategory("Todas")}>Todas</strong></li>
          <li><strong onClick={() => filterByCategory("Árabe")}>Árabe</strong></li>
          <li><strong onClick={() => filterByCategory("Asiática")}>Asiática</strong></li>
          <li><strong onClick={() => filterByCategory("Hamburguer")}>Hambúrguer</strong></li>
          <li><strong onClick={() => filterByCategory("Italiana")}>Italiana</strong></li>
          <li><strong onClick={() => filterByCategory("Sorvetes")}>Carnes</strong></li>
          <li><strong onClick={() => filterByCategory("Baiana")}>Baiana</strong></li>
          <li><strong onClick={() => filterByCategory("Petiscos")}>Petiscos</strong></li>
          <li><strong onClick={() => filterByCategory("Mexicana")}>Mexicana</strong></li>
          
          </ul>
        </SectionNavbar>
      </nav>
    );
  }
export default Navbar
