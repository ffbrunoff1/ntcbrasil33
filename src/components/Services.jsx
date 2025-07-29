import { motion } from 'framer-motion';
import { Building, Users, Briefcase, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Gestão de Projetos',
      description:
        'Gerenciamento completo de projetos de construção, desde o planejamento até a entrega final.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Consultoria Especializada',
      description:
        'Assessoria técnica e estratégica para otimização de processos e resultados.',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Soluções Corporativas',
      description:
        'Desenvolvimento de soluções personalizadas para empresas do setor da construção.',
    },
  ];

  const benefits = [
    'Equipe altamente qualificada',
    'Tecnologia de ponta',
    'Compromisso com prazos',
    'Atendimento personalizado',
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading">Nossos Serviços</h2>
          <p className="subheading">
            Oferecemos soluções completas e integradas para o setor da
            construção
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Por que escolher a NTC Brasil?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <motion.a
                href="#contact"
                className="btn bg-white text-primary hover:bg-gray-100 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicite um orçamento
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
