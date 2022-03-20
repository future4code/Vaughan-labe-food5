import styled from "styled-components";




export const CartContainer = styled.div`
  margin-bottom: 60px;
  /* min-width: 100vw; */
  width: 100%;
  overflow: hidden;
  ;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  background-color: #e5e5ea;
  padding: 10px;

  p {
    color: #8e8e93;
  }
`;

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  p {
    color: #e86e5a;
  }

  span {
    color: #8e8e93;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* height: 150px; */

  border: solid 1px #b8b8b8;
  border-radius: 5px;
  margin: 10px;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: solid 1px #b8b8b8;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #e86e5a;
  /* width: 100px; */
  color: #e86e5a;
  border-radius: 0px 0px 0px 5px;
  padding: 5px;
  border: solid 2px #e86e5a;
  margin: 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;

  p {
    color: #e86e5a;
  }

  span {
    color: #8e8e93;
  }
`;

export const RemoveButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #e86e5a;
  /* width: 100px; */
  color: #e86e5a;
  border-radius: 5px 0px 0px 0px;
  padding: 5px;
  border: solid 2px #e86e5a;
  margin: 0;
`;

export const AdressContainer = styled.div`
  width: 414px;
  max-width: 414px;
  height: 76px;
  padding: 16px;
  background-color: #eeeeee;
`;

export const AdressDelivery = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 18px;
  margin: 0 0 8px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

export const Title = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 42px;
  margin: 18px 0 33px;
  padding: 12px 32px;
  font-size: 16px;
  text-align: center;
`;

export const ShippingText = styled.p`
  font-size: 16px;
  text-align: right;
  margin: 16px 16px 13px 60px;
`;

export const SubtotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 16px 0 16px;
`;

export const TotalPrice = styled.p`
  color: #5cb646;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.43px;
`;

export const PaymentMethodText = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 18px;
  margin: 24px 16px 8px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`;

export const CheckBox = styled.div`
  margin: 10px 16px 0 16px;
  border-top: 0.5px solid black;
`;

export const FoodContainer = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px lightgray;
`;

export const Rectangle2 = styled.div`
  width: 50px;
  height: 20px;
  /* margin: 7px 0 0 8px; */
  padding: 8px 23px 9px 24px;
  border-radius: 8px;
  border: solid 1px #e02020;
  float: right;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const PlaceholderCtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

export const CardMargin = styled.div`
margin: 1rem;
`