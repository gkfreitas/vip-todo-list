import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Stack, SvgIcon } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { requestData } from '../api/api';

type DataTask = {
  taskName: string,
  tag: string
  startDate: string
  dueDate: string
  priority: string
  description: string
};

export default function BasicTable() {
  const [tasks, setTasks] = useState([]);

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

  console.log(tasks);

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
              tasks.map((dataTask: DataTask) => (
                <TableRow key={ dataTask.taskName }>
                  <TableCell component="th" scope="row" align="left">
                    { dataTask.taskName}
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    { dataTask.description}
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    { dataTask.tag}
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    { dataTask.priority}
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    { dataTask.startDate}
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    { dataTask.dueDate}
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    <Stack direction="row" spacing={ 2 }>
                      <SvgIcon component={ EditIcon } />
                      <SvgIcon component={ DeleteIcon } />
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
