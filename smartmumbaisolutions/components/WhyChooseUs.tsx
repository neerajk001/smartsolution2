"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Percent, Headset, Banknote, Briefcase } from "lucide-react";

const features = [
    {
        icon: <Clock size={24} strokeWidth={1.5} />,
        title: "Quick Approval",
        description: "Experience lightning-fast loan approvals with our streamlined digital process.",
    },
    {
        icon: <Percent size={24} strokeWidth={1.5} />,
        title: "Low Interest Rates",
        description: "We partner with top banks to offer you the most competitive interest rates in the market.",
    },
    {
        icon: <ShieldCheck size={24} strokeWidth={1.5} />,
        title: "Secure & Transparent",
        description: "Your data security is our priority. No hidden charges, just 100% transparency.",
    },
    {
        icon: <Headset size={24} strokeWidth={1.5} />,
        title: "Expert Support",
        description: "Our financial experts are available 24/7 to guide you through every step.",
    },
    {
        icon: <Banknote size={24} strokeWidth={1.5} />,
        title: "Unsecured Loans",
        description: "Get funding without collateral. Hassle-free unsecured loans for your needs.",
    },
    {
        icon: <Briefcase size={24} strokeWidth={1.5} />,
        title: "Any Loan Type",
        description: "From personal to business loans, we have a solution for every financial requirement.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-100/50">
            {/* Very Subtle Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(5px)", y: 15 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-2xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-1.5 text-slate-800 font-semibold tracking-wide uppercase text-[11px] mb-4 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                            Why Choose Us
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-[-0.02em] leading-tight">
                            Smart Decisions <span className="text-slate-400">Start Here</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="group p-8 rounded-[20px] bg-slate-50/50 border border-slate-200/60 hover:border-slate-300 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Inner subtle glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"></div>
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-white border border-slate-200 shadow-sm text-slate-700 transition-transform duration-500 group-hover:scale-110">
                                    {feature.icon}
                                </div>
                                <h4 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-slate-500 leading-relaxed text-[15px] font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
