import Image from 'next/image';
import undrawTasks from '../../public/images/undraw-todo-list-1.svg';
import FormLogin from '../components/FormLogin';
import RedirectLogin from '../components/RedirectLogin';

export default function Home() {
  return (
    <main
      className="min-h-screen sm:px-[100px] px-[20px] flex items-center xl:justify-between
    container mx-auto justify-center"
    >
      <RedirectLogin />
      <Image
        className="hidden xl:block "
        src={ undrawTasks }
        alt="Desenho uma pessoa indo concluir uma tarefa"
      />
      <FormLogin />
    </main>
  );
}
