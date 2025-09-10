import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { FilterProvider } from "@/context/FilterContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <FilterProvider>
        <Layout>
      <Component {...pageProps} />
         </Layout>
    </FilterProvider>

  )

  
}
