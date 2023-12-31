import { NextResponse } from "next/server";
import Configuration from "openai";
import { auth } from "@clerk/nextjs";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

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
      messages,
    });

    

    // Access the response data after awaiting the API call
    const responseData = response.choices[0].message.content;

    return  NextResponse.json(responseData);
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
function checkApiLimit() {
  throw new Error("Function not implemented.");
}

