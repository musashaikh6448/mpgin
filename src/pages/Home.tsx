import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const facilitiesLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/D.E.M.O._Logo_2006.svg",
    "https://cdn-icons-png.flaticon.com/512/5038/5038590.png",
    "https://cdn.vectorstock.com/i/500p/66/24/demo-video-icon-set-room-conference-vector-53226624.jpg",
    "https://png.pngtree.com/png-vector/20230222/ourmid/pngtree-modern-demo-logo-vector-file-png-image_6614023.png",
    "https://cdn-icons-png.flaticon.com/512/5332/5332306.png",
    "https://st.depositphotos.com/1853861/4158/v/450/depositphotos_41587141-stock-illustration-demo-icon.jpg",
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Facilities Logo Slider */}
      <section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#001560] mb-4">
        Our Facilities
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Explore our world-class facilities designed to enhance your learning
        experience.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <div className="relative w-full h-40 flex items-center">
        {/* Marquee Container */}
        <div className="absolute flex gap-8 animate-marquee whitespace-nowrap">
          {facilitiesLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Facility Logo"
              className="w-32 h-32 object-contain"
            />
          ))}
          {/* Duplicate Logos for Seamless Loop */}
          {facilitiesLogos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt="Facility Logo"
              className="w-32 h-32 object-contain"
            />
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Why Choose MPGIN Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#001560] to-[#b71a34] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MPGIN?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join a legacy of excellence and innovation in education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Connections",
                description:
                  "Strong partnerships with leading companies ensuring excellent placement opportunities.",
              },
              {
                title: "Expert Faculty",
                description:
                  "Learn from experienced professors and industry experts dedicated to your success.",
              },
              {
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art facilities and laboratories equipped with the latest technology.",
              },
              {
                title: "Research Focus",
                description:
                  "Emphasis on research and innovation with modern research facilities.",
              },
              {
                title: "Holistic Development",
                description:
                  "Focus on overall personality development through various activities and clubs.",
              },
              {
                title: "Global Exposure",
                description:
                  "International collaborations and exchange programs for global exposure.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#001560] mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our students about their experiences at MPGIN.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Engineering Student",
                testimonial:
                  "MPGIN has provided me with the best resources and faculty to excel in my field.",
              },
              {
                name: "Jane Smith",
                role: "Management Student",
                testimonial:
                  "The campus life and facilities at MPGIN are truly world-class.",
              },
              {
                name: "Alice Johnson",
                role: "Polytechnic Student",
                testimonial:
                  "I am grateful for the opportunities and support I received at MPGIN.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
                <h3 className="text-lg font-bold text-[#001560]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#001560] to-[#b71a34] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join MPGIN?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Take the first step towards a successful career with MPGIN.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#001560] px-8 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-[#fdf100] hover:text-[#001560] transition-all mx-auto"
          >
            Apply Now <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Home;
