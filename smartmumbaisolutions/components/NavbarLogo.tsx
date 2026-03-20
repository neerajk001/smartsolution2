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
                        width={180}
                        height={70}
                        className="object-contain object-center group-hover:scale-[1.02] transition-transform w-auto h-14 md:h-16"
                        priority
                    />
                </span>
            ) : (
                <Image
                    src="/company-logo.png"
                    alt="Smart Solutions"
                    width={180}
                    height={70}
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform w-auto h-16 md:h-20"
                    priority
                />
            )}
        </Link>
    );
}
