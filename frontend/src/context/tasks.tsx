import React, { createContext, useState } from 'react';

type TaskInfos = {
  _id: string
  taskName: string,
  description: string,
  tag: string,
  priority: string,
  startDate: string,
  dueDate: string,
};

type TaskContextProps = {
  taskData: TaskInfos,
  tasks: TaskInfos[]
  setTasks(tasks: TaskInfos[]): void
  setTaskData(value: TaskInfos): void,
  handleChange(name: string, value: string): void,
};

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState([{
    _id: '',
    taskName: '',
    description: '',
    tag: '',
    priority: '',
    startDate: '',
    dueDate: '',
  }]);
  const [taskData, setTaskData] = useState({
    _id: '',
    taskName: '',
    description: '',
    tag: '',
    priority: '',
    startDate: '',
    dueDate: '',
  });

  const handleChange = (name: string, value: string) => {
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };

  return (
    <TaskContext.Provider
      value={ {
        taskData,
        handleChange,
        setTaskData,
        tasks,
        setTasks,
      } }
    >
      {children}
    </TaskContext.Provider>
  );
}
