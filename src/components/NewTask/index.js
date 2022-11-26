import PropTypes from 'prop-types';
import React, { useContext } from "react";
import { TaskContext } from "../../context";
import { UseInput } from "../../hooks/use-input";
import { Modal } from "../UI/Modal/index";
import { Button, Container, ContainerButton } from "./styles";


export const NewTask = (props) => {
  const {onAddTask} = useContext(TaskContext);
  const {
    value: enteredTaskName,
    isValid: enteredTaskNameIsValid,
    hasError: taskNameHasError,
    valueChangeHandler: taskNameChangeHandler,
    inputBlurHandler: taskNameBlurHandler,
    reset: resetTaskName
  } = UseInput(value => value.trim() !== '' );

  const {
    value: enteredTaskDescription,
    isValid: enteredTaskDescriptionIsValid,
    hasError: taskDescriptionHasError,
    valueChangeHandler: taskDescriptionChangeHandler,
    inputBlurHandler: taskDescriptionBlurHandler,
    reset: resetTaskDescription
  } = UseInput(value => value.trim() !== '' );

  let formIsValid = false;

  if (enteredTaskNameIsValid && enteredTaskDescriptionIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredTaskNameIsValid && !enteredTaskDescriptionIsValid ) {
      return;
    }

  console.log(`${enteredTaskName} :
  ${enteredTaskDescription}`);
  onAddTask(enteredTaskName, enteredTaskDescription);

    resetTaskName();
    resetTaskDescription();
    
  };

  return (
    <Modal onSubmit={formSubmissionHandler}>
     <Container>
        <h1>Register Task</h1>
        <div>
          <label htmlFor="name">Task Name</label>
          <input
            type="text"
            id="name"
            onChange={taskNameChangeHandler}
            onBlur={taskNameBlurHandler}
            value={enteredTaskName}
          />
          
        </div>
        { taskNameHasError && <p>The task description must not be empty</p>}
        <div>
          <label htmlFor="description">Task description</label>
          <input 
            type="text" 
            id="description"
            onChange={taskDescriptionChangeHandler}
            onBlur={taskDescriptionBlurHandler}
            value={enteredTaskDescription}
          />
         
        </div>
        { taskDescriptionHasError && <p>The task description must not be empty</p>}
              
        </Container>
        <ContainerButton>
        <Button onClick={props.onCancel}><span>Cancel</span></Button>
        <Button
         onClick={formSubmissionHandler}
         className={ !formIsValid? "disabled": ''}>
          <span>Add Task</span>
        </Button>
        </ContainerButton>
    </Modal>
    
  );
};

NewTask.propTypes = {
  enteredTaskName: PropTypes.string,
  isValid: PropTypes.func,
  taskNameHasError: PropTypes.func,
  taskNameChangeHandler: PropTypes.func,
  taskNameBlurHandler: PropTypes.func,
  resetTaskName: PropTypes.func,
  
}
