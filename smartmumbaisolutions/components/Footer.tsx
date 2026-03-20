import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-slate-900/50">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                            <Image
                                src="/footer.png"
                                alt="Smart Solutions"
                                width={280}
                                height={120}
                                className="object-contain w-auto h-24 md:h-28"
                            />
                        </Link>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm pr-4">
                            Your trusted financial partner for loans and insurance. We simplify finance so you can focus on what matters most.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "https://www.instagram.com/__smartsolutions__/" },
                                { icon: Linkedin, href: "#" }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:border-slate-700"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon size={18} strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-100 font-semibold text-[15px] mb-6 tracking-wide">
                            Loans
                        </h3>
                        <ul className="space-y-3.5">
                            {[
                                { name: "Personal Loan", href: "/loan/personal-loan" },
                                { name: "Business Loan", href: "/loan/business-loan" },
                                { name: "Home Loan", href: "/loan/home-loan" },
                                { name: "Loan Against Property", href: "/loan/mortgage-loan" },
                                { name: "Education Loan", href: "/loan/education-loan" },
                                { name: "Car Loan", href: "/loan/car-loan" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[15px] text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 mr-0.5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-slate-400" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Insurance */}
                    <div>
                        <h3 className="text-slate-100 font-semibold text-[15px] mb-6 tracking-wide">
                            Insurance
                        </h3>
                        <ul className="space-y-3.5">
                            {[
                                { name: "Health Insurance", href: "/insurance/health-insurance" },
                                { name: "Term Life Insurance", href: "/insurance/term-life" },
                                { name: "Car Insurance", href: "/insurance/car-insurance" },
                                { name: "Bike Insurance", href: "/insurance/bike-insurance" },
                                { name: "Loan Protector", href: "/insurance/loan-protector" },
                                { name: "EMI Protector", href: "/insurance/emi-protector" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[15px] text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 mr-0.5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-slate-400" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-slate-100 font-semibold text-[15px] mb-6 tracking-wide">
                            Contact Us
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3.5 text-slate-500 group">
                                <div className="mt-0.5 text-slate-600 group-hover:text-slate-300 transition-colors">
                                    <Mail size={18} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <a href="mailto:info@ssolutions.in" className="text-[15px] hover:text-white transition-colors">info@ssolutions.in</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3.5 text-slate-500 group">
                                <div className="mt-0.5 text-slate-600 group-hover:text-slate-300 transition-colors">
                                    <Phone size={18} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <a href="tel:+919870802207" className="text-[15px] hover:text-white transition-colors">+91 98708 02207</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3.5 text-slate-500 group">
                                <div className="mt-0.5 text-slate-600 group-hover:text-slate-300 transition-colors shrink-0">
                                    <MapPin size={18} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="text-[14px] leading-relaxed block">
                                        Hindrajesthan Building, Office No. 236, 238, 240, 2nd Floor, Dadar East, Near Kailas Lasiwala, Opp. Chetan Bar, Mumbai 400014
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-[14px]">
                        &copy; {new Date().getFullYear()} Smart Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-[14px] text-slate-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
