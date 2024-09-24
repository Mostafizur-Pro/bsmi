import { motion } from 'framer-motion'
import LogoImage from '@/assets/logo/logo.png'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="border-t py-10 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="text-center pb-8">
          <motion.div
            className="flex justify-center items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <img src={LogoImage} className="h-16 mb-2" alt="Company Logo" />
            <h1 className="text-3xl md:text-5xl font-bold text-red-600">
              Bangladesh Sports Martial Arts Institute
            </h1>
          </motion.div>
          <motion.div
            className="h-1 w-1/4 mx-auto bg-red-600 mt-4"
            initial={{ width: 0 }}
            animate={{ width: '25%' }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col text-gray-800 sm:flex-row justify-center sm:justify-between items-center mt-6 text-lg space-y-4 sm:space-y-0 sm:space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href="#"
              whileHover={{ scale: 1.1, color: '#ef4444' }}
              className="hover:text-red-600 transition duration-300"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8 text-xl">
          {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
            <motion.a
              key={icon}
              href="#"
              whileHover={{ scale: 1.1 }}
              className="transition duration-300 text-gray-400 hover:text-white"
            >
              <i className={`fab fa-${icon}`} />
            </motion.a>
          ))}
        </div>

        {/* Copyright Info */}
        <p className="text-center text-gray-500 text-sm mt-8">
          &copy; 2024 Bangladesh Sports Martial Arts Institute. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
