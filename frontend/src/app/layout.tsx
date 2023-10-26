import RedirectLogin from '../Redirect';
import { Providers } from '../providers/providers';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="br">

      <Providers>
        <body>
          <RedirectLogin />
          {children}
        </body>
      </Providers>
    </html>
  );
}
