import styled from "styled-components";

export const Card = styled.div `
  display: grid;
  background-color: var(--background);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem 1rem;
  
 
  
`;

export const CardTaskList =  styled(Card)`
  width: 90%;
  background: var(--blue)
  `;