import { motion } from "framer-motion";

const ResultsPage = () => {
  const results = [
    {
      id: 1,
      title: "Karate Tournament Results",
      date: "October 15, 2024",
      description: "Results from the latest karate tournament showcasing the top performers.",
      link: "/results/karate-tournament"
    },
    {
      id: 2,
      title: "Annual Karate Championship Results",
      date: "December 20, 2024",
      description: "Detailed results from the annual karate championship event.",
      link: "/results/annual-championship"
    },
    {
      id: 3,
      title: "Training Camp Evaluations",
      date: "November 10, 2024",
      description: "Evaluation results and feedback from the recent training camp.",
      link: "/results/training-camp"
    }
  ];

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Results Overview
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore the latest results and detailed reports from our events and evaluations.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result) => (
            <motion.div
              key={result.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * result.id }}
            >
              <h2 className="text-2xl font-semibold text-gray-800">{result.title}</h2>
              <p className="mt-2 text-gray-600"><strong>Date:</strong> {result.date}</p>
              <p className="mt-2 text-gray-700">{result.description}</p>
              <a
                href={result.link}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsPage;
