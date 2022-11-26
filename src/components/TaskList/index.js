import React, { useContext } from "react";
import { TaskContext } from "../../context";
import { Ul } from "../TaskList/styles";
import { CardTaskList } from "../UI/card";
import { TaskItem } from "./TaskItem/index";

export const TaskList = () => {
  const {taskList, onRemove} = useContext(TaskContext);
  return (
    <CardTaskList>
      <Ul>
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            onRemove={onRemove}
          />
        ))}
      </Ul>
    </CardTaskList>
  );
};
