import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 0.5em;
  text-align: center;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  `;

export const RegisteredProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  border-bottom: 1px solid green;
  `;

  export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 1px solid red;
  margin-top: 5%;
  `;