import { poppinsBold } from '../utils/fonts';

export default function TitleLogo() {
  return (
    <h1
      className={ `text-[#F50] ${poppinsBold.className} text-[24px] underline 
      sm:pt-0 pt-[30px]` }
    >
      VIPTask
    </h1>
  );
}
