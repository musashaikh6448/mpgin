import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  BarChart,
  DollarSign,
  Globe,
  Users,
  Award,
  BookOpenText,
  Handshake,
} from "lucide-react";
import managementHero from "../assets/images/management.jpeg";

const SchoolOfManagementHome = () => {
  // Color constants
  const colors = {
    primary: "#001560",
    secondary: "#b71a34",
    accent: "#fdf100",
  };

  const programs = [
    {
      title: "MBA Program",
      specializations: [
        "Digital Marketing",
        "Financial Analytics",
        "Operations",
      ],
      duration: "2 Years",
      intake: "180 Seats",
      accreditation: "AICTE Approved",
      icon: <Briefcase className="w-8 h-8" />,
      highlights: [
        "Harvard Case Studies",
        "Summer Internships",
        "Industry Mentorship",
      ],
    },
    {
      title: "BBA Program",
      specializations: [
        "Entrepreneurship",
        "HR Management",
        "Business Analytics",
      ],
      duration: "3 Years",
      intake: "240 Seats",
      accreditation: "NAAC A++",
      icon: <BarChart className="w-8 h-8" />,
      highlights: [
        "Startup Incubation",
        "Certification Courses",
        "Global Exposure",
      ],
    },
    {
      title: "Finance Management",
      specializations: ["Investment Banking", "Risk Management", "FinTech"],
      duration: "2 Years",
      intake: "120 Seats",
      accreditation: "CFA Partner",
      icon: <DollarSign className="w-8 h-8" />,
      highlights: ["Bloomberg Terminal Lab", "Trading Simulations", "FRM Prep"],
    },
    {
      title: "Marketing Management",
      specializations: [
        "Digital Strategy",
        "Consumer Behavior",
        "Brand Management",
      ],
      duration: "2 Years",
      intake: "150 Seats",
      accreditation: "Google Certified",
      icon: <Globe className="w-8 h-8" />,
      highlights: ["Live Projects", "Ad Agency Tie-ups", "Social Media Labs"],
    },
  ];

  const researchAreas = [
    {
      title: "Sustainable Business",
      projects: ["CSR Analytics", "Green Finance", "Ethical Marketing"],
      icon: <Handshake className="w-6 h-6" />,
      collaborations: ["UN Global Compact", "Deloitte", "PwC"],
    },
    {
      title: "Digital Transformation",
      projects: ["AI in HR", "Blockchain Finance", "Metaverse Commerce"],
      icon: <BookOpenText className="w-6 h-6" />,
      collaborations: ["Microsoft", "IBM", "TCS"],
    },
    {
      title: "Leadership Strategy",
      projects: [
        "Cross-Cultural Management",
        "Crisis Leadership",
        "Org Development",
      ],
      icon: <Users className="w-6 h-6" />,
      collaborations: ["Harvard Business Review", "McKinsey", "Korn Ferry"],
    },
    {
      title: "Economic Policy",
      projects: ["Emerging Markets", "Digital Economies", "Trade Analytics"],
      icon: <Award className="w-6 h-6" />,
      collaborations: ["World Bank", "NITI Aayog", "RBI"],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-r from-[#001560] to-[#b71a34] text-white">
        <div className="absolute inset-0">
          <img
            src={managementHero}
            alt="Management Campus"
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
              Shaping Future
              <span className="block mt-3 text-[#fdf100]">
                Business Leaders
              </span>
            </h1>
            <p className="text-lg md:text-2xl font-medium mb-8 max-w-3xl mx-auto md:mx-0">
              AACSB Accredited | 98% Placement Record | Industry-Integrated
              Curriculum
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
                Download Brochure
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
                number: "AACSB",
                text: "Global Accreditation",
              },
              {
                icon: <Users className="w-8 h-8" />,
                number: "5000+",
                text: "Alumni Network",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                number: "250+",
                text: "Recruiting Partners",
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
                <p className="mt-2 text-lg text-gray-200">{stat.text}</p>
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
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: colors.primary }}
            >
              World-Class Management Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Transformative learning experiences with global perspectives
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
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  {program.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {program.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: colors.primary,
                        color: "white",
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
      <section
        className="py-20 px-6 lg:px-8"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Cutting-Edge Business Research
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mt-4">
              Driving innovation in global business practices
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
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.primary }}
                >
                  {area.title}
                </h3>
                <div className="mb-4 border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Key Projects:
                  </h4>
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
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Collaborations:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {area.collaborations.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SchoolOfManagementHome;
