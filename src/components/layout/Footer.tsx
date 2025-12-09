import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "E-commerce Website", href: "/services/ecommerce" },
            { name: "WhatsApp Marketing", href: "/services/whatsapp" },
            { name: "Email Marketing", href: "/services/email" },
            { name: "Influencer Growth", href: "/services/influencer" },
            { name: "SEO Optimization", href: "/services/seo" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Me", href: "/about" },
            { name: "Results", href: "/results" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms & Conditions", href: "/terms" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="font-heading text-2xl font-bold text-white">
                                Coach<span className="text-primary">Brand</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Elevating your digital presence with premium strategies and world-class design.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Youtube size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-heading font-semibold text-lg mb-6">{column.title}</h3>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/60 hover:text-primary transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} CoachBrand. All rights reserved.
                    </p>
                    <p className="text-white/40 text-sm">
                        Designed with excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
