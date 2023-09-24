import { NextResponse } from "next/server";
import Configuration from "openai";
import { auth } from "@clerk/nextjs";
import OpenAI from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: OpenAI.Chat.ChatCompletionMessage = {
    role: "system",
    content: "You are a code generator, You must answer only in markdown code snippets. Use code comments for explanations."
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // Use async/await to make the API call and wait for the response
    const response = await configuration.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages]
    });

    // Access the response data after awaiting the API call
    const responseData = response.choices[0].message.content;

    return  NextResponse.json(responseData);
  } catch (error) {
    console.error("[CODE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
