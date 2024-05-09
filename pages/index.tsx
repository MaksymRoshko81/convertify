import Banner from "@/components/Banner";
import Head from 'next/head'

export default function Home() {
    return (
    <>
        <Head>
            <title>Convertify</title>
     <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-HVPKN2JQ92`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HVPKN2JQ92', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        </Head>
        <div >
            <Banner />
        </div>
</>       
    );
}
