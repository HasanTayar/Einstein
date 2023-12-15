import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { incraseApiLimit, checkApiLimit } from "@/lib/api-limt";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are code genrator and your name is Einstein. You must answer only in markdown code snippets. Use code commets for explanations.",
};
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("OpenAI key not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages are required!", { status: 400 });
    }
    const freeTrial = checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free Trial has exprid", { status: 403 });
    }
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    await incraseApiLimit();
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Interal error", { status: 500 });
  }
}
