import styled from "styled-components";

export const CardContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  max-height: 350px;

  display: grid;
  grid-template-columns: 0.5fr 1fr;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  img {
    width: 180px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
`;

export const CardText = styled.div`
  flex-direction: column;
  padding: 1.3rem;
  display: flex;
`;

export const ColorTxt = styled.span`
  color: #8e8e93;
`;

export const IconBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ButtonCnt = styled.div`
  display: flex;
  align-self: flex-end;
`;
