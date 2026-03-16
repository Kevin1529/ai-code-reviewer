const axios = require("axios");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function run() {
  const code = "sample code for review";

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a senior software engineer reviewing code",
      },
      { role: "user", content: `Review this code:\n${code}` },
    ],
  });

  const review = response.choices[0].message.content;

  console.log("AI Review:", review);
}

run();
