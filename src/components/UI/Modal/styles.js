import styled from "styled-components";

export const BackdropStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1px);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalStyle = styled.form`
  width: 100%;
  max-width: 24rem;
  height: 450px;
  background: var(--blue);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  position: fixed;
  padding: 5rem 1rem;
  border-radius: 0.8rem;
  border: 0;
  
`;
