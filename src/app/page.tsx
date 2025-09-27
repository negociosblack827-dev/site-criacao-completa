"use client";

import { useState } from "react";

export default function Page() {
  const [mensagens, setMensagens] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  async function enviarMensagem() {
    if (!input.trim()) return;

    // adiciona a mensagem do usuário no estado
    setMensagens((prev) => [...prev, { role: "user", content: input }]);

    try {
      const resposta = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await resposta.json();
      const texto = data?.choices?.[0]?.message?.content || "Sem resposta da IA";

      // adiciona a resposta do bot no estado
      setMensagens((prev) => [...prev, { role: "assistant", content: texto }]);
    } catch (err) {
      console.error("Erro:", err);
      setMensagens((prev) => [...prev, { role: "assistant", content: "Erro ao obter resposta da IA." }]);
    }

    setInput("");
  }

  return (
    <main className="p-6">
      <div className="space-y-4">
        {mensagens.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.role === "user" ? "bg-blue-200 text-right" : "bg-gray-200 text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Digite sua mensagem..."
        />
        <button
          onClick={enviarMensagem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </div>
    </main>
  );
}
