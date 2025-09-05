import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/80 backdrop-blur-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold text-glow">ElectricDrive</h1>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {['home', 'showcase', 'performance', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                onClick={() => handleNavClick(item)}
                className="capitalize text-foreground hover:text-primary transition-colors duration-300 relative group px-2 py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Book Test Drive button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <button className="btn-hero ml-4 px-5 py-2 text-base md:text-lg rounded-lg shadow-md w-auto">
              Book Test Drive
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-card/95 rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-4 absolute left-0 right-0 top-full z-40 border border-border/50 animate-fade-in">
            {['home', 'showcase', 'performance', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="capitalize text-foreground hover:text-primary text-lg py-2 w-full text-left"
              >
                {item}
              </button>
            ))}
            <button className="btn-hero w-full mt-2 py-3 text-lg rounded-lg shadow-md" id="form">
              Book Test Drive
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;