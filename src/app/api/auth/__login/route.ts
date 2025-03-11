import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
