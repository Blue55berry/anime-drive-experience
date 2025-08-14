import { useEffect } from 'react';
const anime = require('animejs');
import heroCarImage from '@/assets/hero-car.jpg';

const HeroSection = () => {
  useEffect(() => {
    // Hero animation sequence
    const timeline = anime.timeline({
      autoplay: true
    });

    timeline
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        easing: 'easeOutCubic'
      })
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({
        targets: '.hero-car',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1500,
        easing: 'easeOutCubic'
      }, '-=800')
      .add({
        targets: '.hero-buttons',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutCubic'
      }, '-=500')
      .add({
        targets: '.hero-stats',
        opacity: [0, 1],
        translateX: [-50, 0],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=400');

    // Floating animation for the car
    anime({
      targets: '.hero-car',
      translateY: [-5, 5],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });

  }, []);

  const handleExploreClick = () => {
    const showcaseSection = document.getElementById('showcase');
    if (showcaseSection) {
      anime({
        targets: 'html, body',
        scrollTop: showcaseSection.offsetTop - 80,
        duration: 1200,
        easing: 'easeInOutCubic'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title text-6xl lg:text-7xl font-bold opacity-0">
              <span className="text-chrome block">Future of</span>
              <span className="text-glow">Driving</span>
            </h1>
            <p className="hero-subtitle text-xl text-muted-foreground max-w-lg opacity-0">
              Experience the next generation of electric vehicles with cutting-edge technology, 
              unparalleled performance, and sustainable innovation.
            </p>
          </div>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 opacity-0">
            <button onClick={handleExploreClick} className="btn-hero">
              Explore Models
            </button>
            <button className="btn-outline-chrome">
              Watch Video
            </button>
          </div>

          {/* Performance Stats */}
          <div className="hero-stats grid grid-cols-3 gap-6 pt-8 opacity-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">0-60</div>
              <div className="text-sm text-muted-foreground">2.1 seconds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500</div>
              <div className="text-sm text-muted-foreground">Miles range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-automotive-gold">1020</div>
              <div className="text-sm text-muted-foreground">Horsepower</div>
            </div>
          </div>
        </div>

        {/* Hero Car Image */}
        <div className="relative">
          <div className="hero-car opacity-0">
            <img 
              src={heroCarImage} 
              alt="Electric Sports Car"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;