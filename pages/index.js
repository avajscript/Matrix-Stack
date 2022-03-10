import Head from 'next/head';
import React from 'react';
import COLORS from '../Data/colors';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conspiracy Blog </title>
        <meta name="keywords" content="conspiracy, blog" />
      </Head>
      <h1> Welcome to Next1</h1>
    </div>
  );
}
