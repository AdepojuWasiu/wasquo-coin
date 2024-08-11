
'use client'
// const EcoSystem = () => {
//   return (
//     <div className="w-full flex justify-center items-center flex-col 
//            xl:mb-2 xl:mt-[10vw] mt-[20vw] gap-10 mb-[45vw]">
//       <h1 className="text-[40px] text-[#c29b0c]">Coming Soon</h1>
//       <p>The Ecosystem will be added at public launch</p>
      
//     </div>
//   )
// }

// export default EcoSystem

import { useRouter } from 'next/router'

export default function EcoSystem() {
    const router = useRouter();
    const { user_id, username } = router.query;

    // Now you can use `user_id` and `username` in your component logic
    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>Your User ID is {user_id}</p>
        </div>
    );
}

