
export default function Reviews() {
  const testimonials = [
    "A automação aumentou nossa produtividade",
    "A integração personalizada otimizou nossos processos e reduziu custos"
  ];

  return (
    <section className="py-16 text-center max-w-5xl">
      <h2 className="text-4xl font-bold text-blue-400 drop-shadow-md">O Que Nossos Clientes Dizem</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800/60 text-white rounded-xl border border-gray-600 hover:border-blue-500 hover:shadow-2xl backdrop-blur-lg transition-all duration-300"
          >
            <p className="italic">&quot;{testimonial}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
}

