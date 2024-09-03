import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

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
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="p-1"
              >
                <Card className="shadow-lg">
                  <CardContent
                    className="flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px]"
                    style={{
                      backgroundImage: `url(${image.src})`,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                      className="bg-black bg-opacity-50 text-white p-4 rounded-lg"
                    >
                      <h2 className="text-2xl md:text-4xl font-bold">
                        {image.caption}
                      </h2>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition-all" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition-all" />
      </Carousel>
    </div>
  );
};

export default HeroSection;
