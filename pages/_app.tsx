import type { AppProps } from "next/app";
import React from "react";
import "swiper/css";
import "../styles/animate.min.css";
import "../styles/tailwind-built.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
