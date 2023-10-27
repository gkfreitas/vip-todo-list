'use client';

import { Button, FormControl } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { requestLogin } from '../api/api';
import { UserContext } from '../context';
import { RobotoBold, RobotoLight, poppinsSemiBold } from '../utils/fonts';
import InputCheckboxForm from './InputCheckboxForm';
import InputTextForm from './InputTextForm';
import TitleLogo from './TitleLogo';

type RegisterType = {
  username: string,
  email: string
  password: string
};

export default function FormRegister() {
  const { userData, resetAllFields } = useContext(UserContext);
  const { email, password, username, confirmPassword } = userData;
  const minLengthUsername = 3;
  const minLengthPassword = 6;
  const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-_]+\.[A-Za-z]{2,}$/.test(email);
  const isPasswordValid = password.length >= minLengthPassword;
  const isUsernameValid = username.length >= minLengthUsername;
  const isConfirmPasswordValid = password === confirmPassword;
  const enableButton = isEmailValid && isPasswordValid
  && isEmailValid && isUsernameValid && isConfirmPasswordValid;

  const router = useRouter();

  const [errorRegister, handleErrorRegister] = useState(false);

  const handleRegister = async (login: RegisterType) => {
    const responseData = await requestLogin('/login/create', login);
    if (responseData === undefined) {
      handleErrorRegister(true);
      return true;
    }
    resetAllFields();
    router.push('/');
  };

  const rememberMeElement = (
    <p
      className={ `${RobotoLight.className} text-[10px] tracking-[0.3px] text-[#1E1E1E]` }
    >
      Eu concordo com
      {' '}
      <span className="text-[#000] font-bold">todos</span>
      {' '}
      os
      {' '}
      <span className="text-[#000] font-bold underline">termos de privacidade</span>
    </p>
  );

  return (
    <FormControl
      className="
        sm:px-[40px] sm:py-[50px]
        px-[30px] py-[15px]
        sm:w-[360px]
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
        Crie sua conta
      </h2>
      <div className="pt-[60px] w-full">
        <InputTextForm
          name="Nome do usuário*"
          hidePasswordIcon={ false }
          type="username"
        />
        <InputTextForm
          name="Email*"
          hidePasswordIcon={ false }
          type="email"
        />
        <InputTextForm
          name="Senha*"
          hidePasswordIcon
          type="password"
        />
        <InputTextForm
          name="Confirme sua senha*"
          hidePasswordIcon
          type="confirmPassword"
        />
      </div>

      <div className="flex flex-col justify-between items-center w-full">
        <InputCheckboxForm textElement={ rememberMeElement } />
        {errorRegister
          ? <p className="text-[12px] text-red-400">Email já cadastrado*</p> : ''}
      </div>

      <Button
        className={ `bg-[#FFC83C] hover:bg-[#FF8303] 
        text-[14px] text-[#030f00] ${RobotoBold.className} mt-[20px]
        sm:mt-[40px]
        px-[60px]` }
        variant="contained"
        size="large"
        disabled={ !enableButton }
        onClick={ () => handleRegister({ username, password, email }) }
      >
        Registrar-se
      </Button>
      <p
        className={ `${RobotoLight.className} 
      text-[#4B4B4B] text-[10px] tracking-[0.3px] mt-[30px] ` }
      >
        Ja tem conta?
        {' '}
        <Link href="/" onClick={ resetAllFields }>
          <span
            role="presentation"
            className="font-bold text-[#000] underline cursor-pointer"
          >
            Faça o login
          </span>
        </Link>
      </p>
    </FormControl>
  );
}
