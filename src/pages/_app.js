import Hearder from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Hearder/>
    <Component {...pageProps} />
    </>
  )
}
