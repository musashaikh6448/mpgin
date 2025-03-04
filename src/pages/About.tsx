import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  Users,
  Star,
  Shield,
  Handshake,
  GraduationCap,
} from "lucide-react";
import campusImage from "../assets/images/campus.avif"; // Add your image path
import labImage from "../assets/images/labs.avif"; // Add your image path
import studentsImage from "../assets/images/students.jpeg"; // Add your image path

const AboutUs = () => {
  const aboutContent = {
    introduction: {
      title: "About MPGI",
      content: `Matoshri Pratishthan Group of Institutions (MPGI) has been a beacon of excellence in Engineering & Management Education since 2009. Our integrated campus offers multidisciplinary programs bridging academic knowledge with industry requirements through hands-on learning and strong corporate partnerships.`,
    },
    objectives: [
      {
        title: "Academic Excellence",
        icon: <Star className="w-8 h-8 text-[#001560]" />,
        points: [
          "World-class technical education in Engineering & Management",
          "Synergetic industry-institute partnerships",
          "E-learning and e-governance initiatives",
        ],
      },
      {
        title: "Student Development",
        icon: <GraduationCap className="w-8 h-8 text-[#001560]" />,
        points: [
          "Foster entrepreneurial mindset",
          "Encourage academic collaborations",
          "Nurture innovation and creativity",
        ],
      },
      {
        title: "Faculty Growth",
        icon: <Users className="w-8 h-8 text-[#001560]" />,
        points: [
          "Continuous technical upskilling",
          "Curriculum modernization",
          "Research culture promotion",
        ],
      },
    ],
    mission: {
      title: "Our Mission",
      content: `To establish world-class institutions delivering quality education in Engineering, Management, and IT, fostering socially responsible leaders through innovative teaching and industry-aligned programs.`,
      icon: <Rocket className="w-12 h-12 text-[#b71a34]" />,
    },
    vision: {
      title: "Our Vision",
      content: `To be a global center of excellence nurturing innovation and entrepreneurship while contributing to sustainable national development through holistic, value-based education.`,
      icon: <Globe className="w-12 h-12 " />,
    },
    stats: [
      { value: "14+", label: "Years of Excellence", icon: <Shield /> },
      { value: "1500+", label: "Successful Alumni", icon: <Users /> },
      { value: "50+", label: "Industry Partners", icon: <Handshake /> },
    ],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16 mt-20">
        {/* Hero Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24 mt-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[#001560] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001560] to-[#b71a34]">
              Shaping Future Leaders
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Transforming Education Through Innovation & Industry Integration
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-4xl font-bold text-[#001560]">
              {aboutContent.introduction.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutContent.introduction.content}
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
            {aboutContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#b71a34]"
              >
                <div className="text-[#001560] mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Objectives */}
        <motion.div initial="hidden" animate="visible" className="space-y-12">
          <motion.h3
            variants={fadeIn}
            className="text-4xl font-bold text-[#001560] text-center"
          >
            Our Strategic Pillars
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.objectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover="hover"
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-[#001560] mb-6">{objective.icon}</div>
                  <h4 className="text-2xl font-bold mb-4">{objective.title}</h4>
                  <ul className="space-y-4">
                    {objective.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="flex items-start text-gray-600"
                      >
                        <div className="w-2 h-2 bg-[#b71a34] rounded-full mt-2 mr-3" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden min-h-[400px]"
          >
            <img
              src={labImage}
              alt="Lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#001560]/90 p-8 flex flex-col justify-center">
              <div className="text-[#b71a34] mb-4">
                {aboutContent.mission.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {aboutContent.mission.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {aboutContent.mission.content}
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden min-h-[400px]"
          >
            <img
              src={studentsImage}
              alt="Students"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#b71a34]/90 p-8 flex flex-col justify-center">
              <div className="text-white mb-4">{aboutContent.vision.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {aboutContent.vision.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {aboutContent.vision.content}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
