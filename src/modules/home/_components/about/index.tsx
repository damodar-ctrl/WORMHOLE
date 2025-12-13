import { motion } from "framer-motion";
import clsx from "clsx";

function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background Decorator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-screen-xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        About <span className="text-primary">Wormhole</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-base-content/70 leading-relaxed"
                    >
                        Wormhole is a student-built grocery and essentials platform created from scratch during our college years, with one clear purpose: bringing local farmers, vendors, and customers closer by removing distance, delays, and opacity from everyday shopping.
                    </motion.p>
                </div>

                {/* The Concept: Traditional vs Wormhole */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-base-200/50 backdrop-blur-sm p-8 rounded-3xl border border-base-content/5"
                    >
                        <h3 className="text-xl font-bold mb-4 text-base-content/80">The Traditional Gap</h3>
                        <p className="text-base-content/70 leading-relaxed">
                            In traditional supply chains, the people who grow food and the people who consume it rarely see each other. Farmers work hard in their fields, while customers shop without knowing where their food comes from. These two pillars are separated by long distribution chains, multiple intermediaries, and a lack of transparency. Wormhole exists to act as the shortcut in between.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary/5 backdrop-blur-sm p-8 rounded-3xl border border-primary/10 relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                        <h3 className="text-xl font-bold mb-4 text-primary">Why &quot;Wormhole&quot;?</h3>
                        <p className="text-base-content/70 leading-relaxed">
                            The name Wormhole represents this idea clearly. A wormhole creates the shortest possible path between two distant points. In the same way, our platform creates a direct, technology-driven connection between farms, local stores, and homes, bending distance and saving time while keeping the supply chain transparent.
                        </p>
                    </motion.div>
                </div>

                {/* Origin Story Section - Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-base-200/50 backdrop-blur-md border border-base-content/5 rounded-3xl p-8 md:p-12 mb-12 shadow-xl"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">01</span>
                                Our Origins
                            </h3>
                            <p className="text-base-content/80 leading-relaxed mb-6">
                                As students from Andhra Pradesh, we have seen firsthand how local farmers work hard throughout the year yet still struggle with unstable prices, middlemen, and low margins. At the same time, urban customers pay high prices and still do not always get the freshness and quality they deserve.
                            </p>
                            <p className="text-base-content/80 leading-relaxed font-medium">
                                Wormhole was born to bridge this gap.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl rotate-3 transform" />
                            <div className="relative bg-base-100 p-8 rounded-2xl border border-base-content/5 shadow-lg">
                                <p className="italic text-lg text-base-content/70">
                                    "By building this platform while still in college, we wanted to prove that students can create real-world impact, not just class projects. Every screen, every feature, and every workflow in this app has been designed and developed by us, line by line."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission & Commitment Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-base-100 border border-base-content/5 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">Our Mission</h3>
                        <ul className="space-y-4">
                            {[
                                "Source fresh vegetables, fruits, and quality snacks directly from trusted local farmers.",
                                "Offer farmers better and more stable prices than traditional intermediaries.",
                                "Deliver products to customers at affordable, fair prices with a focus on hygiene."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="mt-1 w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs">✓</span>
                                    <span className="text-base-content/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Commitment Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-base-100 border border-base-content/5 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
                    >
                        <h3 className="text-2xl font-bold mb-6 group-hover:text-secondary transition-colors">Our Promise</h3>

                        <div className="mb-6">
                            <p className="text-base-content/70 font-medium italic mb-2">"To make this connection real and trustworthy..."</p>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                We go beyond delivery. For every order, we work to visually connect customers with the source of their food. Whenever possible, we capture real photos of the farmers, their fields, and the cultivation behind the produce, and share these directly with the c
                                ustomers. This turns an anonymous product into a human connection.
                            </p>
                        </div>

                        <ul className="space-y-4 mt-auto">
                            {[
                                "Support farmers in Andhra Pradesh with better access to markets.",
                                "Give families a reliable way to order fresh groceries without compromising quality.",
                                "Use technology to make local commerce more fair, efficient, and sustainable."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">★</span>
                                    <span className="text-base-content/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* Meet the Building Team */}
                <div className="mt-24 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl font-bold mb-4">Meet the <span className="text-primary">Builders</span></h3>
                        <p className="text-base-content/60 max-w-xl mx-auto">
                            The student team behind Wormhole, dedicated to engineering a better future for local commerce.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: "Hemanth Tushar", role: "TECH LEAD", img: "/Team Images/35.svg" },
                            { name: "Damodar Naik", role: "TECH LEAD", img: "/Team Images/36.svg" },
                            { name: "Chaitanya Subhash", role: "SECURITY ENGINEER", img: "/Team Images/37.svg" }
                        ].map((dev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="bg-base-100/50 backdrop-blur-sm border border-base-content/5 rounded-2xl p-6 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                            >
                                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-base-200 p-1 ring-2 ring-base-content/5 group-hover:ring-primary/30 transition-all">
                                    <img
                                        src={dev.img}
                                        alt={dev.name}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <h4 className="text-xl font-bold mb-1">{dev.name}</h4>
                                <p className="text-sm text-primary font-medium mb-4">{dev.role}</p>

                                {/* Social Placeholders */}
                                <div className="flex justify-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-5 h-5 bg-base-content/20 rounded-full" />
                                    <div className="w-5 h-5 bg-base-content/20 rounded-full" />
                                    <div className="w-5 h-5 bg-base-content/20 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-base-content/60 text-sm max-w-2xl mx-auto">
                        Thank you for being part of this journey. Every order you place helps support local farmers and encourages student-led innovation in India.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

export default About;
