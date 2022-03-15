import styled from "styled-components";

export const ImgContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;
export const ImgCard = styled.img`
  border-radius: 1rem 0 0 1rem;
  margin-right: 1rem;
  width: 35%;
  object-fit: cover;
  padding: 1rem;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content:center;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 1rem;
`;

export const CardText = styled.div`
  flex-direction: column;
  padding: 1rem;
`;

export const ColorTitle = styled.span`
  color: #ff9500;
`;

export const ButtonCnt = styled.div`
  display: flex;
  justify-content: flex-end;
`;
