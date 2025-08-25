import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const Cars = () => {
   const showcaseRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(showcaseRef, { once: true, margin: "-100px" });
    
  return (
   <section id="Cars" ref={showcaseRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-chrome">Our</span> <span className="text-glow">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium electric vehicles, each designed for performance, 
            luxury, and sustainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="car-card group cursor-pointer"
              whileHover={{ y: -15, scale: 1.02 }}
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
                </div>
              </div>
              
              <div className="p-6">
                <Link to={`/cars/${car.id}`} className="w-full">
                  <button className="w-full btn-outline-chrome">
                    Configure
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
            <Link to="/" className="px-4 py-2 rounded bg-secondary text-secondary-foreground font-bold">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

     
export default Cars;
