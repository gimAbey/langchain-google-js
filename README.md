# Langchain Tutorial with Nodejs

## Overview of Langchain

Langchain is a framework that gives you easy access to work with some powerful LLMs.

For this project I have used google gen ai as the LLM model.

## Setup

1. Create a repo in github or a folder locally for the project.
2. Go to the folder location and install node

   ```console
   foo@bar:~$ npm init -y
   ```

3. Install langchain with google gen ai model

```console
  foo@bar:~$ npm install @langchain/google-genai
```

4. Create a [Google API key](https://ai.google.dev/tutorials/setup) and copy it.

### How to use the API key

There are 3 ways on how you can use the API key.

1. Set it as an environment variable
   `export GOOGLE_API_KEY="your-api-key"`

2. create an .env file using doteenv package

3. Copy it directly to the model when initializing it (not the recommended practice)

````console
const model = new ChatGoogleGenerativeAI({
    apiKey: "Your API Key"
    model: "gemini-pro",
    temperature: 0.9,
    maxOutputTokens: 2048,
  });```
````

## AI Applications built using Langchain and Google Gen AI

1. [Basic chat]()
2. [Prompt templates]()
3. [A simple recipe generator]() - The user enters a list of ingridents and the LLM model generates recipes using those ingridents.

## References

- [Langchain in Node js for google genai model](https://js.langchain.com/v0.2/docs/integrations/platforms/google/)
- [Langchain chat models in Nodejs for google genai models](https://js.langchain.com/v0.2/docs/integrations/chat/google_generativeai/)
