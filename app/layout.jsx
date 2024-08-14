import Navbar from "@/components/nav";
import "./globals.css";
import Provider from "@/components/provider";
import Footers from "@/components/footers";
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';


export const metadata= {
  title: "Wasquo Coin",
  description: 'Minning Wasquo Coin' 
}


const RootLayout = ({children}) => {
  return (
      <Html lang="en">
          <Head>
          <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
          </Head>
        
          <body>
          <Provider>
                  <Main className="relative">
                      <Navbar />
                      {children}
                      <Footers />
                  </Main>
                  
                  <NextScript />
          </Provider>
          

          </body> 

      </Html>
  )
};



export default RootLayout;
