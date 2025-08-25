import { useEffect } from 'react';
import { motion } from 'framer-motion';
import heroCarImage from '../data/hero-car.jpg';

const HeroSection = () => {
  const handleExploreClick = () => {
    const showcaseSection = document.getElementById('showcase');
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Content */}
        <div className="space-y-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-6xl lg:text-7xl font-bold">
              <span className="text-chrome block">Future of</span>
              <span className="text-glow">Driving</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Experience the next generation of electric vehicles with cutting-edge technology, 
              unparalleled performance, and sustainable innovation.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4" 
            variants={itemVariants}
          >
            <button onClick={handleExploreClick} className="btn-hero">
              Explore Models
            </button>
            <button className="btn-outline-chrome">
              Watch Video
            </button>
          </motion.div>

          {/* Performance Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-6 pt-8" 
            variants={itemVariants}
          >
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
          </motion.div>
        </div>

        {/* Hero Car Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [-5, 5] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <img 
              src={heroCarImage} 
              alt="Electric Sports Car"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;