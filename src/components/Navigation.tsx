import { useState, useEffect } from 'react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Animate navigation on mount
    anime({
      targets: '.nav-item',
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutCubic'
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      anime({
        targets: 'html, body',
        scrollTop: element.offsetTop - 80,
        duration: 1000,
        easing: 'easeInOutCubic'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-card/80 backdrop-blur-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="nav-item">
            <h1 className="text-2xl font-bold text-glow">ElectricDrive</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'showcase', 'performance', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="nav-item capitalize text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="nav-item">
            <button className="btn-hero">
              Book Test Drive
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;