import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 text-7xl">
      <Head>
        <title>모각공</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>모각공 메인화면입니다.</main>
    </div>
  );
};

export default Home;
