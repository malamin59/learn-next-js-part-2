"use server";

import handleApiError from "@/app/api/components/ApiError";
import { dbConnect } from "@/lib/dbConnect";

export   const getProducts = async () => {
   try{
     const res = await dbConnect('my-comment').find({}).toArray()
    return res.data
   }
   catch (error) {
 return handleApiError("Failed to get route!!")
   }
};
