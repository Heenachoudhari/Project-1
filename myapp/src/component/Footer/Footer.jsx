import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Importing new Twitter (X) icon

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-gray-300 py-8 mt-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between items-start text-center md:text-left gap-6">
                        
                        {/* Left Section - Logo & Copyright */}
                        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-xl font-bold flex items-center">
                                <span className="mr-2">🚀</span> Code 4Bharat
                            </h2>
                            <p className="text-xs text-gray-400 mt-2">
                                code4bharat2025@.com. All rights reserved.
                            </p>
                        </div>

                        {/* Center Section - Links & Contact */}
                        <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start gap-8">
                            {/* Links */}
                            <div className="flex flex-wrap gap-10">
                                <div className="flex flex-col space-y-2 text-sm">
                                    <a href="" className="hover:text-white">About Me</a>
                                    <a href="" className="hover:text-white">License</a>
                                    <a href="" className="hover:text-white">FAQ</a>
                                </div>
                                <div className="flex flex-col space-y-2 text-sm">
                                    <a href="" className="hover:text-white">Privacy Policy</a>
                                    <a href="" className="hover:text-white">Cookie Policy</a>
                                    <a href="" className="hover:text-white">Terms of Service</a>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="flex flex-col text-sm">
                                <p className="font-bold">Contact us</p>
                                <p className="font-bold">Email:</p>
                                <p className="mb-1">code4bharat2025@.com</p>

                                <p className="font-bold">Phone:</p>
                                <p className="mb-1">+91 95944 30295</p>

                                <p className="font-bold">Address:</p>
                                <p className="mb-1">BKC,MUMBAI,INDIA 700405</p>
                            </div>
                        </div>

                        {/* Right Section - Social Icons */}
                        <div className="w-full md:w-1/4 bg-black text-white p-5 rounded-lg">
                            <div className="flex justify-center md:justify-start gap-3 mt-4">
                                <a className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                                    <FaInstagram size={18} />
                                </a>
                                <a className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                                    <FaXTwitter size={18} /> {/* Updated Twitter icon */}
                                </a>
                                <a className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                                    <FaFacebook size={18} />
                                </a>
                                <a className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                                    <FaLinkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Back to Top Button */}
                    <div className="flex justify-center mt-8">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-lg hover:bg-gray-300">
                            <FaArrowUp size={20} />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Fixed WhatsApp Button */}
            <a
                href="https://wa.me/919594430295"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
            >
                <FaWhatsapp size={28} />
            </a>
        </>
    );
}
