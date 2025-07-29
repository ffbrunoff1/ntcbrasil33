import { motion } from 'framer-motion';
import { Building2, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Experiência Comprovada',
      description:
        'Anos de atuação no mercado da construção, entregando projetos de alta qualidade.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Foco em Resultados',
      description:
        'Comprometimento com prazos e metas, garantindo a satisfação dos nossos clientes.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'Qualidade Garantida',
      description:
        'Processos rigorosos de controle de qualidade em todas as etapas dos projetos.',
    },
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading text-gray-900">Sobre a NTC Brasil</h2>
          <p className="subheading">
            Somos uma empresa comprometida com a excelência e inovação no setor
            da construção
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Construir o futuro através de soluções inovadoras e sustentáveis,
            sempre priorizando a qualidade e a satisfação dos nossos clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
