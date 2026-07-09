import Groq from "groq-sdk";


const groq = new Groq({
  apiKey: process.env.LLM_API_KEY,
});


const SYSTEM_PROMPT =
  process.env.SYSTEM_PROMPT ||
  "You are a helpful assistant.";


export const runtime = "nodejs";


export async function POST(request: Request) {

  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return new Response("Message is required", { status: 400 });
  }


  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],
    model: "openai/gpt-oss-20b",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: true,
    reasoning_effort: "medium",
    stop: null,
  });


  const encoder = new TextEncoder();


  const stream = new ReadableStream({

    async start(controller) {

      try {

        for await (const chunk of chatCompletion) {
          const content = chunk.choices[0]?.delta?.content || "";

          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }

      } catch (error) {

        controller.error(error);

      } finally {

        controller.close();

      }

    },

  });


  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });

}