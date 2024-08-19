'use client'


import Image from "next/image"
import { useEffect, useState ,Suspense} from "react"
import { useSession } from "next-auth/react";
import useTelegramInitData from "@/components/telegram";

const Home = () => {
    const [copied, useCopied] = useState('');
    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(false);
    const [clicks, setClicks] = useState([]);

    const initData = useTelegramInitData();

    const user = initData.user;
    const start_param = initData.start_param;

   

    const {data: session} = useSession();

  

   
    

   


        // const handleCardClick = (e) => {
        //   const card = e.currentTarget;
        //   const rect = card.getBoundingClientRect();
        //   const x = e.clientX - rect.left - rect.width / 2;
        //   const y = e.clientY - rect.top - rect.height / 2;
        //   card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;

        //   setTimeout(() => {
        //     card.style.transform = '';
        //   }, 100);
        
        //   setCount(count + 11);
        //   setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
        // }

        // const handleAnimationEnd = (id) => {
        //   setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
        // };

        const handleCardClick = (e) => {
          e.preventDefault();
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
        
          const newClicks = Array.from(e.touches).map(touch => {
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;

            
            // Return an object for each touch point
            return {
              id: Date.now() + Math.random(), // Unique ID for each touch
              x: x,
              y: y,
              transform: `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`
            };
          });
        
          // Apply the first touch's transform effect to the card
          card.style.transform = newClicks[0]?.transform || '';
        
          // Reset the transform after 100ms
          setTimeout(() => {
            card.style.transform = '';
          }, 100);
        
          // Update the clicks state with all the new touch points
          setClicks([...clicks, ...newClicks]);
          setCount(count + 11 * newClicks.length); // Adjust the count based on the number of touches
        };
        
        const handleAnimationEnd = (id) => {
          setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
        };

        

        
        


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
              <p>Username: {user?.username}</p>
              <p>ID: {user?.id}</p>
              <p>ref code: {start_param}</p>
             </div>
          
          <div className="flex justify-center justify-items-center" >
            <Image src = '/assets/coin.jpeg' alt='logo' width= {50} height ={50} />
            <p className="pt-[10px] text-[30px] ml-[20px]" >{count}</p>
          </div>
        
             {/* <div className="flex justify-center justify-items-center  mt-[50px] relative" onTouchStart={handleCardClick}>
                    <Image src = '/assets/logo.jpeg' alt='logo' width= {300} height ={300}  />
                    { 
                    clicks.map((click) => (
                      <div
                        key={click.id}
                        className="absolute text-[50px] font-bold"
                        style={{
                          top: `${click.y - 42}px`,
                          left: `${click.x - 28}px`,
                          animation: `slide-out-top`
                        }}
                        onAnimationEnd={() => handleAnimationEnd(click.id)}
                      >
                        +11
                      </div>
                  ))}
            </div> */}

            <div className="flex justify-center justify-items-center mt-[50px] relative" onTouchStart={handleCardClick}>
              <Image src='/assets/logo.jpeg' alt='logo' width={300} height={300} />
              {
                clicks.map((click) => (
                  <div
                    key={click.id}
                    className="absolute text-[30px] font-bold text-blue-700"
                    style={{
                      top: `${click.y - 25}px`,
                      left: `${click.x - 15}px`,
                      animation: `float 1s ease forwards`,
                    }}
                    onAnimationEnd={() => handleAnimationEnd(click.id)}
                  >
                    +11
                  </div>
                ))
              }
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
    
  
    
  )
}

export default Home
