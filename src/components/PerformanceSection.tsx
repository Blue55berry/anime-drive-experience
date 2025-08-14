import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const stats: Stat[] = [
  { label: 'Top Speed', value: 200, suffix: 'mph', color: 'primary' },
  { label: 'Acceleration', value: 2.1, suffix: 's 0-60', color: 'accent' },
  { label: 'Range', value: 500, suffix: 'miles', color: 'automotive-gold' },
  { label: 'Charging Speed', value: 80, suffix: '% in 20min', color: 'automotive-red' }
];

const PerformanceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        let start = 0;
        const increment = stat.value / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            start = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [stat.label]: start
          }));
        }, 20);
      });
    }
  }, [isInView]);

  return (
    <section id="performance" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-glow">Pure</span> <span className="text-chrome">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineering excellence meets electric innovation. Every metric optimized for the ultimate driving experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 text-center hover:bg-card/70 transition-all duration-500"
            >
              <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                {stat.label === 'Acceleration' 
                  ? (animatedStats[stat.label] || 0).toFixed(1)
                  : Math.floor(animatedStats[stat.label] || 0)
                }
                <span className="text-sm ml-1">{stat.suffix}</span>
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-8"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Battery Tech</h3>
            <p className="text-muted-foreground">
              Next-generation lithium-ion cells with industry-leading energy density and thermal management.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-xl p-8"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Torque</h3>
            <p className="text-muted-foreground">
              Electric motors deliver maximum torque from zero RPM for unparalleled acceleration response.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-automotive-gold/10 to-transparent border border-automotive-gold/20 rounded-xl p-8"
          >
            <div className="w-12 h-12 rounded-full bg-automotive-gold/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-automotive-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Efficiency</h3>
            <p className="text-muted-foreground">
              AI-powered energy management optimizes performance and range in real-time driving conditions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;