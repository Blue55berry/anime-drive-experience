import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    model: "ElectricDrive S - Luxury Sedan",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Thank you! Your request has been sent. We’ll contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          model: "ElectricDrive S - Luxury Sedan",
          message: "",
        });
      } else {
        setStatus("❌ Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("❌ Failed to send. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-chrome">Ready to</span>{" "}
            <span className="text-glow">Experience</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Schedule your test drive today and discover the future of automotive excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info (unchanged) */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* ... same contact info and showroom hours as before ... */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Schedule Test Drive</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-lg 
                                 focus:ring-2 focus:ring-primary focus:border-primary transition-colors 
                                 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-lg 
                                 focus:ring-2 focus:ring-primary focus:border-primary transition-colors 
                                 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-lg 
                               focus:ring-2 focus:ring-primary focus:border-primary transition-colors 
                               text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-lg 
                               focus:ring-2 focus:ring-primary focus:border-primary transition-colors 
                               text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Model</label>
                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-lg 
                               focus:ring-2 focus:ring-primary focus:border-primary transition-colors 
                               text-sm sm:text-base"
                  >
                    <option>ElectricDrive S - Luxury Sedan</option>
                    <option>ElectricDrive X - Premium SUV</option>
                    <option>ElectricDrive R - Sports Coupe</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your preferences or any questions..."
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-lg 
                               focus:ring-2 focus:ring-primary focus:border-primary transition-colors 
                               text-sm sm:text-base"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-hero text-sm sm:text-base py-2 sm:py-3 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Sending..." : "Schedule Test Drive"}
                </motion.button>

                {status && <p className="mt-4 text-center text-sm">{status}</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
