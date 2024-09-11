import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image */}
        <div className="relative mb-12">
          <img
            src="https://images.unsplash.com/photo-1519064895-6f65be547b45?auto=format&fit=crop&w=1500&q=80"
            alt="Hero"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1
                className="text-4xl font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Us
              </motion.h1>
              <motion.p
                className="mt-4 text-lg"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We are a dedicated team committed to delivering top-notch solutions and exceptional service.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-semibold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Company Overview
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our company was founded with the vision of creating innovative solutions that drive success for our clients. With a team of skilled professionals, we offer a range of services designed to meet your needs and exceed your expectations.
          </motion.p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-semibold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our mission is to empower businesses with cutting-edge technology and exceptional service. We strive to foster a culture of innovation and excellence, ensuring that our clients achieve their goals and drive growth.
          </motion.p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-semibold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="w-64 border rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Jane Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
              <p className="mt-2">
                Jane is the visionary behind our company, leading with passion and expertise.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="w-64 border rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">John Smith</h3>
              <p className="text-gray-500">Lead Developer</p>
              <p className="mt-2">
                John is the mastermind behind our technological solutions, ensuring quality and innovation.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="w-64 border rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Alice Johnson</h3>
              <p className="text-gray-500">Marketing Specialist</p>
              <p className="mt-2">
                Alice drives our marketing efforts, crafting strategies that resonate with our audience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
