'use client'


import Image from "next/image"
import { useEffect, useState ,Suspense} from "react"
import { useSession } from "next-auth/react";
import { useSearchParams } from 'next/navigation';
import Loader from "@/components/loader";

const Home = () => {
    const [copied, useCopied] = useState('');
    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(false);
   

    const {data: session} = useSession();
    const searchParams = useSearchParams();
    const userId = searchParams.get('user_id');
    const username = searchParams.get('username');



    useEffect( () => {
      const fetchUser = async () => {
        const response = await fetch(`/api/users/${session?.user?.id}`)
        const data = await response.json();
        console.log(data.point)

        setCount(data.point)
      }

      if(session?.user?.id) {
        fetchUser()}

    }, [session?.user?.id]);



    const updatePoint = async (e) => {
       e.preventDefault();
       setCount(count+5)

       try {
      
        const response = await fetch(`/api/users/${session?.user?.id}`, {
          method:'PATCH',
          body: JSON.stringify({
            point: count
          })
        })
        if(response.ok) {
          return true
    
        }
        
       } catch (error) {
        console.log(error)
        
       }
    }


  return (
    <Suspense fallback = {<Loader />}> 

    <div className="mt-5  relative  flex w-full justify-center text-[#ffffff] flex-col items-center">
        { session?.user ? (
              
          <div className='background__main flex justify-center w-full  flex-col pt-[100px] pb-[150px] items-center scale-up-center'   >
          {isLogin && (
            <div className="mb-5"><p>Please log In</p></div>
          )}
          
          <div className="flex justify-center justify-items-center" >
            <Image src = '/assets/coin.jpeg' alt='logo' width= {50} height ={50} />
            <p className="pt-[10px] text-[30px] ml-[20px]" >{count}</p>
          </div>
          <div className="flex justify-center justify-items-center w-full mt-[50px]">
          <Image src = '/assets/coin.jpeg' alt='logo' width= {300} height ={300} onClick={updatePoint} />
          </div>
        </div>
            
            ):(
              <div className='background__main flex justify-center w-full  flex-col pt-[100px] pb-[150px] items-center scale-up-center'   >
              <div>
              <h1>Welcome, {username}!</h1>
              <p>Your User ID is {userId}</p>
             </div>
          
          <div className="flex justify-center justify-items-center" >
            <Image src = '/assets/coin.jpeg' alt='logo' width= {50} height ={50} />
            <p className="pt-[10px] text-[30px] ml-[20px]" >{count}</p>
          </div>
          <div className="flex justify-center justify-items-center w-full mt-[50px]">
          <Image src = '/assets/coin.jpeg' alt='logo' width= {300} height ={300} onClick={() => setCount(count+5)} />
          </div>
          </div>
            )}
        
        <div className="mt-[50px] gap-4 flex flex-col justify-center items-center sub_background w-[90vw] p-[40px] rounded-lg">
          <div className=" flex justify-center items-center flex-col gap-4 ">
            <div className="bg-[#c29b0c] px-[30px] py-[15px] rounded-2xl md:text-[30px] text-[20px]">
              <h3>Referrals</h3>
            </div>
            <div className="bg-[#000000] px-[30px] py-[15px] rounded-2xl" >
               <p>Invite people you know personally to grow Wasquo community</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-4" >
            <div className="flex justify-between gap-[66px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
              <p>People i have Reffered</p>
              <p>0</p>
            </div>
            <div className="flex justify-between gap-[130px] bg-[#000000] px-[30px] py-[15px] rounded-2xl">
                <p>Refer a friend</p>
                <Image 
                src={ copied === 'come'
                ? '/assets/tick.svg'
                : '/assets/copy.svg'}
                alt = "copy_image"
                width={12}
                height={12}/>
            </div> 
          </div>
        </div>
    </div>
    
    </Suspense>
    
  )
}

export default Home
