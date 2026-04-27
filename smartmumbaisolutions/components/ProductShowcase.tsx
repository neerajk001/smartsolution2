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
            initial={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white rounded-[20px] border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden p-6"
        >
            {/* Minimal Metric Badge */}
            {product.metric && (
                <span className="absolute top-4 right-4 bg-slate-50 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-200/60 z-10 transition-colors group-hover:bg-slate-100 group-hover:text-slate-900">
                    {product.metric}
                </span>
            )}

            {/* Vertical/Horizontal layout */}
            <div className="flex flex-col gap-5 h-full">
                {/* Product image/icon container with refined styling */}
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-100/80 rounded-[14px] p-2.5 transition-transform duration-500 group-hover:scale-105 group-hover:bg-slate-100">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain mix-blend-multiply"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col min-w-0">
                    <h3 className="text-[17px] font-bold text-slate-900 mb-1.5 leading-tight tracking-tight">
                        {product.title}
                    </h3>
                    <p className="text-slate-500 text-[14px] leading-relaxed mb-6 flex-1 pr-6">{product.detail}</p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onApplyClick();
                        }}
                        className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold transition-all duration-300 group/btn mt-auto px-4 py-2.5 rounded-lg shadow-md shadow-blue-600/25"
                    >
                        Apply <ArrowUpRight size={14} className="text-white group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-all" />
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
            <section className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden border-b border-slate-100/50">
                {/* Clean Structural Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="container mx-auto px-6 max-w-[1280px] relative z-10">

                    {/* Loans Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 text-blue-600 font-semibold tracking-wide uppercase text-[11px] mb-4 bg-blue-50/50 px-2.5 py-1 rounded-md border border-blue-100/50">Financial Solutions</span>
                            <h2 className="text-4xl md:text-[2.75rem] font-bold text-slate-900 mb-4 tracking-[-0.02em] leading-tight">
                                Loans for every milestone.
                            </h2>
                            <p className="text-[17px] text-slate-500 leading-relaxed max-w-lg">
                                Whether you're buying a home, starting a business, or needing personal funds, we have tailored options.
                            </p>
                        </div>
                        <Link
                            href="/loan"
                            className="hidden md:flex items-center gap-2 h-10 px-5 rounded-full bg-white border border-slate-200 text-slate-700 text-[14px] font-medium hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm"
                        >
                            View All Loans <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Loans Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
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
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold tracking-wide uppercase text-[11px] mb-4 bg-emerald-50/50 px-2.5 py-1 rounded-md border border-emerald-100/50">Protection Plans</span>
                            <h2 className="text-4xl md:text-[2.75rem] font-bold text-slate-900 mb-4 tracking-[-0.02em] leading-tight">
                                Insurance that cares.
                            </h2>
                            <p className="text-[17px] text-slate-500 leading-relaxed max-w-lg">
                                Safeguard your health, life, and assets with our comprehensive insurance policies.
                            </p>
                        </div>
                        <Link
                            href="/insurance"
                            className="hidden md:flex items-center gap-2 h-10 px-5 rounded-full bg-white border border-slate-200 text-slate-700 text-[14px] font-medium hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm"
                        >
                            View All Plans <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Insurance Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
