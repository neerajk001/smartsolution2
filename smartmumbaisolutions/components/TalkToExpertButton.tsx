"use client";

import { Phone } from "lucide-react";

interface TalkToExpertButtonProps {
    onClick: () => void;
    className?: string;
    /** Show on desktop only by default */
    showDesktopOnly?: boolean;
}

export default function TalkToExpertButton({
    onClick,
    className = "",
    showDesktopOnly = true,
}: TalkToExpertButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-slate-900 hover:bg-orange-600 text-white px-7 py-3 rounded-full text-base font-semibold transition-all shadow-lg shadow-orange-900/10 hover:shadow-orange-200 items-center gap-2 group ${showDesktopOnly ? "hidden md:flex" : "flex"} ${className}`}
        >
            <Phone size={18} className="text-orange-200 group-hover:text-white group-hover:rotate-12 transition-all" />
            Talk to Expert
        </button>
    );
}
