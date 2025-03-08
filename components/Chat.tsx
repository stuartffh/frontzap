'use client';

import { useState, useEffect, useRef } from 'react';

export default function Assistant({ closeChat }: { closeChat: () => void }) {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Indica quando o bot está digitando
  const chatRef = useRef<HTMLDivElement>(null); // Referência para a rolagem automática

  // Envia mensagem de boas-vindas ao abrir o chat
  useEffect(() => {
    const sendWelcomeMessage = async () => {
      try {
        setIsTyping(true); // Mostra "Digitando..."
        const response = await fetch("https://n8n.zapchatbr.com/webhook/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "boas-vindas" }),
        });

        if (!response.ok) {
          throw new Error("Erro ao obter resposta do assistente.");
        }

        const data = await response.json();
        setTimeout(() => {
          setIsTyping(false); // Remove "Digitando..."
          if (data.resposta) {
            setMessages([{ text: data.resposta, sender: "bot" }]);
          }
        }, 1500); // Simula tempo de resposta (1.5s)
      } catch (error) {
        console.error("Erro ao enviar mensagem de boas-vindas:", error);
      }
    };

    sendWelcomeMessage();
  }, []);

  // Função para enviar mensagens do usuário
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      setIsTyping(true); // Mostra "Digitando..."
      const response = await fetch("https://n8n.zapchatbr.com/webhook/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Erro ao obter resposta do assistente.");
      }

      const data = await response.json();

      setTimeout(() => {
        setIsTyping(false); // Remove "Digitando..."
        if (data.resposta) {
          setMessages((prevMessages) => [...prevMessages, { text: data.resposta, sender: "bot" }]);
        }
      }, 1500); // Simula tempo de resposta (1.5s)
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Ocorreu um erro ao processar sua mensagem.", sender: "bot" }]);
    }
  };

  // Faz a rolagem automática para a última mensagem sempre que há uma nova
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg w-80 shadow-lg relative">
      {/* Botão de Fechar */}
      <button 
        onClick={closeChat} 
        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full text-sm hover:bg-red-400"
      >
        ✖
      </button>

      {/* Área do Chat */}
      <div ref={chatRef} className="h-60 overflow-y-auto p-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-1 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-right" : "bg-gray-600 text-left"}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="p-2 my-1 rounded-lg bg-gray-600 text-left italic">
            Digitando...
          </div>
        )}
      </div>

      {/* Entrada de Mensagem */}
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 bg-gray-700 text-white placeholder-gray-400 rounded-l-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="p-2 bg-blue-500 rounded-r-lg">Enviar</button>
      </div>
    </div>
  );
}
