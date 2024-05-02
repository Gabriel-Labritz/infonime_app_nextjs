import Head from 'next/head';
import { MyListPage } from '../templates/MyListPage/MyListPage';

export default function MyList() {
  return (
    <>
      <Head>
        <title>InfoNime - Minha Lista</title>
      </Head>
      <MyListPage />
    </>
  );
}
