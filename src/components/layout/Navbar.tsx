"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from 'next-intl';

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Results", href: "/results" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Programs", href: "/programs" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const locale = useLocale();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Function to create locale-aware links
    const getLocalizedHref = (href: string) => `/${locale}${href}`;

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-black/40">
                {/* Logo */}
                <Link href={getLocalizedHref("/")} className="flex items-center gap-2">
                    <span className="font-heading text-xl font-bold text-white">
                        Coach<span className="text-primary">Brand</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={getLocalizedHref(link.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === getLocalizedHref(link.href) ? "text-primary" : "text-white/80"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA, Language Switcher & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <Button
                        className="hidden lg:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                        size="sm"
                    >
                        Book a Call
                    </Button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white hover:text-primary transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "absolute top-full left-0 right-0 mt-2 p-4 lg:hidden",
                    isOpen ? "block" : "hidden"
                )}
            >
                <div className="mx-4 rounded-2xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={getLocalizedHref(link.href)}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-primary",
                                    pathname === getLocalizedHref(link.href) ? "text-primary" : "text-white/80"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                            Book a Call
                        </Button>
                    </nav>
                </div>
            </motion.div>
        </motion.header>
    );
}
