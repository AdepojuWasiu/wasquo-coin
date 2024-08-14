import Navbar from "@/components/nav";
import "./globals.css";
import Provider from "@/components/provider";
import Footers from "@/components/footers"
import { NextScript } from "next/document";

export const metadata= {
  title: "Wasquo Coin",
  description: 'Minning Wasquo Coin' 
}


const RootLayout = ({children}) => {
  return (
      <html lang="en">
        <script src="https://telegram.org/js/telegram-web-app.js" />
        
          <body>
          <Provider>
                  <main className="relative">
                      <Navbar />
                      {children}
                      <Footers />
                  </main>
                  <NextScript />
          
          </Provider>

          </body> 

      </html>
  )
};



export default RootLayout;
