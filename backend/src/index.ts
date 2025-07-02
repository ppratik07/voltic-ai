require("dotenv").config();

import Anthropic from "@anthropic-ai/sdk";
import { BASE_PROMPT, getSystemPrompt } from "./prompts";
import express from "express";
import { TextBlock } from "@anthropic-ai/sdk/resources/messages";
import { basePrompt as reactBasePrompt } from "./defaults/react";
import { basePrompt as nodeBasePrompt} from "./defaults/react";
const anthropic = new Anthropic();
const app = express()
app.use(express.json())


app.post('/template',async (req, res) => {
  const prompt = req.body.prompt;
  const response = await anthropic.messages.create({
    model: "claude-opus-4-20250514",
    max_tokens: 1024,
    system: "Return either node or react based on what do you think this project should be. Only return a simple word either 'node' or 'react'. Do not return anything extra.",
    messages: [
      {
        role: "user",   
        content: prompt,
      },
    ],
  });
  const answer = (response.content[0] as TextBlock).text;
  if(answer === "react"){
    res.json({
        prompts: [BASE_PROMPT, `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
        uiPrompts: [reactBasePrompt]
    })
    return;
  }
  if(answer === "node"){
    res.json({
        prompts: [`Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${nodeBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
        uiPrompts: [nodeBasePrompt]
    })
    return;
  }
});

app.post("/chat", async (req, res) => {
    const messages = req.body.messages;
    const response = await anthropic.messages.create({
        messages: messages,
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 8000,
        system: getSystemPrompt()
    })

    console.log(response);

    res.json({
        response: (response.content[0] as TextBlock)?.text
    });
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});