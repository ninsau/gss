import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports.js";


Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
