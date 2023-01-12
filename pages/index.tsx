import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomePage = dynamic(() => import('./home'), {
  suspense: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='Website for living room seeker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={`Loading...`}>
        <HomePage />
      </Suspense>
    </>
  );
}
