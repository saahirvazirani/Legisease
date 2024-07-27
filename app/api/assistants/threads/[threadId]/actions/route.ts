import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/app/openai';

// Send a new message to a thread
export async function POST(request: NextRequest, { params: { threadId } }: { params: { threadId: string } }) {
  const { toolCallOutputs, runId } = await request.json();

  const stream = openai.beta.threads.runs.submitToolOutputsStream(
    threadId,
    runId,
    // { tool_outputs: [{ output: result, tool_call_id: toolCallId }] },
    { tool_outputs: toolCallOutputs }
  );

  // Convert AssistantStream to a ReadableStream
  const readableStream = stream.toReadableStream();

  return new NextResponse(readableStream);
}
