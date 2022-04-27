import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import createEmotionCache from "../createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>openmedical</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <DefaultSeo {...SEO} />
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </RecoilRoot>
      </CacheProvider>
    </>
  );
};

export default MyApp;
