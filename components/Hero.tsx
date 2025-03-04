'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="relative w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 text-center shadow-2xl overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#1e40af,_#6b21a8)] blur-2xl"></div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl font-extrabold tracking-wide drop-shadow-lg"
      >
        Transforme Seu Negócio com Automação Inteligente
      </motion.h1>
      <p className="relative mt-4 text-lg opacity-80 max-w-2xl mx-auto">
        Soluções inovadoras para otimizar seus processos e aumentar sua produtividade.
      </p>
    </header>
  );
}
