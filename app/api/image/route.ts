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
  content: "You are chat  and your name is Einstein.",
};
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("OpenAI key not configured", { status: 500 });
    }
    if (!prompt) {
      return new NextResponse("prompt is required!", { status: 400 });
    }
    if (!amount) {
      return new NextResponse("amount is required!", { status: 400 });
    }
    if (!resolution) {
      return new NextResponse("resolution is required!", { status: 400 });
    }
    const freeTrial = checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free Trial has exprid", { status: 403 });
    }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });
    await incraseApiLimit();
    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Interal error", { status: 500 });
  }
}
