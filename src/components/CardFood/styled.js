import styled from "styled-components";




export const CardContainer = styled.div`
 

 margin-bottom: 1rem;
 width:100%;
 height:250px;
 display: grid;
 grid-template-columns: 1fr 1fr;
 border-radius: 5px;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 img {
  width: 230px;
  height:250px;
  border-radius: 5px 0 0 5px;
 }

`;

export const CardText = styled.div`
  flex-direction: column;
  padding: 1rem;
  display:flex;
`;

export const ColorTitle = styled.span`
  color: #ff9500;
`;

export const ButtonCnt = styled.div`
  
  `
