import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/app/openai";

export async function GET() {
  const files = await openai.files.list();
  return NextResponse.json(files.data);
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const entryValue = data.get("file");

  if (!entryValue || !(entryValue instanceof File)) {
    return new NextResponse("No file uploaded or invalid file type", { status: 400 });
  }

  const file = new File([entryValue], entryValue.name, {
    type: entryValue.type,
    lastModified: entryValue.lastModified,
  });

  const response = await openai.files.create({
    purpose: "fine-tune",
    file: file,
  });

  return NextResponse.json(response);
}
