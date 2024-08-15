import Navbar from "@/components/nav";
import "./globals.css";
import Provider from "@/components/provider";
import Footers from "@/components/footers";
import Script from "next/script";


export const metadata= {
  title: "Wasquo Coin",
  description: 'Minning Wasquo Coin' 
}


const RootLayout = ({children}) => {
  return (
      <html lang="en">
          <head>
          <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
          </head>
        
          <body>
          <Provider>
                  <main className="relative">
                      <Navbar />
                      {children}
                      <Footers />
                  </main>
          
          </Provider>

          </body> 

      </html>
  )
};



export default RootLayout;
