import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ManagamentNamesProvider } from "../context/ManagamentNamesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManagamentNamesProvider>
      <Component {...pageProps} />
    </ManagamentNamesProvider>
  );
}

export default MyApp;
