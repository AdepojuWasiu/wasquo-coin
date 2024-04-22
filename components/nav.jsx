'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';



const Navbar = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [providers, setproviders] = useState(null);
    const {data: session} = useSession()

    useEffect(() => {
      const setUpProviders = async () => {
          const response = await getProviders();

          setproviders(response);

      }
      setUpProviders();
  }, []);
  return (
    <nav className="w-full mt-5 pt-3 xl:px-[200px] px-[30px] flex flex-col  text-[20px] relative"  >
      <div className="w-full flex flex-row justify-between ">
        <div className="flex justify-start gap-2 justify-items-start">
            <div>
                <Link href= '/'> <Image src= '/assets/logo.jpeg' alt="logo" width={35} height={35} className="rounded-full" /></Link>
            </div>
            <div>
              <h3 className=" text-[#ffffff]">Wasquo</h3>
            </div>
        </div>
        <div className="flex justify-end gap-5">
        <div className="flex justify-end justify-items-end  gap-5 pr-0 ">
           <div className="lg:flex hidden justify-end justify-items-end gap-5 pr-0 " >
              <Link href='/earning'><p className="text-[#ffffff] hover:text-[#c29b0c]">Earning</p></Link>
              <Link href='/statistics'><p className=" text-[#ffffff] hover:text-[#c29b0c]">Statistics</p></Link>
              <Link href='/eco-system'><p className=" text-[#ffffff] hover:text-[#c29b0c]">EcoSystem</p></Link>
           </div>
           <div className="flex justify-end justify-items-end gap-5 pr-0">   

                {session?.user ? (
                  <>
                  <div className="md:flex hidden">
                  <button className = 'mb-2 ml-10 hover:text-[#c29b0c]' type="button" onClick={signOut} >
                  Log Out
                  </button>
                  </div>
                 
                <Image 
                  src={session?.user.image} 
                    alt = 'photo'
                    className="rounded-full"
                    width={37}
                    height={37} />
                  </>
                ): (
                  <>
                  {providers && 
                  Object.values(providers).map((provider) => (

                    <button type="button" className=" ml-10 mb-2 hover:text-[#c29b0c]" 
                      key={provider.name} 
                      onClick={ () => signIn(provider.id)} >
                    Log In
                    </button>

                  ) ) }

                  </>
                )}



               </div>
             
        </div> 
    
        <div className="flex flex-col lg:hidden " >
          <div className="z-20">
              {toggleDropdown 
              ? <RiCloseLine color='#808080' size={27} onClick = {() => setToggleDropdown(false)} />
              : <RiMenu3Line color='#808080' size={27} onClick = {() => setToggleDropdown(true) } /> 
            
            }
          </div>
          <div>
                {
                toggleDropdown && (
                  <div className="flex justify-center items-center justify-items-center gap-7  flex-col scale-up-center fixed z-10  right-0 bg-[#000000] left-[30vw] bottom-[75vw] top-[5px] ">
                <Link href='/earning'><p className="text-[#ffffff] hover:text-[#c29b0c]"
                         onClick={() => setToggleDropdown(false)}>Earning</p></Link>
                <Link href='/statistics'><p className=" text-[#ffffff] hover:text-[#c29b0c]"
                         onClick={() => setToggleDropdown(false)}>Statistics</p></Link>
                <Link href='/eco-system'><p className=" text-[#ffffff] hover:text-[#c29b0c]"
                         onClick={() => setToggleDropdown(false)}>Eco System</p></Link>
                <button type="button" className="md:hidden flex hover:text-[#c29b0c]" 
                         onClick={() => {() => setToggleDropdown(false); signOut;}}>Log Out</button>
              </div>

                )
              }
          </div>
        </div>
        </div>
        
      
 
      </div> 

    </nav>
  )
}

export default Navbar
