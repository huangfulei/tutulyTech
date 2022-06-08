import type { AppProps } from "next/app";
import React from "react";
import "swiper/css";
import "../public/assets/css/animate.min.css";
import "../public/assets/css/tailwind-built.css";
import "../public/assets/css/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
