import styled from "styled-components";

export const PageContainer = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;

export const ConteinerInput = styled.div`
  display: flex;
  justify-content: center;
    input{
        width: 75vw;
    }
`;

export const ConteinerNav = styled.div`
    display: flex;
    
`
export const SectionNavbar = styled.div`
    overflow: auto;
    white-space: nowrap;
    ::-webkit-scrollbar {
    width: 0px;
    }
    li {
        display: inline-block;
        text-align: center;
        padding: 14px;
    }

`

export const OrderActiveCtn = styled.div`
display: flex;
flex-direction:column;
padding: 1rem;
min-width: 100vw;
height: 20vh;
background-color: #E86E5A;
position:fixed;
bottom: 0;
`

export const OrderActive = styled.div`
display: flex;
align-items:center;

`

export const CtnTimer = styled.div`
color: #FEFEFE;
padding-right: 1rem;
`

export const ColorWhite = styled.span`
color: #FEFEFE;
`