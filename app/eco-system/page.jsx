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

// import { useRouter } from 'next/navigation'; // Ensure this is from next/navigation for App Router
// import { useEffect, useState } from 'react';

// export default function EcoSystem() {
//     const router = useRouter();
//     const [userId, setUserId] = useState(null);
//     const [username, setUsername] = useState(null);

//     useEffect(() => {
//         const url = new URL(window.location.href);
//         const searchParams = new URLSearchParams(url.search);
//         const userIdFromParams = searchParams.get('user_id');
//         const usernameFromParams = searchParams.get('username');

//         if (userIdFromParams && usernameFromParams) {
//             setUserId(userIdFromParams);
//             setUsername(usernameFromParams);
//         }
//     }, [router]);

//     if (!userId || !username) return <p>Loading...</p>;

//     return (
//         <div>
//             <h1>Welcome, {username}!</h1>
//             <p>Your User ID is {userId}</p>
//         </div>
//     );
// }

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EcoSystem() {
    const router = useRouter();
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // Wait for the router to be fully ready before accessing the query parameters
        if (router.isReady) {
            const { user_id, username } = router.query;
            setUserId(user_id);
            setUsername(username);
        }
    }, [router.isReady, router.query]);

    if (!userId || !username) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>Your User ID is {userId}</p>
        </div>
    );
}



