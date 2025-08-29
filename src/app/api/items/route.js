import { dbConnect } from "@/lib/dbConnect";
export const dynamic = "force-static";

// GET request handler
export async function GET() {
  const collection = await dbConnect("portfolio_comments");
  const data = await collection.find().toArray();
  return Response.json({ data });
}

// POST request handler
// export async function POST(req) {
//   const postedDat = await req.json();
//   return Response.json({ postedDat });
// }

export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await dbConnect("portfolio_comments");
    const result = await collection.insertOne(body);
    return Response.json({
      message: "Data inserted successfully EPB",
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}


