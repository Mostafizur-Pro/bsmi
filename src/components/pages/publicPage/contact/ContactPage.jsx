import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Remove error message as user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle form submission logic here (e.g., API call)
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
      setErrors({});
      // Hide submission message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-white py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            In case of questions, please contact the ITKF team using the form below.
          </p>
        </div>

        {/* Submission Feedback */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-6 p-4 text-green-700 bg-green-100 border border-green-400 rounded-lg"
          >
            Your message has been sent successfully!
          </motion.div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-700">
                Enter Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your name"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : null}
                required
              />
              {errors.name && (
                <span id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-700">
                Enter Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : null}
                required
              />
              {errors.email && (
                <span id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Second Row: Subject and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Subject Input */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 text-sm font-semibold text-gray-700">
                Enter Subject
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter the subject"
                aria-invalid={errors.subject ? 'true' : 'false'}
                aria-describedby={errors.subject ? 'subject-error' : null}
                required
              />
              {errors.subject && (
                <span id="subject-error" className="mt-1 text-sm text-red-500">
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Phone Input */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-sm font-semibold text-gray-700">
                Enter Phone
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your phone number"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : null}
                required
              />
              {errors.phone && (
                <span id="phone-error" className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-700">
              Enter Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your message"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : null}
              required
            ></motion.textarea>
            {errors.message && (
              <span id="message-error" className="mt-1 text-sm text-red-500">
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};



export default ContactPage;
