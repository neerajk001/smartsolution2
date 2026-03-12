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
        <footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/footer.png"
                                alt="Smart Solutions"
                                width={280}
                                height={120}
                                className="object-contain w-auto h-24 md:h-28"
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Your trusted financial partner for loans and insurance. We simplify finance so you can focus on what matters most.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                                { icon: Instagram, href: "https://www.instagram.com/__smartsolutions__/", color: "hover:text-pink-600" },
                                { icon: Linkedin, href: "#", color: "hover:text-blue-700" }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className={`w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-slate-400 transition-all hover:bg-white hover:scale-110 ${social.color}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> Loans
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Personal Loan", href: "/loan/personal-loan" },
                                { name: "Business Loan", href: "/loan/business-loan" },
                                { name: "Home Loan", href: "/loan/home-loan" },
                                { name: "Loan Against Property", href: "/loan/mortgage-loan" },
                                { name: "Education Loan", href: "/loan/education-loan" },
                                { name: "Car Loan", href: "/loan/car-loan" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Insurance */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Insurance
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Health Insurance", href: "/insurance/health-insurance" },
                                { name: "Term Life Insurance", href: "/insurance/term-life" },
                                { name: "Car Insurance", href: "/insurance/car-insurance" },
                                { name: "Bike Insurance", href: "/insurance/bike-insurance" },
                                { name: "Loan Protector", href: "/insurance/loan-protector" },
                                { name: "EMI Protector", href: "/insurance/emi-protector" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-purple-500 rounded-full"></span> Contact Us
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-slate-400 group">
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Email Support</div>
                                    <a href="mailto:info@ssolutions.in" className="text-white hover:text-cyan-400 transition-colors">info@ssolutions.in</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-slate-400 group">
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Call Us</div>
                                    <a href="tel:+919870802207" className="text-white hover:text-cyan-400 transition-colors">+91 98708 02207</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-slate-400 group">
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Visit Us</div>
                                    <span className="text-white">Hindrajesthan Building, Office No. 236, 238, 240, 2nd Floor, Dadar East, Near Kailas Lasiwala, Opp. Chetan Bar, Dadar East, Mumbai 400014</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Smart Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm font-medium text-slate-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
