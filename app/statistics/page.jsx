'use client'

import Image from "next/image"
import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";

const Statistics = () => {
  const [users, setUsers] = useState([]);
  const {data: session} = useSession()


        useEffect( () => {
          const fetchUsers = async () => {
              const response = await fetch('/api/users');
              const data = await response.json();
              console.log(data);

              setUsers(data);
              

          };

         if(session?.user){
          fetchUsers();}
        

      }, [session?.user]);
  return (
    <section className="mt-[70px] flex justify-center items-center mb-[25vw] lg:mb-0">
       <div className=" w-[80vw] gap-4 flex flex-col justify-center items-center sub_background  p-[40px] rounded-lg">
          <div>
            <h1 className="text-[#c29b0c] md:text-[40px] text-[30px] ">Leader Board</h1>
          </div>
          <div className="flex flex-col gap-1">
          {session?.user ? (
          users.map((user) => (
          <div className="flex justify-between gap-[90px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
            <div className="flex">
              <Image src={user.image} alt='image' width={37} 
                className= 'rounded-full' height={37} />
              <p className="mt-1.5 ml-1.5">{user.username}</p>
            </div>
            <div>
             <p className="mt-1.5">{user.point}</p>
            </div>      
          </div>
        ))
         
      ):(
        <div className="flex justify-between gap-[90px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
          <div className="flex">
            <Image src='/assets/logo.jpeg' alt='image' width={37} 
              className= 'rounded-full' height={37} />
            <p className="mt-1.5 ml-1.5">Username</p>
          </div>
          <div>
           <p className="mt-1.5">0</p>
          </div>
               
        </div>
      )}
      </div>
    </div>
  </section>
  )
}

export default Statistics
