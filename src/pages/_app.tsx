import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider>
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-light w-full min-h-screen">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
    // </ThemeProvider>
  );
}
