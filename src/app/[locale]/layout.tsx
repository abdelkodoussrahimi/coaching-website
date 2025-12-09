import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter, Poppins, Cairo, Urbanist } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const cairo = Cairo({
    subsets: ["latin", "arabic"],
    variable: "--font-cairo",
    display: "swap",
});

const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
    display: "swap",
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return {
        title: "Premium Coaching | Digital Excellence",
        description: "Elevate your digital presence with premium coaching services.",
        lang: locale,
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Get messages - using direct import for reliability
    const messages = (await import(`@/messages/${locale}.json`)).default;

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable,
                    poppins.variable,
                    cairo.variable,
                    urbanist.variable
                )}
            >
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <SmoothScroll>
                        <Navbar />
                        <main className="min-h-screen">{children}</main>
                        <Footer />
                    </SmoothScroll>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
