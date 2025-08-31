"use server"

import handleApiError from "@/app/api/components/ApiError";
import { dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export  const postSingleData = async () =>{
 try{
     const postedData = await req.json();
  const result = await dbConnect("my-comment").insertOne(postedData);
  revalidatePath("/products");
  return result
 }
 catch(error){
    return handleApiError("Fail to Post")
 }
}