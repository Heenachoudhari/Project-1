
export default function Hero2() {
    return (
        // <!-- https://gist.github.com/goodreds/3d044027175954984fb96c7407a955ab -->

        
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        
            {/* <!-- Image Column --> */}
            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <img className="h-full w-full object-cover" src="/image5.png" alt="Winding mountain road"/>
            </div>
            {/* <!-- Close Image Column --> */}
        
            {/* <!-- Text Column --> */}
            <div
                className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                {/* <!-- Text Wrapper --> */}
                <div className="flex flex-col p-12 md:px-16">
                    <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Free Certificate Maker</h2>
                    <p className="mt-4">
                   <b> Create Stunning Certificates in Minutes!</b><br/><br/>Celebrate achievements in a snap! .
                   fill in your details, and click<br/> generate. That’s all it takes to create a professional-looking<br/> certificate, ready for download as a PDF, instantly.
                     
                    </p>
                    {/* <!-- Button Container --> */}
                    <div className="mt-8">
                        <a href="/Login"
                           className="inline-block w-full text-center text-base font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-3 px-6 hover:bg-green-800 hover:shadow-md md:w-48 rounded-full whitespace-nowrap">Create certificate 

                            </a>
                    </div>
                </div>
                {/* <!-- Close Text Wrapper --> */}
            </div>
            {/* <!-- Close Text Column --> */}
        
        </div>


    );
}