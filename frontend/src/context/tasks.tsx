import React, { createContext, useState } from 'react';

type TaskInfos = {
  taskName: string,
  description: string,
  tag: string,
  priority: string,
  startDate: string,
  dueDate: string,
};

type TaskContextProps = {
  taskData: TaskInfos,
  setTaskData(value: TaskInfos): void,
  handleChange(name: string, value: string): void,
};

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskData, setTaskData] = useState({
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
      } }
    >
      {children}
    </TaskContext.Provider>
  );
}
