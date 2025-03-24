export default function Hero() {
    return (
        <div>
            <div className="relative w-full h-[320px]" id="home">
                {/* Background Image without Opacity */}
                <div className="absolute inset-0">
                    <img src="/baground.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
                </div>

                {/* Content Section */}
                <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-white font-medium text-4xl md:text-5xl leading-tight mb-2">
                            Free Certificate Maker
                        </h1>
                        <p className="text-white text-xl mb-8 mt-4">
                            Generate, and download<br />in minutes.
                        </p>
                        <a href="/Login"
                            className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#6295b1] transition duration-200">
                            Create Certificate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
