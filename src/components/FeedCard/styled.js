import styled from "styled-components";

export const Conteiner = styled.div`
  max-width: 100vw;
  margin-bottom: 20px;
  border: 1px solid #E5E5EA;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
`;
export const ConteinerThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const IMG = styled.img`
  width: 100%;
  min-width: 180px;
  height: 150px;
  border-radius: 10px;
`;

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  width: 100%;
  strong{
    color: #E86E5A;
    margin-top: 8px;
  }
  small{
    color: #b8b8b8;
  }
  `;

  export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  `;
  export const Foot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 50px;
  margin-top: 0px;
  margin-bottom: 5px;
  `;
  
