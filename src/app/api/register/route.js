import { collectionName, dbConnect } from "@/lib/dbConnect";
import handleApiError from "../components/ApiError";

export async function POST(req) {
  try {
    const body = await req.json();
    body.createAt = new Date();
    const collection = await dbConnect(collectionName.TEST_USER);
    const result = await collection.insertOne(body);
    return Response.json(
      {
        success: true,
        message: "Data sent successfully!",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError();
  }
}
