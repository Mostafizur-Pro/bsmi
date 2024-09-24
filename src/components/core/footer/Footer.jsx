import { motion } from 'framer-motion'
import LogoImage from '@/assets/logo/logo.png'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="border-t py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="text-center pb-6">
          <div className='flex items-center justify-center '>
            <img src={LogoImage} className="h-24  mb-4" alt="Company Logo" />
            <p className="font-bold text-5xl text-red-700 transition-all duration-300">
              Bangladesh Sports Martial Arts Institute
            </p>
          </div>
          <motion.div
            className="h-1 w-1/2 mx-auto bg-red-500"
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Links and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-6">
          <div className="space-x-6 text-center sm:text-left">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ scale: 1.2, color: '#f87171' }}
                className="text-lg hover:text-red-600 transition duration-300"
              >
                {link}
              </motion.a>
            ))}
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-center">
            {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
              <motion.a
                key={icon}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="transition duration-300"
              >
                <i className={`fab fa-${icon}`}></i>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">Subscribe to our newsletter</p>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
              placeholder="Enter your email"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-red-600 text-white rounded-r-lg"
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        {/* Back-to-Top Button */}
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-gray-800 text-white rounded-full"
          >
            Back to Top
          </motion.button>
        </div>

        {/* Footer Rights */}
        <p className="text-center text-gray-400 text-sm mt-8">
          &copy; 2024 MyCompany. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
