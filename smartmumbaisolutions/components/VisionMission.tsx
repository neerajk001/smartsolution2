"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Lightbulb, Users } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="py-32 bg-gray-50 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10 mix-blend-multiply" />

            <div className="container mx-auto px-6 max-w-7xl space-y-32">

                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                                <Target size={20} />
                            </div>
                            <span className="text-orange-600 font-bold tracking-wide uppercase text-sm">
                                Our Mission
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans leading-tight">
                            Empowering your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">financial journey.</span>
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            To provide accessible, transparent, and tailored financial solutions that simplify the lending process. We ensure every client achieves their goals with confidence, backed by technology and trust.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {[
                                { label: "Transparent", sub: "No hidden charges" },
                                { label: "Accessible", sub: "For everyone" },
                            ].map((item, i) => (
                                <div key={i} className="pl-4 border-l-2 border-orange-200">
                                    <div className="font-bold text-slate-900">{item.label}</div>
                                    <div className="text-sm text-slate-500">{item.sub}</div>
                                </div>
                            ))}
                        </div>

                        <Link href="/about">
                            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-300 flex items-center gap-2 group">
                                Discover Our Mission <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Right Image/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[450px] w-full order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white rounded-[3rem] border border-orange-100 shadow-2xl flex items-center justify-center overflow-hidden">
                            {/* Abstract visual */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/4" />

                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-orange-100 shadow-xl flex flex-col items-center gap-4 max-w-xs text-center relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-200">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">Goal Oriented</div>
                                    <p className="text-slate-500 text-sm mt-2">Focused on your success</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Collage Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] w-full"
                    >
                        <div className="absolute top-0 left-0 w-[55%] h-[60%] rounded-[2rem] overflow-hidden shadow-xl z-10 bg-white border border-slate-100 flex flex-col items-center justify-center p-6 text-center hover:scale-105 transition-transform duration-500">
                            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-3">
                                <Lightbulb size={24} />
                            </div>
                            <span className="font-bold text-slate-900">Innovation</span>
                            <span className="text-xs text-slate-500 mt-1">Leading with Tech</span>
                        </div>

                        <div className="absolute bottom-8 right-0 w-[55%] h-[60%] rounded-[2rem] overflow-hidden shadow-xl z-20 bg-white border border-slate-100 flex flex-col items-center justify-center p-6 text-center hover:scale-105 transition-transform duration-500">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-3">
                                <Users size={24} />
                            </div>
                            <span className="font-bold text-slate-900">Community</span>
                            <span className="text-xs text-slate-500 mt-1">Trust & Growth</span>
                        </div>

                        {/* Connection Line */}
                        <svg className="absolute inset-0 pointer-events-none z-0 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M 30 30 C 50 50, 50 50, 70 70" stroke="orange" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        </svg>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
                                <Eye size={20} />
                            </div>
                            <span className="text-amber-600 font-bold tracking-wide uppercase text-sm">
                                Our Vision
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans leading-tight">
                            Building a future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">limitless possibilities.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            To be the most trusted financial partner in India, recognized for integrity and excellence. We envision a world where financial freedom is within everyone's reach, powered by smart solutions.
                        </p>

                        <Link href="/about">
                            <button className="bg-white text-slate-900 border-2 border-slate-100 hover:border-amber-400 font-bold py-3.5 px-8 rounded-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                                See Our Roadmap <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
