//@ts-nocheck
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
      </NextUIProvider>
  );
}
