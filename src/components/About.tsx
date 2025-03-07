
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    'Integração com seus sistemas existentes',
    'Implementação rápida e sem complicações',
    'Suporte técnico especializado',
    'Soluções personalizadas para seu negócio',
    'Segurança e conformidade com LGPD',
    'Atualização contínua com novas tecnologias'
  ];

  return (
    <section id="sobre" className="py-20 bg-sigma-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-sigma-light text-sigma-neon rounded-full text-sm font-medium mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quem Somos e O Que Fazemos
            </h2>
            <p className="text-sigma-muted text-xl max-w-3xl mx-auto">
              A Sigma Labs é uma empresa pioneira em soluções de Inteligência Artificial para empresas de todos os portes.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Transformando empresas com Agentes de IA inteligentes
            </h3>
            <p className="text-sigma-muted mb-8">
              Na Sigma Labs, desenvolvemos uma plataforma inovadora que permite às empresas automatizar processos, aumentar a produtividade e oferecer experiências excepcionais aos clientes. Nossa missão é democratizar o acesso à Inteligência Artificial, tornando-a acessível e eficaz para empresas de todos os tamanhos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-sigma-neon rounded-full p-1 mr-3 mt-1">
                    <Check size={14} className="text-sigma-dark" />
                  </div>
                  <p className="text-white">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#servicos" className="bg-sigma-light hover:bg-sigma-light/80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center">
                Conheça Nossos Serviços
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 perspective-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="card-rotate-hover glass-card rounded-xl overflow-hidden p-8">
              <div className="grid grid-cols-3 grid-rows-3 gap-4">
                {[...Array(9)].map((_, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg ${index % 3 === 0 ? 'bg-sigma-neon' : 'bg-sigma-light'} p-4 flex items-center justify-center`}
                  >
                    {index % 3 === 0 ? (
                      <svg className="w-8 h-8 text-sigma-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
