import { motion } from "framer-motion";

const ResultsPage = () => {
  const results = [
    {
      id: 1,
      title: "Midterm Exam Results",
      date: "October 15, 2024",
      description: "Results from the midterm exams for the current semester.",
      link: "/results/midterm-exams"
    },
    {
      id: 2,
      title: "Final Exam Results",
      date: "December 20, 2024",
      description: "Comprehensive results from the final exams of the academic year.",
      link: "/results/final-exams"
    },
    {
      id: 3,
      title: "Quarterly Performance Reports",
      date: "November 10, 2024",
      description: "Performance evaluations and feedback for the recent quarter.",
      link: "/results/quarterly-reports"
    }
  ];

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Student Results Overview
          </motion.h1>
          <motion.p
            className="mt-4 text-lg "
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore the latest academic results and performance reports for students.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result) => (
            <motion.div
              key={result.id}
              className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * result.id }}
            >
              <h2 className="text-2xl font-semibold ">{result.title}</h2>
              <p className="mt-2 "><strong>Date:</strong> {result.date}</p>
              <p className="mt-2 ">{result.description}</p>
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
