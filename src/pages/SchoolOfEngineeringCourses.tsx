import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpenCheck,
  Cpu,
  Factory,
  HardHat,
  CircuitBoard,
  Briefcase,
} from "lucide-react";

const SchoolOfEngineeringCourses = () => {
  const undergraduatePrograms = [
    { name: "Civil Engineering", intake: "60", code: "211619110" },
    { name: "Computer Science & Eng.", intake: "60", code: "211624210" },
    { name: "Electrical Engineering", intake: "60", code: "211629310" },
    { name: "Mechanical Engineering", intake: "60", code: "211661210" },
    { name: "Silk Technology", intake: "30", code: "211692310" },
    { name: "Electrical & Electronic Eng.", intake: "30", code: "211629710" },
  ];

  const postgraduatePrograms = [
    { name: "Computer Science & Eng.", intake: "24", code: "211624210" },
    { name: "Mechanical Engineering", intake: "24", code: "211661210" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-red-700 text-white py-24 flex items-center h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Engineering Programs
            <span className="block text-yellow-300 mt-3">At MPGIN</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            NAAC A++ Accredited | NBA Approved Programs | Industry-Aligned
            Curriculum
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="w-12 h-12 text-red-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                About School Of Engineering
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Matoshri Pratishthan School of Engineering offers full time four
              years Bachelor's Degree in Engineering approved by the All India
              Council for Technical Education (AICTE), New Delhi and sanctioned
              by Govt. of Maharashtra (DTE) and affiliated to DR BABA SAHEB
              AMBEDKAR TECHNOLOGICA UNIVERSITY LONERE (BATU). Courses offered in
              Bachelor of Civil Engineering, Computer Science Engineering,
              Mechanical Engineering, Electronics and Electrical Engineering.{" "}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-12 h-12 text-red-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Undergraduate Programs (B.Tech)
              </h2>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="w-full min-w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Program</th>
                    <th className="px-6 py-4 text-left">Intake</th>
                    <th className="px-6 py-4 text-left">DTE Code</th>
                  </tr>
                </thead>
                <tbody>
                  {undergraduatePrograms.map((program, index) => (
                    <motion.tr
                      key={index}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="hover:bg-gray-100 transition-colors even:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium">{program.name}</td>
                      <td className="px-6 py-4">{program.intake}</td>
                      <td className="px-6 py-4">{program.code}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 "
            >
              {[
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Industry Connect",
                  text: "6-month mandatory industry internship",
                },
                {
                  icon: <CircuitBoard className="w-8 h-8" />,
                  title: "Lab Facilities",
                  text: "15+ advanced research laboratories",
                },
                {
                  icon: <HardHat className="w-8 h-8" />,
                  title: "Certifications",
                  text: "Integrated skill development programs",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-700 my-16"
                >
                  <div className="text-red-700 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Postgraduate Programs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8 mt-16">
              <BookOpenCheck className="w-12 h-12 text-red-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Postgraduate Programs (M.Tech)
              </h2>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="w-full min-w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Program</th>
                    <th className="px-6 py-4 text-left">Intake</th>
                    <th className="px-6 py-4 text-left">DTE Code</th>
                  </tr>
                </thead>
                <tbody>
                  {postgraduatePrograms.map((program, index) => (
                    <motion.tr
                      key={index}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="hover:bg-gray-100 transition-colors even:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium">{program.name}</td>
                      <td className="px-6 py-4">{program.intake}</td>
                      <td className="px-6 py-4">{program.code}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Research Focus",
                  text: "Thesis work with industry collaboration",
                },
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: "Doctoral Pathway",
                  text: "Direct PhD admission opportunities",
                },
                {
                  icon: <BookOpenCheck className="w-8 h-8" />,
                  title: "Publications",
                  text: "Support for international journal publications",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-700 my-16"
                >
                  <div className="text-red-700 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Value-Added Certifications
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Industry-recognized certifications integrated with degree programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "AutoCAD Professional Certification",
              "Six Sigma Green Belt",
              "IoT Specialist Program",
              "Advanced CNC Programming",
              "PEB Design Certification",
              "Solar Energy Technician",
            ].map((certification, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-300" />
                  <h3 className="text-lg font-semibold">{certification}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Start Your Engineering Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Admissions open for 2024-25 academic year
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 text-white px-8 py-4 rounded-full font-semibold"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SchoolOfEngineeringCourses;
