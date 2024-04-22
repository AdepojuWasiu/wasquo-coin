import Navbar from "@/components/nav";
import "./globals.css";
import Provider from "@/components/provider";
import Footers from "@/components/footers"


export const metadata= {
  title: "Wasquo Coin",
  description: 'Minning Wasquo Coin' 
}

const RootLayout = ({children}) => {
  return (
      <html lang="en">
        
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
