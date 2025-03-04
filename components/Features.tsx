import { map } from "cheerio/dist/commonjs/api/traversing";

export default function Features() {
  const services = [
    "Automação Inteligente",
    "Otimização de Processos",
    "Integrações Personalizadas",
    "Gestão de Dados",
    "Segurança Digital"
  ];

  return (
    <section className="py-20 max-w-5xl text-center">
      <h2 className="text-4xl font-bold text-blue-400 drop-shadow-md">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {services.map((service, index) => (
          <div 
            key={index}
            className="p-6 bg-gray-800/60 text-white shadow-lg rounded-xl border border-gray-600 hover:border-blue-500 hover:shadow-2xl backdrop-blur-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-300 drop-shadow-md">{service}</h3>
            <p className="mt-2 opacity-80">
              Soluções personalizadas para maximizar sua produtividade e segurança.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

