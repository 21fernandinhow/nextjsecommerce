// pages/products.tsx

import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Nossos Produtos
      </h1>
    </>
  )
}

export default Products