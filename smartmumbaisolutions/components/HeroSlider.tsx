"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Percent, TrendingDown, Star, Zap } from "lucide-react";
import ApplicationModal from "./forms/ApplicationModal";
import Link from "next/link";
import Image from "next/image";

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<{ type: string; title: string; category: "Loan" | "Insurance" } | null>(null);

    const slides = [
        {
            id: 1,
            tag: "Top Loan Mediator",
            title: "Home Loans Made Simple.",
            description: "Don't settle for the first offer. We compare 40+ leading banks to secure the lowest interest rates for your dream home.",
            image: "/Hero-images/home_loan.png",
            stats: "8.35% Starting ROI",
            productType: "home-loan",
            category: "Loan" as "Loan"
        },
        {
            id: 2,
            tag: "Fast Approvals",
            title: "Quick Business Capital.",
            description: "Scale your operations instantly. We find you the best collateral-free business loans with zero hidden processing fees.",
            image: "/Hero-images/business_loan.png",
            stats: "Funded in 24h",
            productType: "business-loan",
            category: "Loan" as "Loan"
        },
        {
            id: 3,
            tag: "Comprehensive Protection",
            title: "Secure Your Family.",
            description: "Protect what matters most. We help you select the most reliable insurance policies at the most affordable premiums.",
            image: "/Hero-images/insurance.png",
            stats: "100% Claim Support",
            productType: "health-insurance",
            category: "Insurance" as "Insurance"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isModalOpen) {
                setCurrent((prev) => (prev + 1) % slides.length);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length, isModalOpen]);

    const slide = slides[current];

    const handleApply = () => {
        if (slide.productType) {
            setModalData({
                type: slide.productType,
                title: slide.title,
                category: slide.category
            });
            setIsModalOpen(true);
        }
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-slate-900 border-b border-slate-100/50">
            {/* Extremely subtle, modern background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-80 pointer-events-none -z-10 blur-3xl"></div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`text-${current}`}
                                initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                exit={{ opacity: 0, filter: "blur(10px)", y: -15 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-xs font-semibold text-blue-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                    {slide.tag}
                                </div>

                                <h1 className="text-5xl lg:text-[4rem] font-bold text-slate-900 leading-[1.05] tracking-tight">
                                    {slide.title.split(' ').map((word, i, arr) => (
                                        <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500" : ""}> {word}</span>
                                    ))}
                                </h1>

                                <p className="text-[17px] text-slate-500 leading-[1.6] max-w-lg font-medium">
                                    {slide.description}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                                    <button
                                        onClick={handleApply}
                                        className="w-full sm:w-auto h-12 px-7 rounded-full bg-slate-900 text-white font-medium text-[15px] hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-95 group"
                                    >
                                        Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <Link
                                        href="/calculator"
                                        className="w-full sm:w-auto h-12 px-7 rounded-full bg-white text-slate-700 font-medium text-[15px] hover:bg-slate-50 border border-slate-200 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group"
                                    >
                                        Calculate EMI <Percent size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                                    </Link>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 pt-10 mt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                            <TrendingDown size={16} strokeWidth={2} />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-bold text-slate-900 leading-none">{slide.stats}</div>
                                            <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Best Match Deals</div>
                                        </div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <Shield size={16} strokeWidth={2} />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-bold text-slate-900 leading-none">Zero Hidden Fees</div>
                                            <div className="text-[11px] text-slate-500 mt-0.5 font-medium">100% Transparent</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Image Slider UI */}
                    <div className="relative w-full lg:h-[550px] flex items-center justify-center mt-12 lg:mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`img-${current}`}
                                initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.02, filter: "blur(5px)" }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="relative z-10 w-full max-w-[500px] aspect-[4/4] lg:aspect-auto lg:h-[90%] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100/50 bg-slate-100"
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-[10s] hover:scale-105"
                                    priority
                                />

                                {/* Subtle Floating Trust Badge Overlay */}
                                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl p-3 pr-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col gap-1.5 z-20">
                                    <div className="font-bold text-[13px] text-slate-900 leading-tight">Excellent Rating</div>
                                    <div className="flex gap-0.5 text-blue-500">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>

                        {/* Minimal Slide Indicators */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${index === current
                                        ? "w-8 bg-blue-600"
                                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {modalData && (
                <ApplicationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    productType={modalData.type}
                    productTitle={modalData.title}
                    category={modalData.category}
                />
            )}
        </section>
    );
}
