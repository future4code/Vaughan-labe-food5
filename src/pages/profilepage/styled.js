import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 0.5em;
  text-align: center;
  color: black;
`;

export const PageContainer = styled.div`
  margin-bottom: 60px;
  `;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  `;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #E5E5EA;
  `;

export const RegisteredProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  `;

  export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5%;
  margin-right: 5%;
  `;

  export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  background-color: #E5E5EA;
  padding: 10px;
  `;

  export const SaveEditProfile = styled.button`
    width: 100%;
    padding: 15px;
    border-radius: 4px;
    border: solid 1px var(--greyish);
    background-color: #E86E5A;
  `;

  export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 90%;
  border: 1px solid #C7C7CC;
  border-radius: 10px;
  padding: 10px;
  
  p{
    color: #E86E5A;
  }
  `;

  export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  gap: 10px;
  margin: 10px;
  /* align-items: center; */
  `;

export const EditAddressContainer = styled.div`
display: flex;
flex-direction: column;
width: 95%;
gap: 10px;
margin: 10px;
/* align-items: center; */
`;
  