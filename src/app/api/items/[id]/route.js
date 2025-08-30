import { dbConnect } from "@/lib/dbConnect";
import handleApiError from "../../components/ApiError";
import { ObjectId } from "mongodb";

/* GET A SINGLE DATA */
export async function GET(req, { params }) {
  try {
    const { id } = params;
    const collection = await dbConnect("portfolio_comments");
    const filter = { _id: new ObjectId(id) };
    const result = await collection.findOne(filter);
    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    return handleApiError(error, "Failed to get comment");
  }
}

/* delete  */
export async function DELETE(req, params) {
  const p = await params;
  console.log(p);

  return Response.json({ params: p });
}
/* PATCH  */
export async function PATCH(req, params) {
  const p = await params;
  console.log(p);

  return Response.json({ params: p });
}
