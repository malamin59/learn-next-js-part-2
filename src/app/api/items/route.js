import { dbConnect } from "@/lib/dbConnect";
import handleApiError from "../components/ApiError";
import { revalidatePath } from "next/cache";
export const dynamic = "force-static";

// create a dynamic error fot tall catch block

export async function GET(req) {
  try {
    const collection = await dbConnect("my-comment");
    const result = await collection.find().toArray();
    return Response.json({ result });
  } catch (error) {
    return handleApiError("failed to get route ");
  }
}


/* CREATE A POST REQUEST */
export async function POST(req) {
  try {
    // Call req.json() -- for converted the data in javaScript object
    const body = await req.json();
    // saved the post time use new Date();
    body.createAt = new Date();
    // post the data of a collection
    const collection = await dbConnect("my-comment");
    // insert the posted data of mongoDB ;
    const result = await collection.insertOne(body);
    revalidatePath('/products')
    // return a successful message
    return Response.json(
      {
        message: "Data sent successfully!",
        insertedId: result.insertedId,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError("Failed to post request");
  }
}
