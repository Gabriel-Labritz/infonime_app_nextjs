import Head from 'next/head';
import { Header } from '../components/Header/Header';
import { Login } from '../templates/Login/Login';

export default function Index() {
  return (
    <>
      <Head>
        <title>InfoNime - Login</title>
      </Head>
      <Header />
      <Login />
    </>
  );
}
