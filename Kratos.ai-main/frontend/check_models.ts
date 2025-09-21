import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function listModels() {
  const models = await openai.models.list();
  console.log(models.data.map(m => m.id));
}

listModels();
