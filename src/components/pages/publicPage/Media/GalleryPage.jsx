import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactPage from "../contact/ContactPage";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://itkf.global/wp-content/uploads/2022/11/316409619_586201280173854_8111533884636537768_n.jpg",
    "https://itkf.global/wp-content/uploads/2020/06/DSC_6037-scaled.jpg",
    "https://itkf.global/wp-content/uploads/2022/11/316408771_584781270315855_51997059554489535_n.jpg",
    "https://itkf.global/wp-content/uploads/2020/06/DSC_6035-scaled.jpg",
    "https://itkf.global/wp-content/uploads/2022/11/316323470_584781083649207_2613323817544306435_n.jpg",
    "https://itkf.global/wp-content/uploads/2022/11/316406820_584781160315866_1119411055911158680_n.jpg",
    "https://itkf.global/wp-content/uploads/2020/06/DSC_6049-scaled.jpg",
    "https://itkf.global/wp-content/uploads/2020/06/DSC_6031-scaled.jpg",
    "https://itkf.global/wp-content/uploads/2020/06/DSC_6031-scaled.jpg",
    "https://itkf.global/wp-content/uploads/2022/11/316280032_583855163741799_969362008448922681_n.jpg",
    "https://itkf.global/wp-content/uploads/2022/11/316274999_584781096982539_2409614666472097286_n.jpg",

    "https://itkf.global/wp-content/uploads/2022/11/316174820_583854903741825_8692695542683444379_n.jpg",
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
      <ContactPage />
    </section>
  );
};

export default GalleryPage;
