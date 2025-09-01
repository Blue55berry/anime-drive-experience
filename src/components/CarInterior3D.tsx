import { motion } from "framer-motion";
import { Armchair, Gauge, Speaker } from "lucide-react";

const CarInterior3D = () => {
  const features = [
    {
      icon: <Armchair className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
      title: "Premium Seating",
      description:
        "Hand-crafted leather seats with memory foam and heating/cooling systems.",
    },
    {
      icon: <Gauge className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
      title: "Smart Dashboard",
      description:
        "AI-powered interface with holographic displays and gesture controls.",
    },
    {
      icon: <Speaker className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
      title: "Immersive Audio",
      description:
        "3D spatial audio system with 32 speakers and active noise cancellation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-primary">Virtual Cockpit</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-3xl mx-auto">
            Explore the meticulously crafted interior of our flagship model.
            Every detail is designed for your comfort and control.
          </p>
        </motion.div>

        {/* 3D Frame */}
        <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-background via-card to-background border-2 border-primary/20 shadow-2xl shadow-primary/10 flex items-center justify-center">
          <div className="sketchfab-embed-wrapper w-full h-full">
            <iframe
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen={true}
              webkitAllowFullScreen={true}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/6cfd417294aa490a83be88eedb43e861/embed?ui_watermark_link=0&ui_theme=dark&autostart=1&camera=0"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="mb-4 md:mb-6 flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarInterior3D;
