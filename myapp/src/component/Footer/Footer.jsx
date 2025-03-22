import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-6 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center text-center md:text-left">
                    
                    {/* Left Section - Logo & Copyright */}
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold flex items-center justify-center md:justify-start">
                            <span className="mr-2">🚀</span> Code 4Bharat
                        </h2>
                        <p className="text-sm text-gray-400">
                            code4bharat2025@.com. All rights reserved.
                        </p>
                    </div>

                    {/* Center Section - Links */}
<div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-wrap justify-center md:justify-start gap-8">
    {/* Column 1 */}
    <div className="flex flex-col space-y-2">
        <a href="" className="hover:text-white">About Me</a>
        <a href="" className="hover:text-white">License</a>
    </div>
    
    {/* Column 2 */}
    <div className="flex flex-col space-y-2">
        <a href="" className="hover:text-white">FAQ</a>
        <a href="" className="hover:text-white">Privacy Policy</a>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col space-y-2">
        <a href="" className="hover:text-white">Cookie Policy</a>
        <a href="" className="hover:text-white">Terms of Service</a>
        <a href="" className="hover:text-white">Contact</a>
    </div>
</div>


                    {/* Right Section - Social Icons */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4">
                        <a className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                            <FaInstagram size={20} />
                        </a>
                        <a className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                            <FaTwitter size={20} />
                        </a>
                        <a  className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                            <FaFacebook size={20} />
                        </a>
                        <a  className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="flex justify-center mt-6">
    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-lg hover:bg-gray-300">
        <FaArrowUp size={20} />
    </a>
</div>
            </div>
        </footer>
    );
}
