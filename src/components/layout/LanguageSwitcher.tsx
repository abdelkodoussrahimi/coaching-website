'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/routing';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

type Locale = (typeof routing.locales)[number];

const languageNames: Record<Locale, { name: string; flag: string }> = {
    en: { name: 'English', flag: '🇺🇸' },
    fr: { name: 'Français', flag: '🇫🇷' },
    ar: { name: 'العربية', flag: '🇸🇦' },
};

export default function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!menuRef.current) return;

        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                { opacity: 0, y: -10, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' }
            );
        }
    }, [isOpen]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const switchLocale = (newLocale: Locale) => {
        // Extract the path after the locale
        const pathWithoutLocale = pathname.replace(`/${locale}`, '');
        const newPath = `/${newLocale}${pathWithoutLocale}`;

        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/10 hover:border-primary/50"
                aria-label="Select language"
                title={languageNames[locale].name}
            >
                <span className="text-2xl">{languageNames[locale].flag}</span>
            </button>

            {isOpen && (
                <div
                    ref={menuRef}
                    className="absolute right-0 mt-2 w-48 rounded-lg bg-[#0A0F1F] border border-gold/20 shadow-xl overflow-hidden z-50"
                >
                    {routing.locales.map((loc) => (
                        <button
                            key={loc}
                            onClick={() => switchLocale(loc)}
                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gold/10 transition-colors duration-200 ${locale === loc ? 'bg-gold/20' : ''
                                }`}
                        >
                            <span className="text-2xl">{languageNames[loc].flag}</span>
                            <span className={`text-sm font-medium ${locale === loc ? 'text-gold' : 'text-white'}`}>
                                {languageNames[loc].name}
                            </span>
                            {locale === loc && (
                                <svg
                                    className="w-4 h-4 text-gold ml-auto"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
