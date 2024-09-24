import { motion } from 'framer-motion';
import president from '@/assets/about/president.jpg'

const PresidentPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Meet Our President</h2>

      {/* President Image and Info Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
        {/* President Image */}
        <div className="flex-shrink-0">
          <img
            src={president}
            alt="President of BSMI"
            className="rounded-lg shadow-lg w-72 h-72 object-cover"
          />
        </div>

        {/* President Information */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">kyoshi HMNC Rana</h3>
          <p className="text-sm text-gray-500 mb-4">President of BSMI</p>
          <p className="text-gray-700 leading-relaxed">
            HMNC Rana has been the president of the Bangladesh Sports Martial Arts Institute (BSMI) for the past 10 years.
            Under his leadership, BSMI has expanded globally, promoting the values of Traditional Karate. With over 30 years of experience
            in martial arts, HMNC Rana continues to contribute to the growth of karate while upholding its traditional principles.
          </p>
        </div>
      </div>

      {/* President Message */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <h4 className="text-xl font-semibold text-gray-800">President's Message</h4>
        <p>
          “As president of BSMI, it is my honor and privilege to lead this prestigious organization. Traditional Karate represents
          not only a martial art but a way of life. Our goal is to maintain the highest standards of Karate, grounded in Budo principles,
          while making it accessible to people all over the world.”
        </p>
        <p>
          “I am committed to preserving the authenticity of Traditional Karate and ensuring that it continues to provide physical, mental,
          and spiritual benefits to practitioners of all ages. Together, we can keep the spirit of Karate alive and inspire future generations.”
        </p>
      </div>
    </motion.div>
  );
};

export default PresidentPage;
