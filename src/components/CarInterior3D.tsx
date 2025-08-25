import { motion } from "framer-motion";
import { Armchair, Gauge, Speaker } from "lucide-react";

const CarInterior3D = () => {
  const features = [
    {
      icon: <Armchair className="w-12 h-12 text-primary" />,
      title: "Premium Seating",
      description:
        "Hand-crafted leather seats with memory foam and heating/cooling systems.",
    },
    {
      icon: <Gauge className="w-12 h-12 text-primary" />,
      title: "Smart Dashboard",
      description:
        "AI-powered interface with holographic displays and gesture controls.",
    },
    {
      icon: <Speaker className="w-12 h-12 text-primary" />,
      title: "Immersive Audio",
      description:
        "3D spatial audio system with 32 speakers and active noise cancellation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 px-4 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-primary">Virtual Cockpit</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the meticulously crafted interior of our flagship model.
            Every detail is designed for your comfort and control.
          </p>
        </motion.div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-background via-card to-background border-2 border-primary/20 shadow-2xl shadow-primary/10 flex items-center justify-center animate-glow-pulse">
          <div className="sketchfab-embed-wrapper w-full h-full">
            <iframe
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen={true}
              webkitAllowFullScreen={true}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://sketchfab.com/models/6cfd417294aa490a83be88eedb43e861/embed?ui_watermark_link=0&ui_theme=dark&autostart=1&camera=0"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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

