import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import slider1 from '@/assets/home/slider/slider1.jpg'
import slider2 from '@/assets/home/slider/slider2.jpg'
import slider3 from '@/assets/home/slider/slider3.jpg'

const heroImages = [
  {
    src: slider1,
    caption: "Bangladesh Sport Martial Arts Institute",
    caption1: "It is the world governing body for Traditional Karate",
  },
  {
    src: slider2,
    caption: "Bangladesh Sport Martial Arts Institute",
    caption1: "It is the world governing body for Traditional Karate",
  },
  {
    src: slider3,
    caption: "Bangladesh Sport Martial Arts Institute",
    caption1: "It is the world governing body for Traditional Karate",
  },
  // {
  //   src: "https://media.istockphoto.com/id/686610728/photo/little-children-martial-arts-fighters.jpg?s=1024x1024&w=is&k=20&c=XWRMK4ncSDipiJZKOAk-xmIZdqUq33rFoPG82MZxsCA=",
  //   caption: "Achieve Inner Balance",
  // },
  // {
  //   src: "https://media.istockphoto.com/id/613013690/photo/children-martial-arts-fighters.jpg?s=1024x1024&w=is&k=20&c=Ht4zDZxslzSzupcdve5klnSZGjbS0dXSnT4cvVXEk5M=",
  //   caption: "Empower Your Spirit",
  // },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1); // Moving forward
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrevious = () => {
    setDirection(-1); // Moving backward
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div className="relative w-full h-[500px] md:h-[600px]">
        <AnimatePresence initial={false} custom={direction}>
          {heroImages.map((image, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                custom={direction}
                initial={{ x: direction > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? "-100%" : "100%" }}
                transition={{ duration: 1 }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-black bg-opacity-60 text-white p-6 rounded-lg"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-red-700">{image.caption}</h2>
                    <p className="text-xl md:text-2xl font-bold text-red-700">{image.caption}</p>
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
