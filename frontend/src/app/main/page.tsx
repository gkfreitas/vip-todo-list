'use client';

import { Button, Stack } from '@mui/material';
import { useContext } from 'react';
import { createTask, requestData } from '../../api/api';
import CreateNewTask from '../../components/CreateNewTask';
import TableTasks from '../../components/TableTasks';
import { TaskContext } from '../../context/tasks';

type TaskType = 'taskName' | 'description' | 'tag' | 'priority' | 'startDate' | 'dueDate';

export default function Main() {
  const { taskData, setTasks } = useContext(TaskContext);

  const reload = () => {
    const endpoint = '/task';
    requestData(endpoint)
      .then((response) => {
        setTasks(response);
      })
      .catch((error) => console.log(error));
  };

  const handleCreate = async () => {
    await createTask(taskData);
    reload();
  };

  const types: TaskType[] = ['taskName',
    'description', 'tag', 'priority', 'startDate', 'dueDate'];
  const tasksTitle = ['Tarefa', 'Descrição', 'Tag', 'Prioridade', 'Incio', 'Fim'];
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
    >

      <h1 className="text-[24px]">Crie uma nova tarefa</h1>
      <Stack
        className="my-[20px] py-[10px] px-[10px]
        border-[1px] rounded-[10px]"
      >
        <Stack
          direction="row"
          spacing={ 2 }
          alignItems="end"
          justifyContent="center"
        >
          {
        tasksTitle.map((name, i) => (
          <CreateNewTask key={ types[i] } type={ types[i] } name={ name } />
        ))
      }
        </Stack>
        <Button
          className="my-[10px] bg-orange-700 text-orange-950 font-bold text-[24px]"
          variant="contained"
          onClick={ () => handleCreate() }
        >
          Criar Tarefa
        </Button>
      </Stack>

      <TableTasks />

    </div>
  );
}
