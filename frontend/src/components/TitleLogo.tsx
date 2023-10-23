import { poppinsBold } from '../utils/fonts';

export default function TitleLogo() {
  return (
    <h1
      className={ `text-[#F50] ${poppinsBold.className} text-[24px] underline` }
    >
      VIPTask
    </h1>
  );
}
