import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  h1 {
    font-weight: 600;
    color: var(--title);
    margin-bottom: 2rem;
  }

  div{
    display: flex;
    flex-direction: column;

    label {
      color: var(--title);
    }

    input {
      border: 0;
      border-radius: 0.25rem;
      padding: 0.3rem 0.6rem;
    }
  }
  p {
    color: red;
  }

`;

export const ContainerButton = styled.div`
 width: 277px;
 margin: 0 auto;
 display: flex;
 align-items: center;
 justify-content:space-between;
 
 
 
`;

export const Button = styled.button`
  background: var(--button);
  margin-top: 4rem;
  border: 0;
  border-radius: 0.25rem;
  padding: 0 1rem;
  height: 2rem;
  width: 100px ;
  
 
  span {
    color: var(--blue);
    font-weight: 600;
  }

  &.disabled {
    cursor: not-allowed;
  }
`;


