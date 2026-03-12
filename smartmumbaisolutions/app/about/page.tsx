"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurPlatforms from "@/components/OurPlatforms";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Lock, FileText, BarChart3, Handshake, Award, Briefcase, TrendingUp, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import Image from "next/image";

// Team Members Data
const managers = [
    {
        id: 1,
        name: "Pratik Singh",
        position: "Manager",
        image: "/employee/pratik-photo.png",
    },
    {
        id: 2,
        name: "Nazia Khan",
        position: "Manager",
        image: "/employee/nazia-photo.png",
    },
    {
        id: 3,
        name: "Remo Mendes",
        position: "Manager",
        image: "/employee/remo-photo.jpg",
    },
];

const assistantManagers = [
    {
        id: 1,
        name: "Heena Sheikh",
        position: "Assistant Manager",
        image: "/employee/heena-photo.png",
    },
    {
        id: 2,
        name: "Ashwini Mishra",
        position: "Assistant Manager",
        image: "/employee/Ashwini.png",
    },
    {
        id: 3,
        name: "Farhanaaz Aga",
        position: "Assistant Manager",
        image: "/employee/farhanaz-photo.png",
    },
];

const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Satisfied Clients", value: "10000+", icon: Users },
    { label: "Loans Approved", value: "₹100Cr+", icon: CheckCircle2 },
    { label: "Partner Banks", value: "40+", icon: Handshake },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-orange-100 selection:text-orange-900">
            <Navbar />

            <main className="space-y-24 pb-20 pt-32">
                {/* HERO SECTION */}
                <section className="relative w-full md:w-[90%] md:max-w-[1200px] mx-auto">
                    <div className="relative overflow-hidden bg-white rounded-[2.5rem] shadow-2xl shadow-orange-900/5 p-8 md:p-12 md:min-h-[280px] flex flex-col justify-center text-center border border-orange-100">
                        {/* Background Blobs */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 mix-blend-multiply"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 mix-blend-multiply"></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-bold mb-8 tracking-wide shadow-sm">
                                    <Sparkles size={14} /> ESTABLISHED IN 2018
                                </span>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
                                    Empowering Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                        Financial Future
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                    We bridge the gap between your dreams and financial reality with expert loan advisory services.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* STATS SECTION */}
                <section className="w-full md:w-[90%] md:max-w-[1200px] mx-auto px-6 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-[2rem] shadow-xl shadow-orange-900/5 border border-slate-100 p-10 md:p-14"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:divide-x divide-slate-100">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <div className="mb-5 p-4 bg-orange-50 rounded-2xl text-orange-600 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-orange-200">
                                        <stat.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* OUR PRODUCTS & PLATFORMS */}
                <OurPlatforms />

                {/* OUR STORY */}
                <section className="w-full md:w-[90%] md:max-w-[1200px] mx-auto px-6 md:px-0">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[2px] w-12 bg-orange-500"></span>
                                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">About Smart Solutions</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                We act as a trusted bridge between <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">customers & financial partners.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    <span className="font-bold text-slate-900">Smart Solutions</span>, established in 2018, is a technology-driven financial services company committed to simplifying access to loans and credit solutions for individuals, professionals, and businesses across India.
                                </p>
                                <p>
                                    Since inception, we have focused on building a reliable, transparent, and efficient lending ecosystem powered by technology and deep banking expertise.
                                </p>
                                <p>
                                    Our core objective is simple — to make lending transparent, faster, and more reliable, while ensuring customers receive the right financial product based on their profile.
                                </p>
                            </div>

                            <div className="mt-12">
                                <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-3xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <Award size={100} className="text-orange-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 relative z-10">
                                        <Award className="text-orange-500" /> Our Vision
                                    </h3>
                                    <p className="text-lg text-slate-700 font-medium italic leading-relaxed relative z-10">
                                        &quot;To become India’s most trusted digital lending support ecosystem by empowering customers, bankers, and partners through technology, transparency, and operational efficiency.&quot;
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="/intro/office-meeting.png"
                                    alt="Office Meeting"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 text-white pr-10">
                                    <div className="text-3xl font-bold mb-3">End-to-End Support</div>
                                    <p className="text-orange-100/90 text-lg font-medium">
                                        From eligibility evaluation to disbursement.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
}
