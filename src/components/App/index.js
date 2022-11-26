import React, { useState } from "react";
import { ContextProvider } from "../../context";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../Header/index";
import { NewTask } from "../NewTask/index";
import { TaskList } from "../TaskList/index";
import { Container } from "./styles";

export const App = () => {

 const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <ContextProvider>
      <GlobalStyle />
      <Container>
        <Header onOpen={handleOpenModal} />
        { isModalOpen && (
          <NewTask onCancel={handleCloseModal}/>
        )}
        <TaskList/>
      </Container>
    </ContextProvider>
  );

};
