import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div>Hello</div>
      {console.log("hoge")}
    </>
  );
}

export default MyApp;
