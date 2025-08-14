import { useEffect, useRef, useState } from 'react';
const anime = require('animejs');

interface Stat {
  label: string;
  value: number;
  suffix: string;
  color: string;
  duration?: number;
}

const stats: Stat[] = [
  { label: 'Top Speed', value: 200, suffix: 'mph', color: 'primary', duration: 2000 },
  { label: 'Acceleration', value: 2.1, suffix: 's 0-60', color: 'accent', duration: 1500 },
  { label: 'Range', value: 500, suffix: 'miles', color: 'automotive-gold', duration: 2500 },
  { label: 'Charging Speed', value: 80, suffix: '% in 20min', color: 'automotive-red', duration: 1800 }
];

const PerformanceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section title
            anime({
              targets: '.performance-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutCubic'
            });

            // Animate performance cards
            anime({
              targets: '.performance-card',
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.9, 1],
              delay: anime.stagger(150),
              duration: 1000,
              easing: 'easeOutCubic'
            });

            // Animate statistics with counting effect
            stats.forEach((stat, index) => {
              setTimeout(() => {
                const animation = { value: 0 };
                anime({
                  targets: animation,
                  value: stat.value,
                  duration: stat.duration || 2000,
                  easing: 'easeOutCubic',
                  update: () => {
                    setAnimatedStats(prev => ({
                      ...prev,
                      [stat.label]: animation.value
                    }));
                  }
                });
              }, index * 200);
            });

            // Add glow effect to cards
            anime({
              targets: '.performance-card',
              boxShadow: [
                '0 0 0 hsl(var(--primary) / 0)',
                '0 0 30px hsl(var(--primary) / 0.3)',
                '0 0 0 hsl(var(--primary) / 0)'
              ],
              delay: anime.stagger(300),
              duration: 2000,
              easing: 'easeInOutSine'
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="performance" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="performance-title text-5xl font-bold mb-6 opacity-0">
            <span className="text-glow">Pure</span> <span className="text-chrome">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0">
            Engineering excellence meets electric innovation. Every metric optimized for the ultimate driving experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="performance-card bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 text-center opacity-0 hover:bg-card/70 transition-all duration-500"
            >
              <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                {stat.label === 'Acceleration' 
                  ? (animatedStats[stat.label] || 0).toFixed(1)
                  : Math.floor(animatedStats[stat.label] || 0)
                }
                <span className="text-sm ml-1">{stat.suffix}</span>
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="performance-card bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-8 opacity-0">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Battery Tech</h3>
            <p className="text-muted-foreground">
              Next-generation lithium-ion cells with industry-leading energy density and thermal management.
            </p>
          </div>

          <div className="performance-card bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-xl p-8 opacity-0">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Torque</h3>
            <p className="text-muted-foreground">
              Electric motors deliver maximum torque from zero RPM for unparalleled acceleration response.
            </p>
          </div>

          <div className="performance-card bg-gradient-to-br from-automotive-gold/10 to-transparent border border-automotive-gold/20 rounded-xl p-8 opacity-0">
            <div className="w-12 h-12 rounded-full bg-automotive-gold/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-automotive-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Efficiency</h3>
            <p className="text-muted-foreground">
              AI-powered energy management optimizes performance and range in real-time driving conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;