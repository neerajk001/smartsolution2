"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, CheckCircle2 } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10 mix-blend-multiply" />

            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Who We Are</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Purpose-driven &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">future-focused</span>
                    </h2>
                </motion.div>

                {/* Side-by-side Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative bg-white rounded-[2rem] p-10 shadow-xl border border-orange-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-500"
                    >
                        {/* Decorative gradient corner */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-100 to-transparent rounded-[2rem] -z-0" />

                        <div className="relative z-10">
                            {/* Label */}
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600">
                                    <Target size={22} />
                                </div>
                                <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">
                                    Our Mission
                                </span>
                            </div>

                            {/* Headline */}
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                                Empowering your{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    financial journey.
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 text-base leading-relaxed mb-8">
                                To provide accessible, transparent, and tailored financial solutions that simplify the lending process. We ensure every client achieves their goals with confidence, backed by technology and trust.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-3 mb-10">
                                {[
                                    "No hidden charges — complete transparency",
                                    "Accessible solutions for every income level",
                                    "Technology-first approach to lending",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <CheckCircle2 size={18} className="text-orange-500 mt-0.5 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link href="/about">
                                <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold py-3 px-7 rounded-full shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group/btn">
                                    Discover Our Mission
                                    <ArrowRight size={17} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="relative bg-white rounded-[2rem] p-10 shadow-xl border border-amber-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-500"
                    >
                        {/* Decorative gradient corner */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-100 to-transparent rounded-[2rem] -z-0" />

                        <div className="relative z-10">
                            {/* Label */}
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600">
                                    <Eye size={22} />
                                </div>
                                <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">
                                    Our Vision
                                </span>
                            </div>

                            {/* Headline */}
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                                Building a future of{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                                    limitless possibilities.
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 text-base leading-relaxed mb-8">
                                To be the most trusted financial partner in India, recognized for integrity and excellence. We envision a world where financial freedom is within everyone's reach, powered by smart solutions.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-3 mb-10">
                                {[
                                    "India's most trusted financial partner by 2030",
                                    "Integrity and excellence in every interaction",
                                    "Smart, scalable solutions for the future",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link href="/about">
                                <button className="bg-white text-slate-900 border-2 border-slate-200 hover:border-amber-400 font-bold py-3 px-7 rounded-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 group/btn">
                                    See Our Roadmap
                                    <ArrowRight size={17} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
