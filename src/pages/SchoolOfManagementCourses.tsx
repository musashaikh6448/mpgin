import { motion } from "framer-motion";
import {
  Briefcase,
  BookOpenCheck,
  DollarSign,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

const SchoolOfManagementCourses = () => {
  const managementPrograms = [
    { name: "Marketing Management", intake: "120", code: "211610110" },
    { name: "Financial Management" },
    { name: "Human Resource Management" },
    { name: "IT & Banking Management"},
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
            Management Programs
            <span className="block text-yellow-300 mt-3">At MPGIN</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            AICTE Approved | SRTMU Affiliated | Industry-Aligned Curriculum
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-yellow-300 text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
          >
            Explore Programs <ArrowRight size={20} />
          </motion.button>
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
                About School of Management
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              The School of Management of Matoshri Pratishthan Group of
              Institutions offers a two-year postgraduate program in Business
              Administration with specializations in Marketing Management,
              Finance, Human Resource Management, IT, and Banking. Established
              in 2009, the department is affiliated to Swami Ramanand Teerth
              Marathwada University, Nanded, and approved by AICTE, Govt. of
              Maharashtra. Our mission is to groom young and aspiring
              professionals to shape the future of the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Management Programs */}
      <section className="py-20 px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <BookOpenCheck className="w-12 h-12 text-red-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Postgraduate Programs (MBA)
              </h2>
            </div>

            {/* Program Table */}
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="w-full min-w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Specialization</th>
                    <th className="px-6 py-4 text-left">Intake</th>
                    <th className="px-6 py-4 text-left">DTE Code</th>
                  </tr>
                </thead>
                <tbody>
                  {managementPrograms.map((program, index) => (
                    <motion.tr
                      key={index}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="hover:bg-gray-200 transition-colors even:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium">{program.name}</td>
                      <td className="px-6 py-4">{program.intake}</td>
                      <td className="px-6 py-4 font-mono">{program.code}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Program Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Financial Expertise",
                  text: "Advanced training in financial analysis and management",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "HR Development",
                  text: "Focus on talent acquisition and organizational behavior",
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Marketing",
                  text: "Strategies for international market penetration",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-700"
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
      <section className="py-20 px-6 lg:px-8 bg-blue-900 text-white">
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
              "Digital Marketing Certification",
              "Financial Modeling & Valuation",
              "HR Analytics",
              "Business Analytics",
              "Supply Chain Management",
              "Entrepreneurship Development",
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
              Start Your Management Journey
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

export default SchoolOfManagementCourses;
