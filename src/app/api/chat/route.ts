import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Mensagem não fornecida." }, { status: 400 });
    }

    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await resposta.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}
