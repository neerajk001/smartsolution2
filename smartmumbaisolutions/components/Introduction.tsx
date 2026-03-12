"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Introduction() {
    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[2px] w-12 bg-blue-600"></span>
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                                About Smart Solutions
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                            Your trusted bridge to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">financial freedom.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                            <p>
                                <span className="font-semibold text-slate-900">Smart Solutions</span> is a technology-driven financial services company committed to simplifying access to loans and credit solutions for individuals, professionals, and businesses across India.
                            </p>
                            <p>
                                Since inception, we have focused on building a reliable, transparent, and efficient lending ecosystem powered by technology and deep banking expertise.
                            </p>
                        </div>

                        <Link href="/about">
                            <button className="bg-slate-900 text-white hover:bg-slate-800 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-slate-200 flex items-center gap-2 group">
                                Read More <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Right Side: Animated Images */}
                    <div className="relative w-full hidden lg:block h-[500px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-0 w-full h-full rounded-3xl overflow-hidden z-10 border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-200"
                        >
                            {/* About image */}
                            <Image
                                src="/about.png"
                                alt="About Smart Solutions"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
