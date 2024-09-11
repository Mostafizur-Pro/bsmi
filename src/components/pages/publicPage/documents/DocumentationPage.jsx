import { motion } from "framer-motion";
import { useState } from "react";

const documents = [
  {
    id: 1,
    title: "Introduction to Karate",
    url: "/docs/karate-intro.pdf", // Replace with the actual path to your PDF files
  },
  {
    id: 2,
    title: "Advanced Techniques in Karate",
    url: "/docs/karate-advanced.pdf",
  },
  {
    id: 3,
    title: "Karate Belt Progression Guide",
    url: "/docs/karate-belt-guide.pdf",
  },
  {
    id: 4,
    title: "Martial Arts Philosophy",
    url: "/docs/martial-arts-philosophy.pdf",
  },
];

const DocumentationPage = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-semibold ">Documentation</h1>
        <p className="mt-4 ">Explore our documents and guides. Click to view or download the PDFs.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {documents.map((doc) => (
          <motion.div
            key={doc.id}
            className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedDoc(doc.url)}
          >
            <h3 className="text-lg font-bold ">{doc.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedDoc && (
        <div className="fixed inset-0  bg-opacity-70 flex items-center justify-center">
          <motion.div
            className="bg-white rounded-lg p-6 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-2 right-2 bg-red-400 p-2 rounded-md"
              onClick={() => setSelectedDoc(null)}
            >
              ✖ Close
            </button>
            <iframe
              src={selectedDoc}
              width="600"
              height="800"
              className="border-2 border-gray-200 rounded-lg"
              title="Document Viewer"
            ></iframe>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default DocumentationPage;
