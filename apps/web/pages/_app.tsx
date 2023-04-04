import type { AppProps } from 'next/app';
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
});

export default function Web({ Component, pageProps }: AppProps) {
  return (
    <main className={archivo.className}>
      <Component {...pageProps} />
    </main>
  );
}
