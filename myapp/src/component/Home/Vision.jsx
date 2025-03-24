"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Vision() {
    const steps = [
        {
            id: 1,
            title: "1.Login",
            backContent: "Secure and easy access to your account.",
            image: "/step1.png",
        },
        {
            id: 2,
            title: "2.Fill Form",
            backContent: "Ensure correct details for a personalized certificate.",
            image: "/step2.png",
        },
        {
            id: 3,
            title: "3.Download",
            backContent: "Get a high-quality certificate with one click.",
            image: "/step3.png",
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Effortless Certificate Generation</h2>
            <p className="text-center text-gray-600 mb-8">
                Follow these simple steps to generate your certificate in seconds.
            </p>

            {/* Centered Steps with Flip Effect */}
            <div className="flex flex-wrap justify-center gap-8">
                {steps.map((step) => (
                    <FlipCard key={step.id} step={step} />
                ))}
            </div>
        </div>
    );
}

function FlipCard({ step }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="relative w-80 h-72 perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            whileHover={{ scale: 1.15 }} // Increases size on hover
        >
            {/* Front Side (Only Step Title) */}
            <motion.div
                className="absolute w-full h-full rounded-2xl shadow-lg bg-white flex flex-col items-center justify-center text-center transform-style-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ backfaceVisibility: "hidden" }}
            >
                <img src={step.image} alt={step.title} className="mx-auto mb-4 w-24 h-24" />
                <h3 className="font-semibold text-2xl">{step.title}</h3>
            </motion.div>

            {/* Back Side (Detailed Info) */}
            <motion.div
                className="absolute w-full h-full rounded-2xl shadow-lg bg-blue-500 text-white flex flex-col items-center justify-center text-center transform-style-3d"
                animate={{ rotateY: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.5 }}
                style={{ backfaceVisibility: "hidden" }}
            >
                <h3 className="font-semibold text-xl">More Info</h3>
                <p className="text-lg px-6">{step.backContent}</p>
            </motion.div>
        </motion.div>
    );
}
