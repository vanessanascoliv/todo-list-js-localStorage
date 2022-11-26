import styled from "styled-components";

export const Container = styled.button`
  font-size: 0.9rem;
  color: var(--button);
  font-weight: 600;
  background: var(--blue);

  border: 0;
  border-radius: 0.25rem;
  padding: 0 1rem;
  height: 2rem;
  margin-top: 0.5rem;

  &.disabled {
    cursor: not-allowed;
  }
`;
