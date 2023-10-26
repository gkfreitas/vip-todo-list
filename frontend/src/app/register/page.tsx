import Image from 'next/image';
import undrawTasks from '../../../public/images/undraw-todo-list-1.svg';
import FormRegister from '../../components/FormRegister';

export default function Register() {
  return (
    <main
      className="min-h-screen sm:px-[100px] px-[20px] flex items-center xl:justify-between
    container mx-auto justify-center"
    >
      <Image
        className="hidden xl:block "
        src={ undrawTasks }
        alt="Desenho uma pessoa indo concluir uma tarefa"
      />
      <FormRegister />
    </main>
  );
}
