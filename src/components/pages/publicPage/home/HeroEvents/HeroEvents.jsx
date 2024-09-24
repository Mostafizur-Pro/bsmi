import { motion } from 'framer-motion';
import events1 from '@/assets/home/events/events.jpg'
import events2 from '@/assets/home/events/events1.jpg'
import events3 from '@/assets/home/events/events2.png'

// Sample images for events (replace with actual URLs or imports)
const eventsData = [
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

const HeroEvents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-bold text-red-600 text-center">Events</h2>
      <p className="text-center text-gray-600 mb-12">
        CHECK BELOW THE ITKF EVENTS
      </p>

      <div className="space-y-8">
        {eventsData.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * event.id, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Event Image */}
              <motion.img
                src={event.image}
                alt={event.title}
                className="sm:w-1/3 w-full rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Event Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{event.date} - {event.location}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroEvents;
