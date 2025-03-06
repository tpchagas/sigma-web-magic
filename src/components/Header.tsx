
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-300 bg-sigma-dark border-b border-sigma-light/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3bd09b3b-0cb2-4256-b8bb-3074ebbb66a1.png" 
              alt="Sigma Labs Logo" 
              className="h-10 mr-2" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-white hover:text-sigma-neon transition-colors">
              Início
            </Link>
            <Link to="#sobre" className="text-white hover:text-sigma-neon transition-colors">
              Sobre Nós
            </Link>
            <Link to="#servicos" className="text-white hover:text-sigma-neon transition-colors">
              Serviços
            </Link>
            <Link to="#contato" className="text-white hover:text-sigma-neon transition-colors">
              Contato
            </Link>
          </nav>
          
          {/* Contact Phone */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:1151995833" 
              className="flex items-center text-sigma-neon px-4 py-2 rounded-full border border-sigma-neon hover:bg-sigma-neon hover:text-sigma-dark transition-all duration-300"
            >
              <Phone size={16} className="mr-2" />
              <span>(11) 5199-5833</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-sigma-neon transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="#sobre" 
                className="text-white hover:text-sigma-neon transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="#servicos" 
                className="text-white hover:text-sigma-neon transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="#contato" 
                className="text-white hover:text-sigma-neon transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <a 
                href="tel:1151995833" 
                className="flex items-center text-sigma-neon px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} className="mr-2" />
                <span>(11) 5199-5833</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
