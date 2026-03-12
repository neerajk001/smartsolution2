"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowUpRight,
    ArrowRight,
    Zap,
    Briefcase,
    Home,
    Car,
    GraduationCap,
    Heart,
    Shield,
    Umbrella
} from "lucide-react";
import { useState, useEffect } from "react";
import ApplicationModal from "@/components/forms/ApplicationModal";
import { getLoanProducts } from "@/lib/api";
import { extractROI } from "@/lib/utils/roi";
import { loans, insurances } from "@/lib/products";

const iconMap: Record<string, any> = {
    "personal-loan": Zap,
    "business-loan": Briefcase,
    "home-loan": Home,
    "car-loan": Car,
    "education-loan": GraduationCap,
    "mortgage-loan": Home,
    "health-insurance": Heart,
    "term-life": Shield,
    "car-insurance": Car,
    "bike-insurance": Zap,
    "loan-protector": Umbrella,
    "emi-protector": Shield
};

const ProductCard = ({ product, index, category, onApplyClick }: { product: any, index: number, category: string, onApplyClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden p-5"
        >
            {/* Metric badge — top left (fix: no extra ROI suffix) */}
            {product.metric && (
                <span className="absolute top-3 left-3 bg-orange-50 text-orange-500 text-[10px] font-bold px-2.5 py-1 rounded-full border border-orange-100 z-10">
                    {product.metric}
                </span>
            )}

            {/* Horizontal layout */}
            <div className="flex items-center gap-4 mt-5">
                {/* Product image with soft bubble background */}
                <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-orange-50 rounded-2xl p-2">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-extrabold text-slate-900 mb-0.5 leading-tight">
                        {product.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">{product.detail}</p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onApplyClick();
                        }}
                        className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
                    >
                        Apply <ArrowUpRight size={13} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProductShowcase() {
    const [showApplicationModal, setShowApplicationModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<{
        slug: string;
        title: string;
        category: "Loan" | "Insurance";
    } | null>(null);
    const [roiMap, setRoiMap] = useState<Record<string, string>>({});
    const [loadingROI, setLoadingROI] = useState(false);

    useEffect(() => {
        async function loadROI() {
            try {
                setLoadingROI(true);
                const response = await getLoanProducts();

                if (response.success && response.products) {
                    const roiData: Record<string, string> = {};
                    response.products.forEach((product) => {
                        roiData[product.slug] = extractROI(product.interestRate);
                    });
                    setRoiMap(roiData);
                }
            } catch (error) {
                console.warn('Error loading ROI:', error);
            } finally {
                setLoadingROI(false);
            }
        }
        loadROI();
    }, []);

    const getDisplayLoans = () => {
        return loans.map((loan) => {
            const roi = roiMap[loan.slug] || loan.metric;
            return { ...loan, metric: roi };
        });
    };

    const handleApplyClick = (product: any, category: "Loan" | "Insurance") => {
        setSelectedProduct({
            slug: product.slug,
            title: product.title,
            category: category,
        });
        setShowApplicationModal(true);
    };

    return (
        <>
            <section className="py-32 bg-gray-50 relative overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] -translate-x-1/2 -z-10 mix-blend-multiply" />
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-amber-50/60 rounded-full blur-[120px] translate-x-1/2 -z-10 mix-blend-multiply" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">

                    {/* Loans Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Financial Solutions</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                Loans for every <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">milestone.</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                Whether you're buying a home, starting a business, or needing personal funds, we have tailored options for you.
                            </p>
                        </div>
                        <Link
                            href="/loan"
                            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-orange-200 text-orange-700 font-semibold hover:bg-orange-50 hover:shadow-md transition-all"
                        >
                            View All Loans <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Loans Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {getDisplayLoans().map((loan, index) => (
                            <ProductCard
                                key={loan.slug || index}
                                product={loan}
                                index={index}
                                category="loan"
                                onApplyClick={() => handleApplyClick(loan, "Loan")}
                            />
                        ))}
                    </div>

                    {/* Insurance Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-3 block">Protection Plans</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                Insurance that <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">cares.</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                Safeguard your health, life, and assets with our comprehensive insurance policies.
                            </p>
                        </div>
                        <Link
                            href="/insurance"
                            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-amber-200 text-amber-700 font-semibold hover:bg-amber-50 hover:shadow-md transition-all"
                        >
                            View All Plans <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Insurance Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insurances.map((insurance, index) => (
                            <ProductCard
                                key={index}
                                product={insurance}
                                index={index}
                                category="insurance"
                                onApplyClick={() => handleApplyClick(insurance, "Insurance")}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {selectedProduct && (
                <ApplicationModal
                    isOpen={showApplicationModal}
                    onClose={() => {
                        setShowApplicationModal(false);
                        setSelectedProduct(null);
                    }}
                    productType={selectedProduct.slug}
                    productTitle={selectedProduct.title}
                    category={selectedProduct.category}
                />
            )}
        </>
    );
}
