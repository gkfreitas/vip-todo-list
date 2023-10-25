import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, SvgIcon } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { UserContext } from '../context';

type InputTextType = {
  name: string;
  hidePasswordIcon: boolean;
  type: 'email' | 'password'
};

export default function InputTextForm(props: InputTextType) {
  const { name, hidePasswordIcon, type } = props;
  const { authData, handleChange } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const lenghCase = authData[type].length === 0;
  const isPassword = type === 'password';
  const minLengthPassword = 6;
  const isEmailValid = lenghCase || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-_]+\.[A-Za-z]{2,}$/.test(authData.email);
  const isPasswordValid = lenghCase || authData.password.length >= minLengthPassword;

  console.log(isEmailValid);

  return (
    <Box className="flex relative mb-[10px]">
      <TextField
        variant="standard"
        error={ isPassword ? !isPasswordValid : !isEmailValid }
        label={ name }
        name={ type }
        type={ passwordVisible && hidePasswordIcon && isPassword ? 'password' : 'text' }
        value={ authData[type] }
        onChange={ (e) => handleChange(type, e.target.value) }
        className="w-full"
      />
      {hidePasswordIcon && isPassword && (
        <SvgIcon
          onClick={ () => setPasswordVisible(!passwordVisible) }
          component={ passwordVisible ? VisibilityIcon : VisibilityOffIcon }
          viewBox="0 0 28 28"
          className="absolute right-0 bottom-2 cursor-pointer"
        />
      )}
    </Box>
  );
}
