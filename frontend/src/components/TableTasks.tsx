import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { Stack, SvgIcon, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { orange } from '@mui/material/colors';
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
  const [edit, toggleEdit] = useState(false);
  const [editedId, setEditedId] = useState('');
  const { setTaskData, taskData, tasks, setTasks } = useContext(TaskContext);
  useEffect(() => {
    const endpoint = '/task';

    if (tasks.length === 0) {
      requestData(endpoint)
        .then((response) => {
          setTasks(response);
        })
        .catch((error) => console.log(error));
    }
  });

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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: orange[900],
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer
      component={ Paper }
      className="max-w-[1000px]"
    >
      <Table sx={ { minWidth: 650 } } aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            {
              tasksTitle.map((e: string) => (
                <StyledTableCell key={ e }>{e}</StyledTableCell>
              ))
            }
          </StyledTableRow>
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

                  <StyledTableRow key={ i }>
                    <StyledTableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="taskName"
                      /> : taskName}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="description"
                      /> : description}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="tag"
                      /> : tag}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="priority"
                      /> : priority}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="startDate"
                      /> : startDate}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
                      {edit && editedId === id ? <EditTask
                        type="dueDate"
                      /> : dueDate}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
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
                    </StyledTableCell>
                  </StyledTableRow>
              ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
