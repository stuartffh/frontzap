'use client'; 

import { motion } from "framer-motion";

export default function Automatizar() {
  return (
    <section className="relative bg-gradient-to-r from-purple-700 to-blue-700 text-white py-16 w-full text-center shadow-lg overflow-hidden">
      {/* Efeito de Iluminação */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_0%,_rgba(0,0,0,0)_80%)] blur-3xl"></div>
      
      {/* Título Animado */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl font-bold drop-shadow-lg"
      >
        Por que Automatizar?
      </motion.h2>

      {/* Texto Explicativo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative mt-4 max-w-3xl mx-auto opacity-90"
      >
        Reduza custos, elimine tarefas repetitivas, melhore a segurança digital e foque no crescimento do seu negócio.
      </motion.p>
    </section>
  );
}

