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