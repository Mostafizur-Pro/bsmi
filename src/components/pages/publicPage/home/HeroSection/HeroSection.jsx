import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroImages = [
  {
    src: "https://media.istockphoto.com/id/472047287/photo/aikido-throwing-technique.jpg?s=1024x1024&w=is&k=20&c=-F1Oda1n9Zl_y5sxYFx3iRKrMZPLLJ4DkVKl7aRjCEw=",
    caption: "Master the Art of Karate",
  },
  {
    src: "https://media.istockphoto.com/id/473565488/photo/fight-between-two-aikido-fighters.jpg?s=1024x1024&w=is&k=20&c=nebzCOPUusTOCm-jvxC9-3xvKWca26PwXcg3pMl_ZVE=",
    caption: "Strength Through Discipline",
  },
  {
    src: "https://media.istockphoto.com/id/472552816/photo/two-aikido-fighters.jpg?s=1024x1024&w=is&k=20&c=DRDyOthom0_WXm--wihVytRiYTCpFNsqc0qo4UCLKsg=",
    caption: "Focus and Precision",
  },
  {
    src: "https://media.istockphoto.com/id/686610728/photo/little-children-martial-arts-fighters.jpg?s=1024x1024&w=is&k=20&c=XWRMK4ncSDipiJZKOAk-xmIZdqUq33rFoPG82MZxsCA=",
    caption: "Achieve Inner Balance",
  },
  {
    src: "https://media.istockphoto.com/id/613013690/photo/children-martial-arts-fighters.jpg?s=1024x1024&w=is&k=20&c=Ht4zDZxslzSzupcdve5klnSZGjbS0dXSnT4cvVXEk5M=",
    caption: "Empower Your Spirit",
  },
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
