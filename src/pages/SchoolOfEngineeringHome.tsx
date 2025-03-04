import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Microscope,
  Factory,
  Cpu,
  BookOpenCheck,
  Briefcase,
  Users,
  Award,
} from "lucide-react";
import homeImg from "../assets/images/homeimage.avif";

const SchoolOfEngineeringHome = () => {
  // Color constants
  const colors = {
    primary: "#001560",
    secondary: "#b71a34",
    accent: "#fdf100"
  };

  const programs = [
    {
      title: "Computer Science & Engineering",
      specializations: ["Artificial Intelligence", "Cybersecurity", "Data Science"],
      duration: "4 Years",
      intake: "120 Seats",
      accreditation: "NBA Accredited",
      icon: <Cpu className="w-8 h-8" />,
      highlights: ["Industry-certified labs", "Hackathon mentorship", "Cisco networking academy"]
    },
    {
      title: "Mechanical Engineering",
      specializations: ["Robotics & Automation", "Thermal Engineering", "Mechatronics"],
      duration: "4 Years",
      intake: "90 Seats",
      accreditation: "ISO 9001 Certified",
      icon: <Factory className="w-8 h-8" />,
      highlights: ["CAD/CAM Center", "Advanced prototyping lab", "SAE collaborations"]
    },
    {
      title: "Electrical Engineering",
      specializations: ["Smart Grid Systems", "Renewable Energy", "Industrial IoT"],
      duration: "4 Years",
      intake: "75 Seats",
      accreditation: "NAAC A++",
      icon: <BookOpenCheck className="w-8 h-8" />,
      highlights: ["Siemens certified labs", "Power systems simulation", "Industry internships"]
    },
    {
      title: "Civil Engineering",
      specializations: ["Structural Design", "Environmental Engineering", "Transportation Systems"],
      duration: "4 Years",
      intake: "60 Seats",
      accreditation: "COA Approved",
      icon: <GraduationCap className="w-8 h-8" />,
      highlights: ["BIM training center", "Materials testing lab", "GIS applications"]
    },
  ];

  const researchAreas = [
    {
      title: "Advanced Materials Engineering",
      projects: ["Nanocomposites", "3D Printing Materials", "Corrosion Resistance"],
      icon: <Microscope className="w-6 h-6" />,
      collaborations: ["DRDO", "TATA Steel", "HAL"]
    },
    {
      title: "Sustainable Energy Systems",
      projects: ["Solar Cell Efficiency", "Wind Farm Optimization", "Smart Grid Tech"],
      icon: <Briefcase className="w-6 h-6" />,
      collaborations: ["Siemens", "ABB", "NTPC"]
    },
    {
      title: "Robotics & AI",
      projects: ["Industrial Automation", "Computer Vision", "Drone Swarms"],
      icon: <Cpu className="w-6 h-6" />,
      collaborations: ["Bosch", "FANUC", "IBM"]
    },
    {
      title: "Smart Infrastructure",
      projects: ["IoT-enabled Cities", "Green Buildings", "Disaster-resistant Structures"],
      icon: <Factory className="w-6 h-6" />,
      collaborations: ["L&T", "AECOM", "Jacobs"]
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-r from-[#001560] to-[#b71a34] text-white">
        <div className="absolute inset-0">
          <img
            src={homeImg}
            alt="Campus Overview"
            className="w-full h-full object-cover opacity-20"
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
              Engineering Excellence at{" "}
              <span className="text-[#fdf100]">Matoshni Pratishthan</span>
            </h1>
            <p className="text-lg md:text-2xl font-medium mb-8 max-w-3xl mx-auto md:mx-0">
              NAAC A++ Accredited | 35+ Years of Legacy | 95% Placement Record
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
                Schedule Campus Tour
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
                icon: <Award className="w-8 h-8" />,
                number: "NAAC A++", 
                text: "Institutional Accreditation" 
              },
              { 
                icon: <Users className="w-8 h-8" />,
                number: "1500+", 
                text: "Active Students" 
              },
              { 
                icon: <Briefcase className="w-8 h-8" />,
                number: "95%", 
                text: "Placement Success 2023" 
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

      {/* Academic Programs */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>
              Premier Engineering Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Industry-aligned curriculum with global certification pathways
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

      {/* Research & Innovation */}
      <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Cutting-Edge Research Initiatives
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mt-4">
              Collaborative research with industry and government organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4 text-[#b71a34]">{area.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>
                  {area.title}
                </h3>
                <div className="mb-4 border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Projects:</h4>
                  <ul className="space-y-2">
                    {area.projects.map((project, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[#b71a34] mr-2" />
                        <span className="text-gray-600">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Collaborations:</h4>
                  <p className="text-sm text-gray-600">{area.collaborations.join(", ")}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SchoolOfEngineeringHome;