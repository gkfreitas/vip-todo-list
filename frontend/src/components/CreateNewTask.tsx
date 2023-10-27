import { MenuItem, TextField } from '@mui/material';
import { useContext } from 'react';
import { TaskContext } from '../context/tasks';

type PropsTask = {
  type: 'taskName' | 'description' | 'tag' | 'priority' | 'startDate' | 'dueDate'
  name: string
};

export default function EditTask(props: PropsTask) {
  const { taskData, handleChange } = useContext(TaskContext);

  const changeData = (data: string) => {
    const partes = data.split('-');
    return `${partes[2]}-${partes[1]}-${partes[0]}`;
  };

  const { type, name } = props;

  const options = [
    {
      value: 'Alta',
      label: 'Alta',
    },
    {
      value: 'Média',
      label: 'Média',
    },
    {
      value: 'Baixa',
      label: 'Baixa',
    },

  ];

  return (
    <div>

      { type !== 'startDate' && type !== 'dueDate'
        ? (
          <TextField
            variant="standard"
            select={ type === 'priority' }
            value={ taskData[type] }
            label={ name }
            onChange={ (e) => handleChange(type, e.target.value) }
          >
            {
        options.map((option) => (
          <MenuItem key={ option.value } value={ option.value }>
            {option.label}
          </MenuItem>
        ))
      }
          </TextField>)
        : (
          <label className="flex flex-col justify-center items-center">
            {name}
            <input
              className=""
              type="date"
              value={ changeData(taskData[type]) }
              onChange={ (e) => handleChange(type, changeData(e.target.value)) }
            />
          </label>
        )}
    </div>
  );
}
