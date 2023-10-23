import Image from 'next/image';
import undrawTasks from '../../public/images/undraw-todo-list-1.svg';
import FormLogin from '../components/FormLogin';

export default function Home() {
  return (
    <main className="min-h-screen px-[100px] flex items-center">
      <Image
        src={ undrawTasks }
        alt="Desenho uma pessoa indo concluir uma tarefa"
      />
      <FormLogin />
    </main>
  );
}
