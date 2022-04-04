import styled from "styled-components";

export const BodyCtn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 2rem;

  img {
    max-width: 100%;
    height:200px;
    object-fit: contain;
  }
`;

export const ColorTxt = styled.span`
  color: #8E8E93;
`;

export const TxtCtn = styled.div`
display:flex;
margin-right: 2rem;
`

export const TxtBox = styled.div`
margin-right: 4rem;
`