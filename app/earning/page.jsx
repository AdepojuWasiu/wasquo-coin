'use client'

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

const Earning = () => {
   const {data: session} = useSession();
   const [point, setPoint] = useState('');
   const [username, setUsername] = useState('');

   useEffect( () => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}`)
      const data = await response.json();
      
      setPoint(data.point)
      setUsername(data.username)
    }

      fetchUser()

  }, [session?.user?.id]);


  return (
    <section className="mt-[70px] flex justify-center items-center">
      {session?.user? (
          <div className=" w-[80vw] gap-4 flex flex-col justify-center items-center sub_background  p-[40px] rounded-lg">
          <div>
            <h1 className="text-[#c29b0c] text-[40px]">{username}</h1>
          </div>
          <div className="flex justify-between md:gap-[80px] gap-[50px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
                <p>My Wasquo Point</p>
                <p>{point}</p>
          </div>
          <div className="flex justify-between md:gap-[60px] gap-[40px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
                <p>People i have Reffered</p>
                <p>0</p>
          </div>
        
        </div>

      ):(
        <div className=" w-[80vw] gap-4 flex flex-col justify-center items-center sub_background  p-[40px] rounded-lg">
        <div>
          <h1 className="text-[#c29b0c] text-[40px]">Username</h1>
        </div>
        <div className="flex justify-between md:gap-[90px] gap-[50px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
              <p>My Wasquo Point</p>
              <p>0</p>
        </div>
        <div className="flex justify-between md:gap-[60px] gap-[40px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
              <p>People i have Reffered</p>
              <p>0</p>
        </div>
      
      </div>
      )}
    </section>
    
  )
}

export default Earning
