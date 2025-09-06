"use server"

import handleApiError from "@/app/api/components/ApiError";
import { collectionName, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export  const postSingleData = async () =>{
 try{
     const postedData = await req.json();
  const result = await dbConnect(collectionName.MY_COMMENT).insertOne(postedData);
  revalidatePath("/products");
  return result
 }
 catch(error){
    return handleApiError("Fail to Post")
 }
}