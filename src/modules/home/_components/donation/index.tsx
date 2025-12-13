import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { HeartIcon, SparklesIcon } from "@heroicons/react/24/solid";

function Donation() {
    const {
        home: { donation },
    } = useContext(ConfigContext)!;

    if (!donation) return null;

    const handleDonateClick = () => {
        window.open(donation.paymentUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id={donation.id}
            className="relative max-w-screen-lg mx-auto px-4 py-16 overflow-hidden"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
            >
                {/* Main Card */}
                <motion.div
                    variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Industrial Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/50 via-purple-500/30 to-cyan-500/50 p-[2px]">
                        <div className="absolute inset-[2px] rounded-3xl bg-neutral" />
                    </div>

                    <div className="relative bg-neutral/95 backdrop-blur-xl rounded-3xl border border-cyan-500/20 overflow-hidden">
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

                        <div className="flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
                            {/* Left Content */}
                            <div className="flex-1 text-center lg:text-left">
                                {/* Badge */}
                                <motion.div
                                    variants={{
                                        hidden: { scale: 0, opacity: 0 },
                                        visible: { scale: 1, opacity: 1 },
                                    }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
                                >
                                    <SparklesIcon className="w-4 h-4 text-cyan-400" />
                                    <span className="text-cyan-400 text-sm font-medium">
                                        Support Our Mission
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    <AnimatedText text={donation.title} />
                                </h2>

                                {/* Subtitle */}
                                <motion.p
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: { y: 0, opacity: 0.8 },
                                    }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg text-gray-300 mb-3"
                                >
                                    {donation.subtitle}
                                </motion.p>

                                {/* Description */}
                                <motion.p
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: { y: 0, opacity: 0.6 },
                                    }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
                                >
                                    {donation.description}
                                </motion.p>

                                {/* CTA Button */}
                                <motion.button
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: { y: 0, opacity: 1 },
                                    }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleDonateClick}
                                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300"
                                >
                                    {/* Button Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_infinite] transition-all" />

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-all duration-300" />

                                    {/* Button Content */}
                                    <span className="relative z-10 text-neutral font-bold flex items-center gap-3">
                                        <HeartIcon className="w-5 h-5" />
                                        {donation.buttonText}
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </motion.button>

                                {/* Secure Payment Note */}
                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 0.5 },
                                    }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-4 text-xs text-gray-500 flex items-center justify-center lg:justify-start gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                    Secure payment via Razorpay
                                </motion.p>
                            </div>

                            {/* Right Side - Donation Image */}
                            <motion.div
                                variants={{
                                    hidden: { scale: 0.8, opacity: 0 },
                                    visible: { scale: 1, opacity: 1 },
                                }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0"
                            >
                                <img
                                    src="/DonationImage/support.svg"
                                    alt="Support Our Mission"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Custom Keyframes Style */}
            <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
        </section>
    );
}

export default Donation;
