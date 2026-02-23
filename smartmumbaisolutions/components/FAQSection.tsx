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
        <section className="py-24 bg-gray-50 border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Header & Filters */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                                Frequently Asked <span className="text-blue-600">Questions</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed">
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
                                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === category
                                        ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200"
                                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Accordion Questions */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left group"
                                    >
                                        <span className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {faq.question}
                                        </span>
                                        <span className={`text-slate-400 group-hover:text-blue-600 transition-all duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                                            <Plus size={24} strokeWidth={1.5} />
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
                                                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-base border-t border-slate-100 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Contact Support Card */}
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-3xl shadow-xl shadow-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Still have questions?</h4>
                                <p className="text-blue-50">
                                    Can't find the answer you're looking for? Please chat to our friendly team.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                            >
                                Contact Support <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
