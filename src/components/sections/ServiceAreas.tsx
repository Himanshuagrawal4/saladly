"use client";

import { motion } from "framer-motion";

const serviceAreas = [
    "Kharadi",
    "Ubale Nagar",
    "Mundhwa",
    "Keshavnagar",
    "Wadgaonsheri",
    "Magarpatta",
    "Amanora",
    "Viman Nagar",
    "Wagholi",
    "Kalyani Nagar",
    "Koregaon Park",
    "Yerwada",
];

export default function ServiceAreas() {
    return (
        <section className="py-12 bg-gradient-to-b from-white to-primary-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Header */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
                        <span className="text-2xl">📍</span>
                        <span className="text-primary-dark text-sm font-medium">
                            Delivering Fresh Daily
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold text-text mb-3">
                        Currently Serving in <span className="text-gradient">Pune</span>
                    </h2>

                    <p className="text-text-muted mb-6 max-w-xl mx-auto">
                        We&apos;re expanding soon to more areas! 🚀
                    </p>

                    {/* Areas Grid */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                        {serviceAreas.map((area, index) => (
                            <motion.span
                                key={area}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-text shadow-sm border border-gray-100 hover:border-primary hover:text-primary transition-colors cursor-default"
                            >
                                {area}
                            </motion.span>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-sm text-text-muted"
                    >
                        Not in your area? <span className="text-primary font-medium">WhatsApp us</span> and we&apos;ll notify you when we expand!
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
