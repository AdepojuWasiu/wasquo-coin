import User from "@/models/user";

import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();

        const users = await User.find({});

        if(!users) return new Response("User not found", {status:404})

        return new Response(JSON.stringify(users), {status:200})
    } catch (error) {
    
        return new Response("Failed to fetch users", {status:500})
    }
}