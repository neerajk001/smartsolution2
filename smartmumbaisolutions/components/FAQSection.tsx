"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
    "General",
    "Loans",
    "Insurance",
    "Repayment",
];

const faqs = [
    {
        category: "General",
        question: "How do I apply for a service?",
        answer: "Applying is simple! You can click on the 'Apply' button on any product card, or directly call our expert team. We will guide you through the documentation and process.",
    },
    {
        category: "General",
        question: "What documents are required?",
        answer: "Typically, you'll need ID proof (Aadhar/PAN), address proof, and income proof (ITR/Salary Slips). Specific requirements vary based on the loan or insurance product.",
    },
    {
        category: "General",
        question: "Is my data secure with Smart Solutions?",
        answer: "Absolutely. We use bank-grade encryption to ensure your personal and financial data is 100% secure and never shared without consent.",
    },
    {
        category: "Loans",
        question: "What is the minimum credit score required?",
        answer: "While a score of 750+ is ideal, we have partners who cater to various credit profiles. Contact us for a personalized assessment.",
    },
    {
        category: "Loans",
        question: "What is the maximum loan amount I can get?",
        answer: "The loan amount depends on your income, credit score, and existing liabilities. Our experts can calculate your eligibility instantly.",
    },
    {
        category: "Loans",
        question: "How long does the approval process take?",
        answer: "For personal loans, approval can be as fast as 24 hours. Business and home loans may take 3-5 working days depending on document verification.",
    },
    {
        category: "Insurance",
        question: "How do I claim my insurance?",
        answer: "In case of a claim, inform our support team immediately. We will assist you in filing the claim with the respective insurance provider and ensure a smooth settlement.",
    },
    {
        category: "Insurance",
        question: "Is medical check-up mandatory for health insurance?",
        answer: "It depends on the policy and your age. Many policies for young individuals don't require a pre-policy medical check-up.",
    },
    {
        category: "Repayment",
        question: "Can I prepay my loan?",
        answer: "Yes, most loans allow part-payment or foreclosure after a certain period. Charges may apply depending on the lender's policy.",
    },
    {
        category: "Repayment",
        question: "What happens if I miss an EMI?",
        answer: "Missing an EMI can impact your credit score and attract penalty charges. We recommend setting up auto-debit to avoid accidental misses.",
    },
];

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState("General");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

    return (
        <section className="py-24 md:py-32 bg-slate-50/50 border-t border-slate-100/50 relative overflow-hidden">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column: Header & Filters */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="inline-flex items-center gap-1.5 text-slate-800 font-semibold tracking-wide uppercase text-[11px] mb-4 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                                Support center
                            </span>
                            <h2 className="text-4xl md:text-[3rem] font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                Frequently Asked <span className="text-slate-400">Questions</span>
                            </h2>
                            <p className="text-[17px] text-slate-500 leading-relaxed font-medium">
                                Everything you need to know about our services, loan processes, insurance policies, and billing.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setOpenIndex(null);
                                    }}
                                    className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 border ${activeCategory === category
                                        ? "bg-slate-900 text-white border-slate-900 shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Accordion Questions */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-3">
                            {filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-slate-200/60 rounded-[16px] bg-white overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-5 text-left group"
                                    >
                                        <span className="text-[15px] font-bold text-slate-900 group-hover:text-slate-700 transition-colors pr-8">
                                            {faq.question}
                                        </span>
                                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:text-slate-900 transition-all duration-300 ${openIndex === index ? "rotate-45 bg-slate-100 text-slate-900" : ""}`}>
                                            <Plus size={18} strokeWidth={2} />
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-5 pb-5 text-slate-500 leading-relaxed text-[15px] border-t border-slate-100 pt-4 font-medium">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Minimal Contact Box */}
                        <div className="bg-white border border-slate-200/60 p-8 rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-[17px] font-bold text-slate-900 mb-1">Still have questions?</h4>
                                <p className="text-[14px] text-slate-500 font-medium">
                                    Can't find the answer you're looking for? Chat with our friendly team.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="h-10 px-6 bg-slate-900 text-white rounded-full text-[14px] font-medium transition-all shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:bg-slate-800 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] active:scale-95 flex items-center gap-2 whitespace-nowrap"
                            >
                                Contact Support <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
