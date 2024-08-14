import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
  // other params...
});

const aiMsg = await llm.invoke([
    [
      "system",
      "You are a helpful assistant that translates English to French. Translate the user sentence.",
    ],
    ["human", "I love programming."],
]);
  
console.log(aiMsg.content)
  
  