import { motion } from "framer-motion";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      name: "Summer Karate Tournament",
      date: "October 15, 2024",
      location: "National Sports Complex, Dhaka",
      description: "Join us for an exciting summer tournament with competitors from all over the country.",
      image: "https://images.unsplash.com/photo-1601641544151-3b8c79a7c6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMjAyNjR8MHwxfGFsbHwxfHx8fHx8fHwxNjY3MjMzODg5&ixlib=rb-1.2.1&q=80&w=400" // Image for the tournament
    },
    {
      id: 2,
      name: "Karate Training Camp",
      date: "November 5-10, 2024",
      location: "Karate Dojo, Chittagong",
      description: "A week-long training camp focusing on advanced techniques and self-defense.",
      image: "https://images.unsplash.com/photo-1526481283671-f929e4d5d0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMjAyNjR8MHwxfGFsbHwxfHx8fHx8fHwxNjY3MjMzODg5&ixlib=rb-1.2.1&q=80&w=400" // Image for the training camp
    },
    {
      id: 3,
      name: "Karate Championship",
      date: "December 20, 2024",
      location: "City Arena, Sylhet",
      description: "The annual championship event showcasing the best karatekas in the region.",
      image: "https://images.unsplash.com/photo-1556740749-8b3378d0e6d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMjAyNjR8MHwxfGFsbHwxfHx8fHx8fHwxNjY3MjMzODg5&ixlib=rb-1.2.1&q=80&w=400" // Image for the championship
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
            Upcoming Karate Events
          </motion.h1>
          <motion.p
            className="mt-4 text-lg "
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Stay updated with our upcoming karate events and competitions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="border p-6 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * event.id }}
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-semibold ">{event.name}</h2>
                <p className="mt-2 "><strong>Date:</strong> {event.date}</p>
                <p className="mt-1 "><strong>Location:</strong> {event.location}</p>
                <p className="mt-4 ">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
