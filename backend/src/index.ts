require('dotenv').config();

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

async function main() {
     anthropic.messages.stream({
        model: "claude-opus-4-20250514",
        max_tokens: 1024,
        messages: [{ role: "user", content: "What is the capital of India?" }],
      }).on('text',(text)=>{
        console.log(text);
      })
     
}
main();
