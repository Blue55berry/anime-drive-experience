import { Link } from "react-router-dom";
import { cars } from "../data/cars";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Cars = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(showcaseRef, { once: true, margin: "-100px" });

  return (
    <section
      id="Cars"
      ref={showcaseRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-chrome">Our</span>{" "}
            <span className="text-glow">Collection</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium electric vehicles, each designed
            for performance, luxury, and sustainability.
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="car-card group cursor-pointer"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>

                {/* Car Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {car.name}
                    </h3>
                    <span className={`text-base sm:text-lg font-semibold text-${car.color}`}>
                      {car.price}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {car.type}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="p-4 sm:p-6">
                <Link to={`/cars/${car.id}`} className="w-full block">
                  <button className="w-full btn-outline-chrome text-sm sm:text-base py-2 sm:py-3">
                    Configure
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <Link
            to="/"
            className="px-4 py-2 sm:px-6 sm:py-3 rounded bg-secondary text-secondary-foreground font-bold text-sm sm:text-base"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cars;
