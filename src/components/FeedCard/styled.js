import styled from "styled-components";

export const Conteiner = styled.div`
  /* min-width: 100vw; */
  max-width: 100vw;
  margin-bottom: 20px;
  border: 1px solid #E5E5EA;
  border-radius: 10px;
  margin-top: 20px;
`;
export const ConteinerThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* padding: 1.5rem 0; */
  /* margin: 0.3rem; */
  /* margin-bottom: 60px; */
  /* border: 1px solid #efefef; */
  /* border-radius: 0.2rem; */
  /* min-width: 160px; */
  /* text-align: center; */
  /* box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089); */
`;
export const IMG = styled.img`
  width: 100%;
  min-width: 180px;
  /* max-width: 180px; */
  height: 150px;
  border-radius: 10px;
`;

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  /* border: 1px solid red; */
  width: 100%;
  p{
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
  margin-top: -12px;
  margin-bottom: 5px;
  `;
  
