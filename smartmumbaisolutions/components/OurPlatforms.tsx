"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Globe } from "lucide-react";

const platforms = [
    {
        id: "loanbaazaar",
        logo: "/logos/loanbaazaar-logo.png", // place logo here or it falls back to text
        name: "LoanBaazaar.com",
        tagline: "Your Smart Loan Marketplace",
        taglineColor: "text-orange-500",
        borderColor: "border-orange-100",
        accentBg: "bg-orange-50",
        accentText: "text-orange-600",
        gradientFrom: "from-orange-500",
        gradientTo: "to-amber-500",
        description:
            "LoanBaazaar.com is our flagship digital loan marketplace that bridges customers with the best loan products from leading banks and NBFCs across India. Powered by smart eligibility algorithms and expert advisory, it makes borrowing simpler, faster, and transparent.",
        features: [
            "Instant loan eligibility check across 40+ banks",
            "Personalized product recommendations",
            "End-to-end digital application process",
            "Dedicated loan advisor for every customer",
            "Real-time application tracking & status updates",
        ],
        cta: "Visit LoanBaazaar.com",
        ctaHref: "https://www.loanbaazaar.com",
        ctaBg: "bg-gradient-to-r from-orange-500 to-amber-500",
        ctaShadow: "shadow-orange-200",
    },
];

export default function OurPlatforms() {
    return (
        <section className="w-full md:w-[90%] md:max-w-[1200px] mx-auto px-6 md:px-0">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-3">
                    Built By Us
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                    Our Products &amp;{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                        Platforms
                    </span>
                </h2>
                <p className="text-slate-500 text-lg max-w-xl mx-auto">
                    Leveraging technology to simplify your financial journey.
                </p>
            </motion.div>

            {/* Platform Cards */}
            <div className="flex justify-center">
                {platforms.map((platform, i) => (
                    <motion.div
                        key={platform.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className={`w-full max-w-2xl bg-white rounded-[2rem] border ${platform.borderColor} shadow-xl p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-500`}
                    >
                        {/* Logo + Name */}
                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl ${platform.accentBg} flex items-center justify-center shrink-0 overflow-hidden`}>
                                {platform.logo ? (
                                    <img
                                        src={platform.logo}
                                        alt={platform.name}
                                        className="w-10 h-10 object-contain"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).style.display = "none";
                                            (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = "flex";
                                        }}
                                    />
                                ) : null}
                                <Globe
                                    size={24}
                                    className={`${platform.accentText} ${platform.logo ? "hidden" : "block"}`}
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                                    {platform.name}
                                </h3>
                                <p className={`text-sm font-semibold ${platform.taglineColor}`}>
                                    {platform.tagline}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className={`h-px w-full bg-gradient-to-r ${platform.gradientFrom} ${platform.gradientTo} opacity-20 rounded-full`} />

                        {/* Description */}
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {platform.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2.5">
                            {platform.features.map((feature, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-slate-600 text-sm">
                                    <CheckCircle2 size={16} className={`${platform.accentText} mt-0.5 shrink-0`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="mt-auto pt-2">
                            <a
                                href={platform.ctaHref}
                                target={platform.ctaHref.startsWith("http") ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 ${platform.ctaBg} text-white font-bold py-3 px-6 rounded-full shadow-lg ${platform.ctaShadow} hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 text-sm`}
                            >
                                {platform.cta} <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
