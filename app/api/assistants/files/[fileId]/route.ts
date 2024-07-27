import { NextRequest, NextResponse } from 'next/server';
import { openai } from "@/app/openai";

// download file by file ID
export async function GET(_request: NextRequest, { params: { fileId } }: { params: { fileId: string } }) {
  const [file, fileContent] = await Promise.all([
    openai.files.retrieve(fileId),
    openai.files.content(fileId),
  ]);
  return new NextResponse(fileContent.body, {
    headers: {
      "Content-Disposition": `attachment; filename="${file.filename}"`,
    },
  });
}
