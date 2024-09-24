import { motion } from "framer-motion";
import LogoImage from '@/assets/logo/logo.png'

const HeroAbout = () => {
  return (
    <section className="relative py-16 ">
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <motion.img
              src={LogoImage}
              alt="Martial Arts"

              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 mt-8 md:mt-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold mb-4"
            >
              BANGLADESH SPORT MARTIAL ARTS INSTITUTE (BSMI)
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-lg mb-4"
            >
              It is the world governing body for Traditional Karate. The ITKF
              intends, by popularizing and developing Traditional Karate in the
              proper direction and by promoting and strengthening friendly
              relations among its member organizations and their members in all
              countries, to achieve the advancement of world sports and Budo
              spirit and thereby contribute to the perfection of human
              character. The Mission of the ITKF is to protect the original
              Traditional Karate based on the foundation of Budo. Its goal is to
              maintain the concept of human development through Traditional
              Karate training.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="text-lg"
            >
              <strong>Aiden Richards</strong> - Director / Instructor
            </motion.p>

            {/* Animated About Us Button */}
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-6 py-3 text-lg font-bold bg-red-700 hover:bg-red-600 text-white rounded-lg shadow-md"
              transition={{ duration: 0.3 }}
            >
              ABOUT US
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
