const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: 'sk-proj-25GVEUI633OhAGpRL5u2T3BlbkFJG2G59pxGuwJ1zRH7LSf9'});

async function main() {
  const moderation = await openai.moderations.create({ input: "Sample text goes here." });

  console.log(completion.choices[0]);
}

main();
