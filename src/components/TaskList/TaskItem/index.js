import PropTypes from "prop-types";
import React, { useContext } from "react";
import { TaskContext } from "../../../context";
import { Button } from "../../UI/Button/index";
import { Card } from "../../UI/card";
//import { Card } from "../../UI/styles";
import { Content, Description, Div, Title } from "./styles";

export const TaskItem = ({id,taskName,taskDescription}) => {
  const  {onRemove} = useContext(TaskContext);
  return (
    <Card>
      <Content>
      <Title>
       {taskName}
      </Title>
      <Description>{taskDescription}</Description>
      </Content> 
      <Div>
        <Button onClick={() => onRemove(id)}>Remove</Button>
      </Div>
    </Card>
  );
};

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  taskDescription: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  
};
