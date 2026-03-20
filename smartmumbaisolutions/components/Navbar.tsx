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
    const [mobileLoansOpen, setMobileLoansOpen] = useState(false);
    const [mobileInsuranceOpen, setMobileInsuranceOpen] = useState(false);

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
            <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center transition-all duration-500 border-b ${scrolled ? 'bg-white/75 backdrop-blur-xl border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-1.5' : 'bg-transparent border-transparent py-4 px-4'}`}>
                <div className="w-full max-w-[1280px] px-6 flex items-center justify-between">
                    {/* Logo */}
                    <NavbarLogo scrolled={scrolled} />

                    {/* Navigation */}
                    <nav className="hidden md:flex flex-1 items-center justify-center">
                        <div className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-all duration-500 ${scrolled ? 'bg-slate-50/50 border border-slate-200/50 shadow-sm' : ''}`}>
                            <Link href="/" className="px-4 py-1.5 text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">
                                Home
                            </Link>

                            {/* Loans Dropdown */}
                            <div className="group relative">
                                <button className="flex items-center gap-1.5 px-4 py-1.5 text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">
                                    Loans <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[480px]">
                                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-200/60 grid grid-cols-2 gap-1.5">
                                        {[
                                            { name: "Personal Loan", href: "/loan/personal-loan", desc: "Quick funds, no collateral" },
                                            { name: "Business Loan", href: "/loan/business-loan", desc: "Scale your enterprise" },
                                            { name: "Home Loan", href: "/loan/home-loan", desc: "Buy your dream home" },
                                            { name: "Loan Against Property", href: "/loan/mortgage-loan", desc: "Unlock property value" },
                                            { name: "Education Loan", href: "/loan/education-loan", desc: "Fund your future" },
                                            { name: "Car Loan", href: "/loan/car-loan", desc: "Drive your dream car" }
                                        ].map((item) => (
                                            <Link key={item.href} href={item.href} className="flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                                <span className="text-[14px] font-semibold text-slate-800 group-hover/item:text-blue-600 transition-colors">{item.name}</span>
                                                <span className="text-[12px] text-slate-500 mt-0.5">{item.desc}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Insurance Dropdown */}
                            <div className="group relative">
                                <button className="flex items-center gap-1.5 px-4 py-1.5 text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">
                                    Insurance <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[480px]">
                                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-200/60 grid grid-cols-2 gap-1.5">
                                        {[
                                            { name: "Health Insurance", href: "/insurance/health-insurance", desc: "Comprehensive medical cover" },
                                            { name: "Term Life", href: "/insurance/term-life", desc: "Secure your family" },
                                            { name: "Car Insurance", href: "/insurance/car-insurance", desc: "Protect your vehicle" },
                                            { name: "Bike Insurance", href: "/insurance/bike-insurance", desc: "Two-wheeler protection" },
                                            { name: "Loan Protector", href: "/insurance/loan-protector", desc: "Cover your liabilities" },
                                            { name: "EMI Protector", href: "/insurance/emi-protector", desc: "Safeguard your EMI payments" }
                                        ].map((item) => (
                                            <Link key={item.href} href={item.href} className="flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                                <span className="text-[14px] font-semibold text-slate-800 group-hover/item:text-blue-600 transition-colors">{item.name}</span>
                                                <span className="text-[12px] text-slate-500 mt-0.5">{item.desc}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link href="/calculator" className="px-4 py-1.5 text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">
                                Calculator
                            </Link>

                            <Link href="/about" className="px-4 py-1.5 text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">
                                About Us
                            </Link>
                        </div>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setIsExpertModalOpen(true)}
                            className="hidden md:flex items-center justify-center px-5 py-2 text-[14px] font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] active:scale-95"
                        >
                            Talk to Expert
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
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

                        {/* Loans - collapsible */}
                        <div className="border-b border-orange-100 pb-4">
                            <button
                                type="button"
                                onClick={() => setMobileLoansOpen(!mobileLoansOpen)}
                                className="flex items-center justify-between w-full text-left text-sm font-bold text-orange-600 uppercase tracking-wider py-2"
                            >
                                Loans
                                <ChevronDown size={18} className={`transition-transform duration-200 ${mobileLoansOpen ? "rotate-180" : ""}`} />
                            </button>
                            {mobileLoansOpen && (
                                <div className="grid grid-cols-1 gap-3 pl-2 pt-1">
                                    <Link href="/loan/personal-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors py-1">Personal Loan</Link>
                                    <Link href="/loan/home-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors py-1">Home Loan</Link>
                                    <Link href="/loan/business-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors py-1">Business Loan</Link>
                                    <Link href="/loan/mortgage-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors py-1">Loan Against Property</Link>
                                    <Link href="/loan/education-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors py-1">Education Loan</Link>
                                    <Link href="/loan/car-loan" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-orange-600 transition-colors py-1">Car Loan</Link>
                                </div>
                            )}
                        </div>

                        {/* Insurance - collapsible */}
                        <div className="border-b border-orange-100 pb-4">
                            <button
                                type="button"
                                onClick={() => setMobileInsuranceOpen(!mobileInsuranceOpen)}
                                className="flex items-center justify-between w-full text-left text-sm font-bold text-amber-600 uppercase tracking-wider py-2"
                            >
                                Insurance
                                <ChevronDown size={18} className={`transition-transform duration-200 ${mobileInsuranceOpen ? "rotate-180" : ""}`} />
                            </button>
                            {mobileInsuranceOpen && (
                                <div className="grid grid-cols-1 gap-3 pl-2 pt-1">
                                    <Link href="/insurance/health-insurance" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors py-1">Health Insurance</Link>
                                    <Link href="/insurance/term-life" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors py-1">Term Life</Link>
                                    <Link href="/insurance/car-insurance" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors py-1">Car Insurance</Link>
                                    <Link href="/insurance/bike-insurance" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors py-1">Bike Insurance</Link>
                                    <Link href="/insurance/loan-protector" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors py-1">Loan Protector</Link>
                                    <Link href="/insurance/emi-protector" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-amber-600 transition-colors py-1">EMI Protector</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-orange-100 pb-4">Calculator</Link>

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
