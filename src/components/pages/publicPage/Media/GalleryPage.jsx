import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=700&q=80",
  ];

  return (
    <section className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-semibold ">
          Our Beautiful Gallery
        </h1>
        <p className="mt-4 ">
          A collection of peaceful and stunning visuals, curated just for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Button
                className="text-white bg-purple-600 hover:bg-purple-700 rounded-full px-4 py-2"
                onClick={() => setSelectedImage(src)}
              >
                View Image
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            className="max-w-3xl max-h-screen object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default GalleryPage;
