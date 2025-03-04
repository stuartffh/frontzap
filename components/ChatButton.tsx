'use client';

import { useState } from 'react';
import Assistant from './Chat'; // Importa o chat

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div>
      {!isChatOpen ? (
        <button 
          onClick={toggleChat} 
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-500"
        >
          Chat 💬
        </button>
      ) : (
        <div className="fixed bottom-5 right-5">
          <Assistant closeChat={toggleChat} /> {/* Passamos a função para fechar o chat */}
        </div>
      )}
    </div>
  );
}
