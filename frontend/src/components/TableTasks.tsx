import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { Stack, SvgIcon } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext, useEffect, useState } from 'react';
import { deleteTask, requestData, updateTask } from '../api/api';
import { TaskContext } from '../context/tasks';
import EditTask from './EditTask';

type DataTask = {
  _id: string
  taskName: string,
  tag: string
  startDate: string
  dueDate: string
  priority: string
  description: string
};

export default function BasicTable() {
  const [tasks, setTasks] = useState([]);
  const [edit, toggleEdit] = useState(false);
  const [editedId, setEditedId] = useState('');
  const { setTaskData, taskData } = useContext(TaskContext);
  useEffect(() => {
    const endpoint = '/task';

    if (tasks.length === 0) {
      requestData(endpoint)
        .then((response) => {
          setTasks(response);
        })
        .catch((error) => console.log(error));
    }
  }, [tasks]);

  const tasksTitle = ['Tarefa', 'Descrição', 'Tag', 'Prioridade', 'Incio', 'Fim',
    'Editar/Deletar'];

  const reload = () => {
    const endpoint = '/task';
    requestData(endpoint)
      .then((response) => {
        setTasks(response);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = async (id: string) => {
    await deleteTask({ _id: id });
    reload();
  };

  const handleEdit = (dataTask: DataTask) => {
    const { _id: id } = dataTask;
    toggleEdit(!edit);
    setEditedId(id);
    setTaskData(dataTask);
  };

  const handleUpdate = async () => {
    await updateTask(taskData);
    toggleEdit(!edit);
    reload();
  };

  return (
    <TableContainer component={ Paper }>
      <Table sx={ { minWidth: 650 } } aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              tasksTitle.map((e: string) => (
                <TableCell key={ e }>{e}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
              tasks.map(({ _id: id,
                taskName,
                description,
                tag,
                priority,
                startDate,
                dueDate }, i) => (

                  <TableRow key={ i }>
                    <TableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="taskName"
                      /> : taskName}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="description"
                      /> : description}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="tag"
                      /> : tag}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="priority"
                      /> : priority}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="startDate"
                      /> : startDate}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="dueDate"
                      /> : dueDate}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      <Stack direction="row" spacing={ 2 }>
                        {edit && editedId === id ? <SvgIcon
                          component={ DoneIcon }
                          className="cursor-pointer"
                          onClick={ () => handleUpdate() }
                        />
                          : <SvgIcon
                              component={ EditIcon }
                              className="cursor-pointer"
                              onClick={ () => handleEdit({
                                _id: id,
                                taskName,
                                description,
                                tag,
                                priority,
                                startDate,
                                dueDate,
                              }) }
                          />}
                        <SvgIcon
                          component={ DeleteIcon }
                          className="cursor-pointer"
                          onClick={ () => handleDelete(id) }
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
              ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
