import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

const Header = dynamic(() => import('../components/Header'), {
  suspense: true,
});
const Footer = dynamic(() => import('../components/Footer'), {
  suspense: true,
});

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='app'>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
