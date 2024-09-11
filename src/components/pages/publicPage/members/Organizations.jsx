import { motion } from "framer-motion";

const KarateChart = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-semibold">Karate Organization Chart</h1>
        <p className="mt-4 text-gray-400">
          Visualizing the structure of our karate dojo.
        </p>
      </div>

      {/* Karate Chart */}
      <div className="flex flex-col items-center">
        {/* Head Instructor */}
        <div className="text-center mb-12">
          <motion.div
            className="bg-gray-800 text-white py-6 px-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold">Head Instructor</h2>
            <p className="text-gray-400">Sensei John Doe</p>
          </motion.div>
        </div>

        {/* Senior Instructors */}
        <div className="flex justify-center space-x-8 mb-12">
          <motion.div
            className="bg-gray-700 text-white py-4 px-6 rounded-lg shadow-lg w-48"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold">Senior Instructor 1</h3>
            <p className="text-gray-400">Sensei Jane Smith</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 text-white py-4 px-6 rounded-lg shadow-lg w-48"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold">Senior Instructor 2</h3>
            <p className="text-gray-400">Sensei Mike Johnson</p>
          </motion.div>
        </div>

        {/* Instructors */}
        <div className="flex justify-center space-x-8 mb-12">
          <motion.div
            className="bg-gray-600 text-white py-4 px-6 rounded-lg shadow-lg w-40"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-bold">Instructor A</h4>
            <p className="text-gray-400">Sensei Alice Brown</p>
          </motion.div>
          <motion.div
            className="bg-gray-600 text-white py-4 px-6 rounded-lg shadow-lg w-40"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-bold">Instructor B</h4>
            <p className="text-gray-400">Sensei Bob White</p>
          </motion.div>
          <motion.div
            className="bg-gray-600 text-white py-4 px-6 rounded-lg shadow-lg w-40"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-bold">Instructor C</h4>
            <p className="text-gray-400">Sensei Sarah Green</p>
          </motion.div>
        </div>

        {/* Students */}
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="bg-gray-500 text-white py-4 px-6 rounded-lg shadow-lg w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h5 className="text-md font-bold">Student 1</h5>
            <p className="text-gray-400">Tom</p>
          </motion.div>
          <motion.div
            className="bg-gray-500 text-white py-4 px-6 rounded-lg shadow-lg w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h5 className="text-md font-bold">Student 2</h5>
            <p className="text-gray-400">Lisa</p>
          </motion.div>
          <motion.div
            className="bg-gray-500 text-white py-4 px-6 rounded-lg shadow-lg w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h5 className="text-md font-bold">Student 3</h5>
            <p className="text-gray-400">Jake</p>
          </motion.div>
          <motion.div
            className="bg-gray-500 text-white py-4 px-6 rounded-lg shadow-lg w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h5 className="text-md font-bold">Student 4</h5>
            <p className="text-gray-400">Anna</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KarateChart;
