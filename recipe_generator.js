import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";


const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  temperature: 1.0,
  maxOutputTokens: 2048,
});

const template = "You are a helpful assistant that helps to generate a simple recipe based on the {ingridients} provided. You dont have to use all {ingridients} ";

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    template,
  ],
  ["human", "{ingridients}"],
]);

const chain = prompt.pipe(model);
const result = await chain.invoke({ingridients: "chicken thighs, paprika, salt, pepper"});
console.log(result.content)

