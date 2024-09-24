import { motion } from "framer-motion";
import events1 from '@/assets/home/events/events.jpg'
import events2 from '@/assets/home/events/events1.jpg'
import events3 from '@/assets/home/events/events2.png'
import ContactPage from "../contact/ContactPage";

// Sample images for events (replace with actual URLs or imports)


const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: 'BSMI Workshop 2024',
      date: 'October 12, 2024',
      location: 'Dhaka, Bangladesh',
      description: 'Join us for a full-day workshop on IT innovations and future trends in technology. Limited seats available!',
      image: events1
    },
    {
      id: 2,
      title: 'BSMI Annual Conference',
      date: 'December 5, 2024',
      location: 'Online',
      description: 'The annual BSMI conference brings together professionals from around the globe to discuss industry trends and advancements.',
      image: events2
    },
    {
      id: 3,
      title: 'Karate Networking Event 2025',
      date: 'January 10, 2025',
      location: 'Chittagong, Bangladesh',
      description: 'An exclusive networking event for IT professionals and startups to connect and exchange ideas, featuring a Karate demo!',
      image: events3
    },
  ];

  return (
    <section className="min-h-screen py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-extrabold text-gray-800 tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Karate Events
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Stay informed with the latest events and competitions in the world of Karate.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition hover:-translate-y-2 hover:shadow-lg duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * event.id }}
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-56 object-cover"
              />

              {/* Event Details */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{event.name}</h2>
                <p className="mt-2 text-gray-600">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="mt-1 text-gray-600">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">{event.description}</p>

                {/* Learn More Button */}
                <button className="mt-6 px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition duration-200 ease-in-out">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ContactPage />
    </section>
  );
};

export default EventsPage;
