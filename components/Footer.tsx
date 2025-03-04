import { a } from "framer-motion/dist/types.d-6pKw1mTI";

export default function Footer() {
  return (
    <footer className="py-16 text-center">
      <h2 className="text-2xl font-bold text-blue-300 drop-shadow-md">Pronto para transformar sua empresa?</h2>
      <p className="mt-2 opacity-80">Entre em contato e descubra como podemos ajudar.</p>
      <div className="mt-6 flex flex-col gap-4">
        <a 
          href="https://wa.me/5516997718996"
          target="_blank"
          className="bg-green-500/80 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition-all duration-300"
        >
          Fale Conosco pelo WhatsApp
        </a>
        <a 
          href="mailto:roberto@zapchatbr.com"
          className="bg-blue-600/80 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
        >
          Roberto Carlos
        </a>
        <a 
          href="mailto:rafaelcarvalho@zapchatbr.com"
          className="bg-blue-600/80 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
        >
          Rafael Carvalho
        </a>
      </div>
    </footer>
  );
}

