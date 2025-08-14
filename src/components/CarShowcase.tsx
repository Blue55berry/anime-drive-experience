import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import sedanImage from '@/assets/sedan-silver.jpg';
import suvImage from '@/assets/suv-blue.jpg';
import coupeImage from '@/assets/coupe-red.jpg';

interface Car {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
  specs: {
    range: string;
    acceleration: string;
    power: string;
  };
  color: string;
}

const cars: Car[] = [
  {
    id: 'sedan',
    name: 'ElectricDrive S',
    type: 'Luxury Sedan',
    price: '$89,000',
    image: sedanImage,
    specs: {
      range: '450 miles',
      acceleration: '3.2s 0-60',
      power: '680 HP'
    },
    color: 'automotive-silver'
  },
  {
    id: 'suv',
    name: 'ElectricDrive X',
    type: 'Premium SUV',
    price: '$95,000',
    image: suvImage,
    specs: {
      range: '420 miles',
      acceleration: '3.8s 0-60',
      power: '750 HP'
    },
    color: 'primary'
  },
  {
    id: 'coupe',
    name: 'ElectricDrive R',
    type: 'Sports Coupe',
    price: '$125,000',
    image: coupeImage,
    specs: {
      range: '380 miles',
      acceleration: '2.1s 0-60',
      power: '1020 HP'
    },
    color: 'automotive-red'
  }
];

const CarShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section title
            anime({
              targets: '.showcase-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutCubic'
            });

            // Stagger car card animations
            anime({
              targets: '.car-card',
              opacity: [0, 1],
              translateY: [80, 0],
              scale: [0.8, 1],
              delay: anime.stagger(200),
              duration: 1200,
              easing: 'easeOutCubic'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCarHover = (carId: string, isHovering: boolean) => {
    const card = document.querySelector(`[data-car="${carId}"]`);
    if (!card) return;

    if (isHovering) {
      anime({
        targets: card,
        translateY: -15,
        scale: 1.05,
        duration: 400,
        easing: 'easeOutCubic'
      });

      anime({
        targets: `[data-car="${carId}"] .car-specs`,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 300,
        easing: 'easeOutCubic',
        delay: 100
      });
    } else {
      anime({
        targets: card,
        translateY: 0,
        scale: 1,
        duration: 400,
        easing: 'easeOutCubic'
      });

      anime({
        targets: `[data-car="${carId}"] .car-specs`,
        opacity: [1, 0],
        translateY: [0, 20],
        duration: 200,
        easing: 'easeOutCubic'
      });
    }
  };

  return (
    <section id="showcase" ref={showcaseRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="showcase-title text-5xl font-bold mb-6 opacity-0">
            <span className="text-chrome">Our</span> <span className="text-glow">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0">
            Choose from our range of premium electric vehicles, each designed for performance, 
            luxury, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              data-car={car.id}
              className="car-card group cursor-pointer opacity-0"
              onMouseEnter={() => handleCarHover(car.id, true)}
              onMouseLeave={() => handleCarHover(car.id, false)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                
                {/* Car Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{car.name}</h3>
                    <span className={`text-lg font-semibold text-${car.color}`}>
                      {car.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{car.type}</p>
                  
                  {/* Specs - Hidden by default, shown on hover */}
                  <div className="car-specs opacity-0 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Range:</span>
                      <span className="text-primary">{car.specs.range}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>0-60 mph:</span>
                      <span className="text-accent">{car.specs.acceleration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Power:</span>
                      <span className="text-automotive-gold">{car.specs.power}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <button className="w-full btn-outline-chrome">
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;