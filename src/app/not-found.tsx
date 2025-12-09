'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-400 mb-8">Could not find requested resource</p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
