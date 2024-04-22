import User from "@/models/user";

import { connectToDB } from "@/utils/database";


export const GET = async (request, {params}) => {

    try {
        await connectToDB();

        const user = await User.findById(params.id)
        if(!user) {
            return new Response('user not found', {status: 404})
        } else {
            return new Response(JSON.stringify(user), {status: 200})
        }

    } catch (error) {
        return new Response('failed to fetch user', {status:500})
        
    }
};

export const PATCH = async (request,{params}) => {
    const {point} = await request.json();

    try {
        await connectToDB();
        const existingUser = await User.findById(params.id);
        if(!existingUser) {
            return new Response("User not found", {status:404});
        }else{

            existingUser.point = point

            await existingUser.save();

            return new Response(JSON.stringify(existingUser), {status:200})

        }

    } catch (error) {
        return new Response("Failed to update the user", {status:500});
           
    }
}