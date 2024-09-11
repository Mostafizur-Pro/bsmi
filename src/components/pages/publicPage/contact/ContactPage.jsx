import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full  p-10 rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold ">
                        We'd Love to Hear From You!
                    </h2>
                    <p className="mt-2 text-base text-gray-200">
                        Feel free to drop us a message. We'll get back to you shortly.
                    </p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium  mb-1">Full Name</label>
                        <Input
                            type="text"
                            placeholder="Enter Your Name"
                            className="block w-full text-gray-500 border-gray-300 rounded-full shadow-sm focus:ring-purple-400 focus:border-purple-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium  mb-1">Email Address</label>
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            className="block w-full text-gray-500 border-gray-300 rounded-full shadow-sm focus:ring-purple-400 focus:border-purple-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium  mb-1">Phone Number</label>
                        <Input
                            type="tel"
                            placeholder="(123) 456-7890"
                            className="block w-full text-gray-500 border-gray-300 rounded-full shadow-sm focus:ring-purple-400 focus:border-purple-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium  mb-1">Your Message</label>
                        <Textarea
                            placeholder="Write your message here..."
                            rows={4}
                            className="block w-full border-gray-300 rounded-2xl shadow-sm focus:ring-purple-400 focus:border-purple-400"
                        />
                    </div>
                    <div>
                        <Button
                            className="w-full py-3 px-6 border border-transparent rounded-full text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
                <div className="text-center text-gray-500 mt-8">
                    <p>
                        Or email us directly at{" "}
                        <a href="mailto:info@yourdomain.com" className="text-purple-500 hover:text-purple-600 font-medium">
                            info@yourdomain.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
