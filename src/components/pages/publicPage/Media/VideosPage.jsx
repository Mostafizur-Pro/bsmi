import { motion } from "framer-motion";

const VideosPage = () => {
  const videos = [
    { id: 1, title: "Karate Training - Basics", url: "https://www.youtube.com/embed/QvA7ehHKp0w" },
    { id: 2, title: "Karate Masterclass", url: "https://www.youtube.com/embed/gRqeVem9h0c" },
    { id: 3, title: "Advanced Karate Techniques", url: "https://www.youtube.com/embed/sUlyTOWpV-w" },
    { id: 4, title: "Martial Arts Training", url: "https://www.youtube.com/embed/W-rFtpEDiJ8" },
    { id: 5, title: "Karate Competition Highlights", url: "https://www.youtube.com/embed/O7YKl43ppW4" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">Karate & Martial Arts Videos</h1>
        <p className="mt-4 text-gray-500">
          Watch the best training sessions and competitions from the world of Karate.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <iframe
              width="100%"
              height="250"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-white text-lg font-bold">{video.title}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideosPage;
