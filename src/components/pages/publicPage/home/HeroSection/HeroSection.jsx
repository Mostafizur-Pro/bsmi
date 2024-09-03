import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <Carousel className="relative w-full">
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative"
              >
                <motion.img
                  src={image.src}
                  alt={image.caption}
                  className="object-cover w-full h-[500px] md:h-[600px] transition-transform duration-700 ease-in-out"
                  style={{ transformOrigin: "center" }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  exit={{ scale: 1 }}
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all" />
      </Carousel>
    </div>
  );
};

export default HeroSection;
