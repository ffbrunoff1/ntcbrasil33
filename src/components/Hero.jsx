import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-primary relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Construindo o futuro com qualidade e confiança
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-100">
              Sua parceira de confiança no setor de construção, unindo
              experiência e expertise para entregar os melhores resultados.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn bg-white text-primary hover:bg-gray-100 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entre em contato
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#about"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba mais
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '10+', label: 'Anos de Experiência' },
                  { number: '100+', label: 'Projetos Concluídos' },
                  { number: '95%', label: 'Clientes Satisfeitos' },
                  { number: '50+', label: 'Profissionais' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4"
                  >
                    <h3 className="text-3xl font-bold text-white">
                      {stat.number}
                    </h3>
                    <p className="text-gray-200 mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
      </motion.div>
    </section>
  );
}
