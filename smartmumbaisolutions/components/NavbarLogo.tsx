"use client";

import Link from "next/link";
import Image from "next/image";

interface NavbarLogoProps {
    scrolled?: boolean;
}

export default function NavbarLogo({ scrolled = false }: NavbarLogoProps) {
    return (
        <Link href="/" className="flex items-center shrink-0 group">
            {scrolled ? (
                <span className="flex items-center justify-center rounded-2xl p-1.5 backdrop-blur-md transition-all duration-300">
                    <Image
                        src="/company-logo.png"
                        alt="Smart Solutions"
                        width={96}
                        height={96}
                        className="object-contain object-center group-hover:scale-105 transition-transform w-24 h-24"
                    />
                </span>
            ) : (
                <Image
                    src="/company-logo.png"
                    alt="Smart Solutions"
                    width={96}
                    height={96}
                    className="object-contain object-center group-hover:scale-105 transition-transform w-24 h-24"
                />
            )}
        </Link>
    );
}
