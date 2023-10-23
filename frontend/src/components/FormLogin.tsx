import { RobotoLight, poppinsSemiBold } from '../utils/fonts';
import InputTextForm from './InputTextForm';
import TitleLogo from './TitleLogo';

export default function FormLogin() {
  return (
    <form
      className="
    px-[40px] py-[50px]
    max-w-[360px]
    min-h-[600px]
    bg-[#fff]
    rounded-[50px]
    flex flex-col items-center"
    >
      <TitleLogo />
      <h2
        className={ `${poppinsSemiBold.className} text-[24px] text-[#331500] pt-[60px]` }
      >
        Seja bem-vindo(a)
      </h2>
      <h3 className={ `${RobotoLight.className} pt-[20px]` }>Digite seu email e senha</h3>
      <div className="pt-[60px]">
        <InputTextForm name="Email" hidePasswordIcon={ false } />
        <InputTextForm name="Senha" hidePasswordIcon />
      </div>
    </form>
  );
}
