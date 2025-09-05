"use server";

import handleApiError from "@/app/api/components/ApiError";

export async function POST(req) {
  try {
    const data = await req.json();
    const { userName, password } = data;
    return Response.json(
      { success: false, message: "All fields required" },
      { status: 400 }
    );
  } catch (error) {
    return handleApiError(error, "Fail to post user data");
  }
}
