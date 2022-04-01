import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>openmedical</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
