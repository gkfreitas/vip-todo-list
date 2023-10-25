import { Providers } from '../providers/providers';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="br">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
