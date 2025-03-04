import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/homeimage.avif";
import React, { useState } from "react";

// Gallery Data
const galleryItems = [
  {
    image: img1,
    title: "Annual Sports Day",
    category: "Sports",
    cols: 1,
  },
  {
    image: img1,
    title: "Tech Fest 2023",
    category: "Events",
    cols: 2,
  },
  {
    image: img1,
    title: "Cultural Night",
    category: "Cultural",
    cols: 1,
  },
  {
    image: img1,
    title: "Workshop Sessions",
    category: "Academics",
    cols: 1,
  },
  {
    image: img1,
    title: "Campus Tour",
    category: "Campus",
    cols: 2,
  },
  {
    image: img1,
    title: "Lab Activities",
    category: "Academics",
    cols: 1,
  },
];

// Gallery Component
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close popup on Esc key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50  ">
        <div className="max-w-7xl mx-auto mt-10">
          {/* Title */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24 mt-10"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#001560] mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001560] to-[#b71a34]">
                Our Memories
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Capturing moments of innovation, creativity, and academic
              excellence
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={item.title}
                item={item}
                index={index}
                onClick={() => setSelectedImage(item.image)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)} // Close on click outside
          >
            <motion.img
              src={selectedImage}
              alt="Popup"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg cursor-pointer"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Gallery Item Component
const GalleryItem = ({
  item,
  index,
  onClick,
}: {
  item: any;
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group relative cursor-pointer col-span-1 md:col-span-${item.cols} h-[400px] overflow-hidden rounded-2xl shadow-lg`}
    onClick={onClick} // Open popup on click
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#001560] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="text-[#b71a34] font-medium">{item.category}</p>
    </div>

    {/* Image */}
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
    />
  </motion.div>
);
