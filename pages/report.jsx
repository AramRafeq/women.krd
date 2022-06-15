import Head from 'next/head';
import { Button } from 'antd';
import sheet from '../services/sheet';

export async function getServerSideProps() {
  const records = await sheet.loadRecords();
  const types = await sheet.loadTypes();
  return {
    props: {
      data: records,
      types,
      avilableTypeKeys: sheet.avilableTypeKeys,
    },
  };
}

export default function Home(props) {
  const { types, data } = props;
  return (
    <div>
      <Head>
        <title>Women.krd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button type="primary" size="large">This is a button</Button>
      <p>{JSON.stringify(data)}</p>
      <hr />
      <p>{JSON.stringify(types)}</p>
    </div>
  );
}
