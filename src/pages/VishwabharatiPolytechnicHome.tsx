import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Factory,
  BookOpenCheck,
  HardHat,
  Wrench,
  BatteryCharging,
  PenTool,
  CircuitBoard
} from "lucide-react";
import polytechnicHero from "../assets/images/labs.avif";

const VishwabharatiPolytechnicHome = () => {
  // Color constants
  const colors = {
    primary: "#001560",
    secondary: "#b71a34",
    accent: "#fdf100"
  };

  const programs = [
    {
      title: "Mechanical Engineering",
      specializations: ["Automobile", "Mechatronics", "CNC Technology"],
      duration: "3 Years",
      intake: "120 Seats",
      accreditation: "AICTE Approved",
      icon: <PenTool className="w-8 h-8" />,
      highlights: ["Automotive Workshop", "CAD/CAM Lab", "Industry 4.0 Training"]
    },
    {
      title: "Civil Engineering",
      specializations: ["Construction Tech", "Surveying", "Estimation"],
      duration: "3 Years",
      intake: "90 Seats",
      accreditation: "COA Recognized",
      icon: <HardHat className="w-8 h-8" />,
      highlights: ["Material Testing Lab", "BIM Software", "Site Internships"]
    },
    {
      title: "Electrical Engineering",
      specializations: ["Industrial Wiring", "PLC Systems", "Solar Tech"],
      duration: "3 Years",
      intake: "75 Seats",
      accreditation: "NSDC Partnered",
      icon: <BatteryCharging className="w-8 h-8" />,
      highlights: ["Smart Grid Lab", "Solar Panel Workshop", "IoT Integration"]
    },
    {
      title: "Computer Engineering",
      specializations: ["Networking", "Embedded Systems", "Web Tech"],
      duration: "3 Years",
      intake: "60 Seats",
      accreditation: "NIELIT Certified",
      icon: <Cpu className="w-8 h-8" />,
      highlights: ["Cisco Lab", "Mobile App Development", "Cloud Computing"]
    },
  ];

  const facilities = [
    {
      title: "Advanced Workshops",
      projects: ["Welding Station", "Machine Shop", "3D Printing"],
      icon: <Wrench className="w-6 h-6" />,
      collaborations: ["Bosch", "TATA Motors", "L&T"]
    },
    {
      title: "Energy Labs",
      projects: ["Solar Installation", "Wind Energy", "Smart Grid"],
      icon: <CircuitBoard className="w-6 h-6" />,
      collaborations: ["Siemens", "ABB", "Havells"]
    },
    {
      title: "Construction Yard",
      projects: ["Material Testing", "Survey Practice", "Model Making"],
      icon: <Factory className="w-6 h-6" />,
      collaborations: ["UltraTech", "JCB", "Caterpillar"]
    },
    {
      title: "Digital Labs",
      projects: ["IoT Systems", "Robotics", "CNC Programming"],
      icon: <BookOpenCheck className="w-6 h-6" />,
      collaborations: ["Autodesk", "Dassault", "SolidWorks"]
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-r from-[#001560] to-[#b71a34] text-white">
        <div className="absolute inset-0">
          <img
            src={polytechnicHero}
            alt="Polytechnic Workshop"
            className="w-full h-full object-fill opacity-20"
            loading="lazy"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Skill-Based Education at
              <span className="block mt-3 text-[#fdf100]">Vishwabharati Polytechnic</span>
            </h1>
            <p className="text-lg md:text-2xl font-medium mb-8 max-w-3xl mx-auto md:mx-0">
              AICTE Approved | 100% Practical Training | Industry-Ready Certification
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#b71a34] text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-[#9e162d] transition-all"
              >
                Apply Now <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#001560] px-8 py-3 rounded-full flex items-center justify-center shadow-lg hover:bg-[#fdf100] transition-all"
              >
                View Courses
              </motion.button>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <BookOpenCheck className="w-8 h-8" />,
                number: "25+", 
                text: "Skill Certifications" 
              },
              { 
                icon: <Factory className="w-8 h-8" />,
                number: "200+", 
                text: "Industry Partners" 
              },
              { 
                icon: <Wrench className="w-8 h-8" />,
                number: "85%", 
                text: "Campus Placements" 
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-[#fdf100] mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-[#fdf100]">
                  {stat.number}
                </h3>
                <p className="mt-2 text-lg text-gray-200">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Diploma Programs */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>
              Industry-Focused Diploma Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Practical skill development with hands-on training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4"
                style={{ borderColor: colors.secondary }}
              >
                <div className="mb-4 text-[#b71a34]">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>
                  {program.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {program.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: colors.primary,
                        color: "white"
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {program.accreditation}
                </div>
                <ul className="space-y-2 text-sm">
                  {program.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#b71a34] mt-2 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Facilities */}
      <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Advanced Technical Facilities
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mt-4">
              Industry-grade infrastructure for practical learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4 text-[#b71a34]">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>
                  {facility.title}
                </h3>
                <div className="mb-4 border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {facility.projects.map((project, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[#b71a34] mr-2" />
                        <span className="text-gray-600">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Industry Support:</h4>
                  <p className="text-sm text-gray-600">{facility.collaborations.join(", ")}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default VishwabharatiPolytechnicHome;