import { motion } from "framer-motion";
import { ChevronRight, Building2, GraduationCap, School } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    {
      title: "Vishwabharti Polytechnic Institute",
      code: "DTE CODE- 2194",
      content: `Matoshri Pratisthan Vishwabharti Polytechnic Institute was founded on the basic principle of serving the society, to provide affordable and quality education to the students and paves way for a wider variety of career options. The Institute aims to grow as one of the largest educational complexes in Nanded and around Marathwada Region.`,
      color: "#001560",
      icon: <School className="w-8 h-8 text-[#b71a34]" />,
      route: "/vishwabharati-polytechnic-institute/home",
    },
    {
      title: "School Of Management",
      code: "DTE CODE- 2116",
      content: `The School of Management of Matoshri Pratishthan Group of Institutions offers two years postgraduate program in Business Administration with specialization in Marketing Management Finance, Human Resource Management, I.T. and Banking. The School is affiliated to Swami Ramanand Teerth Marathwada University Nanded and approved by AICTE, Govt. of Maharashtra. The Department of Management Studies of MPGI was set-up in 2009 with an objective of grooming young and aspiring professional to mould the future of the country.`,
      color: "#b71a34",
      icon: <Building2 className="w-8 h-8 text-[#001560]" />,
      route: "/school-of-management/home",
    },
    {
      title: "School Of Engineering",
      code: "DTE CODE- 2116",
      content: `Matoshri Pratishthan School of Engineering offers full time four years Bachelor's Degree in Engineering approved by the All India Council for Technical Education (AICTE), New Delhi and sanctioned by Govt. of Maharashtra (DTE) and affiliated to DR BABA SAHEB AMBEDKAR TECHNOLOGICA UNIVERSITY LONERE (BATU). Courses offered in Bachelor of Civil Engineering, Computer Science Engineering, Mechanical Engineering, Electronics and Electrical Engineering.`,
      color: "#001560",
      icon: <GraduationCap className="w-8 h-8 text-[#b71a34]" />,
      route: "/school-of-engineering/home",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#001560] mb-12 text-center"
        ></motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24 mt-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[#001560] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001560] to-[#b71a34]">
              Our Academic Departments
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed"></p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group relative h-full"
              onClick={() => navigate(dept.route)}
            >
              <div
                className="p-8 border-l-4 h-full flex flex-col"
                style={{ borderColor: dept.color }}
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                      {dept.title}
                    </h2>
                    <p className="text-[#b71a34] font-semibold text-sm mb-4">
                      {dept.code}
                    </p>
                  </div>
                  <div className="ml-4 mt-1 bg-gray-100 p-2 rounded-lg">
                    {dept.icon}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 ">
                  {dept.content}
                </p>

                <div className="mt-auto flex items-center text-[#001560] group-hover:text-[#b71a34] transition-colors">
                  <span className="font-semibold">Explore Department</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-[#001560] to-[#0a2463] rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Why Choose MPGI?
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start bg-white/5 p-4 rounded-xl">
                <div className="w-3 h-3 bg-[#b71a34] rounded-full mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-xl mb-2">
                    AICTE Approved Programs
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    All courses recognized by statutory bodies with
                    national-level accreditation
                  </p>
                </div>
              </li>
              <li className="flex items-start bg-white/5 p-4 rounded-xl">
                <div className="w-3 h-3 bg-[#b71a34] rounded-full mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-xl mb-2">
                    Industry-Aligned Curriculum
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    Regularly updated programs developed in collaboration with
                    industry leaders
                  </p>
                </div>
              </li>
              <li className="flex items-start bg-white/5 p-4 rounded-xl">
                <div className="w-3 h-3 bg-[#b71a34] rounded-full mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-xl mb-2">
                    Modern Infrastructure
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    State-of-the-art labs, smart classrooms, and advanced
                    research facilities
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Departments;
