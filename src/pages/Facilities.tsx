import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/images/campus.avif";
import img2 from "../assets/images/e-Library.jpg";

// Enhanced Facilities Data
const facilities = [
  {
    title: "Sports Facilities",
    content:
      "The students of MPGI are provided with excellent facilities and encouraged to take part in tournaments. The campus promotes sports activities to inculcate a healthy sportsman spirit among students. A well-laid playground is available for outdoor sports activities like Cricket, Volleyball, Chess, Carom, Basketball, Badminton, and Football.",
    image: img1,
    color: "#b71a34",
    additionalDetails: {
      indoorFacilities: ["Table Tennis", "Chess", "Carrom"],
      outdoorFacilities: ["Cricket", "Volleyball", "Basketball", "Badminton"],
    },
  },
  {
    title: "Hostel Facility",
    content:
      "The institute provides comfortable, clean, and safe hostel accommodation with requisite amenities and mess facilities for about 120 boys and 60 girls within the campus. Each hostel has an internal mess and water purifier on RO technology.",
    image: img2,
    color: "#001560",
    additionalDetails: {
      capacity: "180 students",
      amenities: ["Wi-Fi", "24/7 Security", "RO Water Purifiers", "Laundry"],
    },
  },
  {
    title: "Canteen & Mess",
    content:
      "The Campus has a spacious Canteen functioning inside the campus for providing quality catering facilities for the students and staff at moderate rates. Students, faculty members, and office staff can enjoy quality and delicious food.",
    image: img1,
    color: "#b71a34",
    additionalDetails: {
      menuOptions: ["Vegetarian", "Non-Vegetarian", "Snacks"],
      timings: "7 AM - 9 PM",
    },
  },
  {
    title: "Transportation",
    content:
      "Transportation facility is available from campus to city for students, staff, and faculty. MPGI's transport unit has its own buses that run regularly between the campus and selected points in the city, covering all areas according to the schedule issued from time to time.",
    image: img2,
    color: "#001560",
    additionalDetails: {
      routes: ["City Center", "Railway Station", "Bus Stand"],
      frequency: "Every 30 minutes",
    },
  },
  {
    title: "Computing Facility",
    content:
      "MPGI has a state-of-the-art centralized computer center with 250 computers featuring Core 2 Duo processors and LCD Monitors. The lab is equipped with printers, scanners, and provides varied computing environments for students.",
    image: img1,
    color: "#b71a34",
    additionalDetails: {
      software: ["MATLAB", "AutoCAD", "Python IDEs"],
      hardware: ["Core 2 Duo PCs", "LCD Monitors", "Printers", "Scanners"],
    },
  },
  {
    title: "Language Lab",
    content:
      "Language Lab with specialized software to develop soft skills and improve communication. Trains students in pronunciation, accent, intonation, and different variations in English expressions for global economic environments.",
    image: img2,
    color: "#001560",
    additionalDetails: {
      software: ["Rosetta Stone", "Tell Me More"],
      features: ["Pronunciation Training", "Accent Neutralization"],
    },
  },
  {
    title: "Central Library",
    content:
      "The academic heart of campus with over 26,000 books, seating for 300 users, and research facilities. Features include a reading hall for 150 students, updated collections, and support for teaching-learning activities.",
    image: img1,
    color: "#b71a34",
    additionalDetails: {
      books: "26,000+ Titles",
      digitalResources: ["Journals", "E-Books", "Research Papers"],
    },
  },
  {
    title: "Night Library",
    content:
      "Special section with 200+ unique titles covering Engineering, Management, and Polytechnic fields. Open to all students and faculty with borrowing facilities according to institute rules.",
    image: img2,
    color: "#001560",
    additionalDetails: {
      operatingHours: "8 PM - 6 AM (During Exams)",
      specialFeatures: ["Quiet Study Zones", "Group Discussion Rooms"],
    },
  },
];

// Facility Card Component
const FacilityCard = ({
  facility,
  index,
}: {
  facility: (typeof facilities)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`flex flex-col ${
      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
    } gap-8 mb-20 lg:mb-28`}
  >
    {/* Image Section */}
    <div className="lg:w-1/2 relative group overflow-hidden rounded-3xl shadow-2xl">
      <motion.img
        src={facility.image}
        alt={facility.title}
        className="w-full h-96 object-cover transform transition-all duration-700 group-hover:scale-110"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 rounded-3xl border-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: facility.color }}
      />
    </div>

    {/* Content Section */}
    <div className="lg:w-1/2 flex flex-col justify-center px-4 lg:px-8">
      <motion.h2
        style={{ color: facility.color }}
        className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight"
      >
        {facility.title}
      </motion.h2>
      <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 font-medium">
        {facility.content}
      </p>
      {/* Additional Details */}
      <div className="space-y-4 text-gray-700">
        {Object.entries(facility.additionalDetails).map(([key, value]) => (
          <div key={key} className="flex gap-2 items-center">
            <span className="font-bold">
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </span>
            <span>{Array.isArray(value) ? value.join(", ") : value}</span>
          </div>
        ))}
      </div>
      {/* Explore Button */}
      <motion.button
        whileHover={{ x: 15, backgroundColor: facility.color }}
        className="flex items-center gap-3 w-fit px-6 py-3 mt-6 rounded-xl transition-colors hover:text-white"
        style={{
          border: `2px solid ${facility.color}`,
        }}
      >
        <span className="font-semibold text-lg">Explore More</span>
        <ArrowRight size={22} />
      </motion.button>
    </div>
  </motion.div>
);

// Main Facilities Component
export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24 mt-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[#001560] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001560] to-[#b71a34]">
              Campus Facilities
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Experience state-of-the-art amenities crafted to foster innovation,
            wellness, and academic excellence in a vibrant learning environment.
          </p>
        </motion.div>

        {/* Facility Cards */}
        <div className="space-y-20 lg:space-y-32">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.title}
              facility={facility}
              index={index}
            />
          ))}
        </div>

        {/* Central & Night Library Highlight Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mt-20 lg:mt-32 bg-gradient-to-br from-[#001560] to-[#b71a34] p-8 lg:p-12 rounded-4xl text-white overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Central & Night Library
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed font-medium opacity-90">
              Our dual-library system offers 26,000+ academic resources with
              24/7 access during exams. Features include digital archives, group
              study pods, and a dedicated research wing with 200+ specialized
              titles.
            </p>
            <div className="flex gap-4 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-[#001560] rounded-lg font-semibold flex items-center gap-2"
              >
                Virtual Tour <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
          <div className="relative h-96 lg:h-auto rounded-3xl overflow-hidden shadow-xl">
            <img
              src={img2}
              alt="Library"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
