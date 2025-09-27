// src/pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { reply?: string; error?: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido. Use POST." });
  }

  const prompt = req.body?.prompt;
  const key = process.env.OPENAI_API_KEY;

  if (!key) {
    return res.status(500).json({ error: "Chave da OpenAI não configurada." });
  }

  if (!prompt) {
    return res.status(400).json({ error: "Prompt não fornecido." });
  }

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 800,
      }),
    });

    const data = await openaiRes.json();
    const content = data.choices?.[0]?.message?.content;
    return res.status(200).json({ reply: content });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Erro inesperado." });
  }
}
