import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section className="relative py-16 text-white">
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/936261220/photo/karate-students-training-together.jpg?s=1024x1024&w=is&k=20&c=H7XtVohsYZG51UNrKP8_tP1W2L_4dfGgfzGvH4bYlFc="
          alt="Martial Arts Training"
          className="object-cover w-full h-full opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <motion.img
              src="https://media.istockphoto.com/id/472047287/photo/aikido-throwing-technique.jpg?s=1024x1024&w=is&k=20&c=-F1Oda1n9Zl_y5sxYFx3iRKrMZPLLJ4DkVKl7aRjCEw="
              alt="Martial Arts"
              className="rounded-lg shadow-lg"
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
              About <span className="text-red-700">Fight</span> School
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-lg mb-4"
            >
              Fight School has specialized in martial arts since 1986 and has
              one of the most innovative programs in the nation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-lg mb-4"
            >
              We teach martial arts because we love it — not because we want to
              make money on you. Unlike other martial arts schools, we do not
              require you to sign long term contracts. You just pay one low
              monthly fee for your martial arts and self-defense classes at the
              beginning of each month.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="text-lg"
            >
              <strong>Aiden Richards</strong> - Director / Instructor
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
