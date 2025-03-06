
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-sigma-neon mb-4 neon-glow">404</h1>
          <p className="text-2xl md:text-3xl text-white mb-8">Oops! Página não encontrada</p>
          <p className="text-sigma-muted max-w-md mx-auto mb-10">
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>
          <Link 
            to="/" 
            className="bg-sigma-neon text-sigma-dark hover:bg-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
