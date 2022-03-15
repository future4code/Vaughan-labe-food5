import React, { useState } from "react";
import { Conteiner } from "./styled";


const FeedCard = (props) => {
  
  
  console.log(props);
  return (
    <Conteiner>
      <p>{props.name}</p>
    </Conteiner>
  );
};

export default FeedCard;
