import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Import the new Twitter (X) icon

export default function ContactUs() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">
        We value your inquiries and feedback. Our team is always ready to assist you!
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="mt-12 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-1/2 p-8 bg-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900">Get In Touch</h3>
         
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-orange-500 text-lg" />
              <p className="text-gray-700">BKC, MUMBAI, INDIA 700405</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-500 text-lg" />
              <p className="text-gray-700">+91 95944 30295</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-500 text-lg" />
              <p className="text-gray-700">code4bharat2025@.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-orange-500 text-xl hover:text-orange-700"><FaFacebook /></a>
            <a href="#" className="text-orange-500 text-xl hover:text-orange-700"><FaXTwitter /></a> {/* Updated Twitter Icon */}
            <a href="#" className="text-orange-500 text-xl hover:text-orange-700"><FaInstagram /></a>
            <a href="#" className="text-orange-500 text-xl hover:text-orange-700"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h3 className="text-2xl font-semibold text-gray-900">Send a Message</h3>

          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="E-mail address" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-md"></textarea>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30277.252060535726!2d72.81941484724607!3d19.076090172826745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630f51cf8dd%3A0xceb48a55a81b20d!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1633967001334!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
