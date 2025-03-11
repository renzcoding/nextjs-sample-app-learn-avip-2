import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json(
      { status: 401, message: "invalid secret" },
      { status: 401 }
    );
  }

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "missing tag params" },
      { status: 400 }
    );
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidate: true, now: Date.now() });
}
