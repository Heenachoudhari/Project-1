
export default function Vision() {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Effortless Certificate Generation</h2>
            <p className="text-center text-gray-600 mb-8">
                Follow these simple steps to generate your certificate in seconds.
            </p>

            {/* Centered Steps */}
            <div className="flex flex-wrap justify-center gap-6">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg w-72 text-center">
                    <img src="/step1.png" alt="Step 1" className="mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">Log In</h3>
                    <p className="text-gray-500 text-sm">Sign in to your account to continue.</p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg w-72 text-center">
                    <img src="/step2.png" alt="Step 2" className="mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">Fill the Form</h3>
                    <p className="text-gray-500 text-sm">Enter your name, event details, and other information.</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg w-72 text-center">
                    <img src="/step3.png" alt="Step 3" className="mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">Download Your Certificate</h3>
                    <p className="text-gray-500 text-sm">Generate and download your certificate instantly.</p>
                </div>
            </div>
        </div>
    );
}
