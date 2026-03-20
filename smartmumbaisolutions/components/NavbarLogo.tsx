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
                <span className="flex items-center justify-center p-1 backdrop-blur-md transition-all duration-300">
                    <Image
                        src="/company-logo.png"
                        alt="Smart Solutions"
                        width={120}
                        height={48}
                        className="object-contain object-center group-hover:scale-[1.02] transition-transform w-auto h-10 md:h-12"
                        priority
                    />
                </span>
            ) : (
                <Image
                    src="/company-logo.png"
                    alt="Smart Solutions"
                    width={120}
                    height={48}
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform w-auto h-12 md:h-14"
                    priority
                />
            )}
        </Link>
    );
}
