import styled from "styled-components";

export const Container = styled.header`
 width: 100%;
 background: var(--blue);
 
`;

export const Content = styled.div`
  max-width: 1120%;
  margin: 0 auto;
  
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    color: var(--title);
    display: flex;
    align-items: center;
    gap: 1rem;
    
  }
  
  button {
    font-size: 1rem;
    color: var(--blue);
    font-weight: 600;
    background: var(--button);
   
    border:0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
  }
 
`;