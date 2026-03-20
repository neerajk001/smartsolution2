"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Introduction() {
    return (
        <section className="relative py-24 md:py-32 bg-slate-50/30 overflow-hidden border-b border-slate-100/50">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(5px)", x: -20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="inline-flex items-center gap-1.5 text-slate-800 font-semibold tracking-wide uppercase text-[11px] bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                                About Smart Solutions
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-[3.5rem] font-bold text-slate-900 mb-6 leading-[1.05] tracking-[-0.03em]">
                            Your trusted bridge to <span className="text-slate-400">financial freedom.</span>
                        </h2>

                        <div className="space-y-5 text-[17px] text-slate-500 leading-relaxed mb-10 font-medium">
                            <p>
                                <span className="font-bold text-slate-800">Smart Solutions</span> is a technology-driven financial services company committed to simplifying access to loans and credit solutions.
                            </p>
                            <p>
                                Since inception, we have focused on building a reliable, transparent, and efficient lending ecosystem powered by technology and deep banking expertise.
                            </p>
                        </div>

                        <Link href="/about">
                            <button className="h-12 px-7 rounded-full bg-slate-900 text-white font-medium text-[15px] hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-95 group">
                                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Right Side: Animated Images */}
                    <div className="relative w-full hidden lg:block h-[550px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-0 right-0 w-full h-full rounded-[2rem] overflow-hidden z-10 border border-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
                        >
                            {/* Inner subtle glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 to-transparent z-20 pointer-events-none mix-blend-multiply"></div>
                            <Image
                                src="/about.png"
                                alt="About Smart Solutions"
                                fill
                                className="object-cover object-center grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
