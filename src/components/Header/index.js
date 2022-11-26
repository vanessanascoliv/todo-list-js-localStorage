import PropTypes from 'prop-types';
import React from "react";
import { FcTodoList } from "react-icons/fc";
import { Button } from "../UI/Button";
import { Container, Content } from "./styles";

export const Header = ({onOpen}) => {
  
  return (
    <Container>
      <Content>
        <h1>
          <FcTodoList />
          To-do List
        </h1>
        <Button onClick={onOpen}>Add Task</Button>
      </Content>
    </Container>
  );
};

Header.prototype = {
  onOpen: PropTypes.func.isRequired
}