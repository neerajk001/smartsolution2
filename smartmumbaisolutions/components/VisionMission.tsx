"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, CheckCircle2 } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative border-b border-slate-100/50">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(5px)", y: 15 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-flex items-center gap-1.5 text-slate-800 font-semibold tracking-wide uppercase text-[11px] mb-4 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        Who We Are
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-[-0.02em]">
                        Purpose-driven &amp; <span className="text-slate-400">future-focused</span>
                    </h2>
                </motion.div>

                {/* Side-by-side Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-white rounded-[24px] p-10 md:p-12 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
                    >
                        {/* Decorative gradient corner */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 to-transparent rounded-[24px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Label */}
                            <div className="inline-flex items-center gap-2.5 mb-8">
                                <div className="p-2.5 rounded-[12px] bg-slate-50 text-slate-700 border border-slate-200/60 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    <Target size={20} strokeWidth={1.5} />
                                </div>
                                <span className="text-slate-900 font-bold tracking-widest uppercase text-[11px]">
                                    Our Mission
                                </span>
                            </div>

                            {/* Headline */}
                            <h3 className="text-3xl md:text-[2.5rem] font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                                Empowering your{" "}
                                <span className="text-blue-600">
                                    financial journey.
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 text-[16px] leading-relaxed mb-10 font-medium">
                                To provide accessible, transparent, and tailored financial solutions that simplify the lending process. We ensure every client achieves their goals with confidence, backed by technology and trust.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-4 mb-12 flex-1">
                                {[
                                    "No hidden charges — complete transparency",
                                    "Accessible solutions for every income level",
                                    "Technology-first approach to lending",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-[14px] font-medium">
                                        <CheckCircle2 size={18} strokeWidth={2} className="text-blue-500 mt-0.5 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link href="/about">
                                <button className="h-12 px-7 rounded-full bg-slate-900 text-white font-medium text-[15px] hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-95 group/btn">
                                    Discover Our Mission
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-slate-50/50 rounded-[24px] p-10 md:p-12 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
                    >
                        {/* Decorative gradient corner */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-200/30 to-transparent rounded-[24px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Label */}
                            <div className="inline-flex items-center gap-2.5 mb-8">
                                <div className="p-2.5 rounded-[12px] bg-white text-slate-700 border border-slate-200/60 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    <Eye size={20} strokeWidth={1.5} />
                                </div>
                                <span className="text-slate-900 font-bold tracking-widest uppercase text-[11px]">
                                    Our Vision
                                </span>
                            </div>

                            {/* Headline */}
                            <h3 className="text-3xl md:text-[2.5rem] font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                                Building a future of{" "}
                                <span className="text-slate-500">
                                    limitless possibilities.
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 text-[16px] leading-relaxed mb-10 font-medium">
                                To be the most trusted financial partner in India, recognized for integrity and excellence. We envision a world where financial freedom is within everyone's reach, powered by smart solutions.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-4 mb-12 flex-1">
                                {[
                                    "India's most trusted financial partner by 2030",
                                    "Integrity and excellence in every interaction",
                                    "Smart, scalable solutions for the future",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-[14px] font-medium">
                                        <CheckCircle2 size={18} strokeWidth={2} className="text-slate-400 mt-0.5 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link href="/about">
                                <button className="h-12 px-7 rounded-full bg-white text-slate-700 font-medium text-[15px] border border-slate-200 hover:bg-slate-50 transition-all duration-300 flex items-center gap-2 shadow-sm active:scale-95 group/btn">
                                    See Our Roadmap
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
