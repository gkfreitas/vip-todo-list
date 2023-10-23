import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../styles/globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'VIPTasks',
  description: 'Gerenciamento de tarefas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="br">
      <body className={ roboto.className }>{children}</body>
    </html>
  );
}
