
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-sigma-dark/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sigma-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            A maneira mais fácil de incorporar <span className="text-sigma-neon neon-glow">IA</span> à sua empresa
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-sigma-muted mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Automatize processos, otimize equipes e aumente a produtividade com nossa plataforma de agentes de IA
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#servicos" 
              className="bg-sigma-neon text-sigma-dark hover:bg-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
            >
              Conheça Nossos Serviços
            </a>
            <a 
              href="#contato" 
              className="border border-white text-white hover:border-sigma-neon hover:text-sigma-neon px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
            >
              Entre em Contato
            </a>
          </motion.div>
          
          <motion.div 
            className="perspective-container w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="card-rotate-hover relative">
              <img 
                src="/lovable-uploads/9ec3ca09-d61b-4b7f-9b99-226ae4a9947c.png" 
                alt="Plataforma Sigma Labs" 
                className="w-full h-auto rounded-xl shadow-2xl border border-sigma-light/50"
              />
              <div className="absolute -bottom-5 -right-5 bg-sigma-neon text-sigma-dark px-4 py-2 rounded-lg font-bold text-sm md:text-base">
                Plataforma de Agentes IA
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#stats" className="text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
