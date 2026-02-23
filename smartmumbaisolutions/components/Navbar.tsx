"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ExpertModal from "./ExpertModal";
import NavbarLogo from "./NavbarLogo";
import TalkToExpertButton from "./TalkToExpertButton";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-4 py-1 px-4 bg-white/95 backdrop-blur-sm border-b border-slate-100/80 transition-all duration-300">
                <div className="w-full max-w-[1280px] flex items-center justify-between gap-4">
                    {/* Logo - blur only on scroll */}
                    <NavbarLogo scrolled={scrolled} />

                    {/* Navbar - only as wide as links (narrower white bg on x-axis) */}
                    <nav
                        className={`flex-none w-fit flex items-center justify-center rounded-full transition-all duration-300 ${scrolled
                            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-orange-900/5 border border-orange-100/50 py-1.5 px-3"
                            : "bg-transparent py-2 px-2"
                            }`}
                    >
                        <div className="hidden md:flex items-center gap-8 px-4 py-1.5 shrink-0">
                            <Link href="/" className="text-base font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                                Home
                            </Link>

                            {/* Loans Dropdown Trigger */}
                            <div className="group relative">
                                <button className="flex items-center gap-1 text-base font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                                    Loans <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                                </button>
                                {/* Dropdown Content */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[500px]">
                                    <div className="bg-white rounded-2xl p-4 shadow-xl border border-orange-100 ring-1 ring-black/5 grid grid-cols-2 gap-2">
                                        {[
                                            { name: "Personal Loan", href: "/loan/personal-loan" },
                                            { name: "Business Loan", href: "/loan/business-loan" },
                                            { name: "Home Loan", href: "/loan/home-loan" },
                                            { name: "Loan Against Property", href: "/loan/mortgage-loan" },
                                            { name: "Education Loan", href: "/loan/education-loan" },
                                            { name: "Car Loan", href: "/loan/car-loan" }
                                        ].map((item) => (
                                            <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">
                                                    {item.name[0]}
                                                </div>
                                                <span className="text-sm font-medium text-slate-700 group-hover:text-orange-700 transition-colors">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Insurance Dropdown Trigger */}
                            <div className="group relative">
                                <button className="flex items-center gap-1 text-base font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                                    Insurance <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[500px]">
                                    <div className="bg-white rounded-2xl p-4 shadow-xl border border-orange-100 ring-1 ring-black/5 grid grid-cols-2 gap-2">
                                        {[
                                            { name: "Health Insurance", href: "/insurance/health-insurance" },
                                            { name: "Term Life", href: "/insurance/term-life" },
                                            { name: "Car Insurance", href: "/insurance/car-insurance" },
                                            { name: "Bike Insurance", href: "/insurance/bike-insurance" },
                                            { name: "Loan Protector", href: "/insurance/loan-protector" },
                                            { name: "EMI Protector", href: "/insurance/emi-protector" }
                                        ].map((item) => (
                                            <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">
                                                    {item.name[0]}
                                                </div>
                                                <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700 transition-colors">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link href="/about" className="text-base font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                                About Us
                            </Link>
                        </div>
                    </nav>

                    {/* Talk to Expert + mobile menu - separate from navbar */}
                    <div className="flex items-center shrink-0 gap-4">
                        <TalkToExpertButton onClick={() => setIsExpertModalOpen(true)} />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto animate-in fade-in slide-in-from-top-10 duration-200">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-orange-100 pb-4">Home</Link>

                        <div className="space-y-4 pb-4 border-b border-orange-100">
                            <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wider">Loans</h3>
                            <div className="grid grid-cols-1 gap-3 pl-2">
                                <Link href="/loan/personal-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors">Personal Loan</Link>
                                <Link href="/loan/home-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors">Home Loan</Link>
                                <Link href="/loan/business-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors">Business Loan</Link>
                            </div>
                        </div>

                        <div className="space-y-4 pb-4 border-b border-orange-100">
                            <h3 className="text-sm font-bold text-amber-600 uppercase tracking-wider">Insurance</h3>
                            <div className="grid grid-cols-1 gap-3 pl-2">
                                <Link href="/insurance/health-insurance" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors">Health Insurance</Link>
                                <Link href="/insurance/term-life" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors">Term Life</Link>
                            </div>
                        </div>

                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-orange-100 pb-4">About Us</Link>

                        <button
                            onClick={() => {
                                setIsExpertModalOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 mt-4 hover:shadow-orange-300 transition-shadow"
                        >
                            Talk to Expert
                        </button>
                    </div>
                </div>
            )}

            <ExpertModal isOpen={isExpertModalOpen} onClose={() => setIsExpertModalOpen(false)} />
        </>
    );
}
