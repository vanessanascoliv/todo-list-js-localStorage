import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { Tasks } from '../components/TaskList/TaskItem/tasks';
export const TaskContext = createContext({
  taskList: [],
  onAddTask: (task) => {},
  onRemove: (id) => {},
  
});


export const ContextProvider = (props) => {
  const [tasks, setTasks] = useState(()=> {
    const savedTasks = localStorage.getItem("ListTasks");
    const tasksArray = JSON.parse(savedTasks);
    return tasksArray || Tasks;
    
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleRefleshTasks = (name, description) => {
    setTimeout(() => {
      setTasks((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          taskName: name,
          taskDescription: description,
        },
      ]);
    }, 2000);
  };

  const handleRemoveTask = (taskId) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    localStorage.setItem("ListTasks", JSON.stringify(tasks));
  
  },[tasks])

  const valuesContext = {
      taskList: tasks,
      onAddTask: handleRefleshTasks,
      onRemove: handleRemoveTask,
  }

  return (
    <TaskContext.Provider value={valuesContext}>
      {props.children}
    </TaskContext.Provider>
  );
}


ContextProvider.propTypes ={
    children: PropTypes.node.isRequired,
    
}