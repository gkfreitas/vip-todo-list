'use client';

import { Button, FormControl } from '@mui/material';
import { useContext } from 'react';
import { requestLogin } from '../api/api';
import { UserContext } from '../context';
import { RobotoBold, RobotoLight, poppinsSemiBold } from '../utils/fonts';
import InputCheckboxForm from './InputCheckboxForm';
import InputTextForm from './InputTextForm';
import TitleLogo from './TitleLogo';

type AuthType = {
  email: string,
  password: string
};

export default function FormLogin() {
  const { authData } = useContext(UserContext);

  const handleLogin = (login: AuthType) => {
    console.log(authData);
    requestLogin('/login', login);
  };

  const rememberMeElement = (
    <p
      className={ `${RobotoLight.className} text-[10px] tracking-[0.3px] text-[#1E1E1E]` }
    >
      Lembre-se de mim
    </p>
  );

  return (
    <FormControl
      className="
        sm:px-[40px] sm:py-[50px]
        px-[30px] py-[15px]
        sm:max-w-[360px]
        sm:max-h-[600px]
        max-w-[360px]
        bg-[#fff]
        rounded-[50px]
        flex flex-col items-center
        shadow-2xl"
    >
      <TitleLogo />
      <h2
        className={ `${poppinsSemiBold.className} sm:text-[24px] text-[18px] 
        text-[#331500] 
        pt-[40px] sm:px-[20px] px-[0px] text-center w-full` }
      >
        Seja bem-vindo(a)
      </h2>
      <h3 className={ `${RobotoLight.className} pt-[20px] text-[12px] sm:text-[18px]` }>
        Digite seu email e senha
      </h3>
      <div className="pt-[60px] w-full">
        <InputTextForm
          name="Email"
          hidePasswordIcon={ false }
          type="email"
        />
        <InputTextForm
          name="Senha"
          hidePasswordIcon
          type="password"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <InputCheckboxForm textElement={ rememberMeElement } />
        <p className={ `${RobotoLight.className} text-[#4B4B4B] text-[10px]` }>
          Esqueceu a senha?
        </p>
      </div>
      <Button
        className={ `bg-[#FFC83C] hover:bg-[#FF8303] 
        text-[14px] text-[#030f00] ${RobotoBold.className} mt-[20px]
        sm:mt-[40px]
        px-[60px]` }
        variant="contained"
        size="large"
        onClick={ () => handleLogin(authData) }
      >
        Entrar
      </Button>
      <p
        className={ `${RobotoLight.className} 
      text-[#4B4B4B] text-[10px] tracking-[0.3px] mt-[30px] ` }
      >
        Não tem contra?
        {' '}
        <span className="font-bold text-[#000] underline cursor-pointer">
          Registre-se
        </span>
      </p>
    </FormControl>
  );
}
