import { tool } from "@langchain/core/tools";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

// Define your tool
const fakeBrowserTool = tool(
  (_) => {
    return "The search result is xyz...";
  },
  {
    name: "browser_tool",
    description:
      "Useful for when you need to find something on the web or summarize a webpage.",
    schema: z.object({
      url: z.string().describe("The URL of the webpage to search."),
      query: z.string().optional().describe("An optional search query to use."),
    }),
  }
);

const llmWithTool = new ChatGoogleGenerativeAI({
    model: "gemini-pro",
    temperature: 0,
}).bindTools([fakeBrowserTool]); // Bind your tools to the model

const toolRes = await llmWithTool.invoke([
  [
    "human",
    "Search the web and tell me a recipe to make a chicken curry. use any cooking website",
  ],
]);

console.log(toolRes.tool_calls);