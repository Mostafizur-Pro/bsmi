import { motion } from "framer-motion";

const contactInfo = [
  {
    title: "Contact Us 24/7",
    detail: "+1-202-555-0140",
  },
  {
    title: "Address",
    detail: "Season Street 45/2\nLos Angeles, Inc - 4502",
  },
  {
    title: "Working Hours",
    detail: "Daily: 9am - 8pm",
  },
];

const HeroContact = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p className="text-red-400 font-semibold text-lg mb-2">{info.title}</p>
              <h1 className="text-white text-xl font-bold">{info.detail}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
