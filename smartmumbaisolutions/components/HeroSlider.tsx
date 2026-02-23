"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star, Shield, Zap } from "lucide-react";
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
            title: "Finance Your Future Today",
            subtitle: "Approval in 24 Hours",
            description: "From dream homes to business expansion, we provide the capital you need with zero hassle.",
            image: "/Hero-images/hero (1).png",
            stats: "8.35% Starting ROI",
            tag: "Best Seller",
            color: "bg-orange-500",
            productType: "home-loan",
            category: "Loan" as "Loan"
        },
        {
            id: 2,
            title: "Grow Your Business Fast",
            subtitle: "Collateral-Free Loans",
            description: "Scale your operations with unsecured business loans up to ₹5 Cr. Minimal documentation required.",
            image: "/Hero-images/hero (3).png",
            stats: "₹5Cr Max Limit",
            tag: "Trending",
            color: "bg-amber-500",
            productType: "business-loan",
            category: "Loan" as "Loan"
        },
        {
            id: 3,
            title: "Secure Your Family's Future",
            subtitle: "Comprehensive Insurance",
            description: "Get the best health and term life insurance plans at affordable premiums.",
            image: "/Hero-images/hero (2).png",
            stats: "100% Claim Support",
            tag: "Essential",
            color: "bg-yellow-500",
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
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
            {/* Warm Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 -z-10 mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-yellow-50/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        key={`text-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm text-sm font-semibold text-orange-600">
                            <span className={`w-2 h-2 rounded-full animate-pulse ${slide.color}`}></span>
                            {slide.tag}
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                            {slide.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500" : ""}> {word}</span>
                            ))}
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                            {slide.description}
                        </p>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleApply}
                                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group border border-transparent"
                            >
                                Apply Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full font-semibold text-slate-600 hover:bg-orange-50 hover:text-orange-700 transition-all border border-transparent hover:border-orange-200 flex items-center gap-2">
                                Learn More
                            </button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-orange-100/60">
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900">{slide.stats}</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Key Benefit</p>
                            </div>
                            <div className="h-12 w-px bg-orange-200/50"></div>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600">
                                        UA
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-200">
                                    +2k
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image Card */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`img-${current}`}
                                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 1.05, x: -50 }}
                                transition={{ duration: 0.6, ease: "circOut" }}
                                className="relative z-10 aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/10 border-8 border-white"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Floating Badge */}
                                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-orange-100 flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-1">
                                        <Zap size={20} fill="currentColor" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-900">Fast</span>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Process</span>
                                </div>

                                {/* Floating Trust Badge */}
                                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md text-slate-900 p-4 rounded-2xl shadow-lg border border-orange-100 flex items-center gap-3 pr-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-orange-200">
                                        4.9
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">Excellent Rating</div>
                                        <div className="flex gap-0.5 mt-1 text-amber-400">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto flex md:flex-col gap-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                                        ? "bg-orange-500 scale-125 border-2 border-white shadow-md ring-1 ring-orange-200"
                                        : "bg-slate-300 hover:bg-orange-300"
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
