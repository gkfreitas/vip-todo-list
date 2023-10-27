import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, SvgIcon } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { UserContext } from '../context';

type InputTextType = {
  name: string;
  hidePasswordIcon: boolean;
  type: 'email' | 'password' | 'username' | 'confirmPassword'
};

export default function InputTextForm(props: InputTextType) {
  const { name, hidePasswordIcon, type } = props;
  const { userData, handleChange } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const lenghCase = userData[type].length === 0;
  const isPassword = type === 'password' || type === 'confirmPassword';
  const minLengthPassword = 6;
  const isEmailValid = lenghCase || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-_]+\.[A-Za-z]{2,}$/.test(userData.email);
  const isPasswordValid = lenghCase || userData.password.length >= minLengthPassword;
  const isConfirmPasswordValid = userData.password === userData.confirmPassword;
  const minLengthUsername = 3;
  const isUsernameValid = lenghCase || userData.username.length >= minLengthUsername;

  let errorField;
  switch (type) {
    case 'password':
      errorField = !isPasswordValid;
      break;
    case 'confirmPassword':
      errorField = !isConfirmPasswordValid;
      break;
    case 'email':
      errorField = !isEmailValid;
      break;
    case 'username':
      errorField = !isUsernameValid;
      break;
    default:
      errorField = false;
  }

  return (
    <Box className="flex relative mb-[10px]">
      <TextField
        variant="standard"
        error={ errorField }
        label={ name }
        name={ type }
        type={ passwordVisible && hidePasswordIcon && isPassword ? 'password' : 'text' }
        value={ userData[type] }
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
