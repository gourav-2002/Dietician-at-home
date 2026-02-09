import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="bg-white min-h-[80vh] flex items-center justify-center font-sans text-[#1F2937] relative overflow-hidden mt-16">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#217328]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#217328]/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-2xl mx-auto px-6 text-center relative z-10 py-16">
                {/* 404 number */}
                <div className="mb-6">
                    <span className="text-[120px] md:text-[160px] font-extrabold leading-none text-[#217328]/20 select-none">
                        404
                    </span>
                </div>

                {/* Badge */}
                <span className="inline-block px-4 py-2 bg-[#F0FDF4] text-[#217328] rounded-full text-[12px] font-bold tracking-widest uppercase mb-6 border border-[#217328]/20">
                    Page Not Found
                </span>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-4 leading-tight">
                    Oops! This page seems to have <span className="text-[#217328]">gone off-diet</span>
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg text-[#6B7280] max-w-lg mx-auto leading-relaxed mb-10">
                    The page you are looking for might have been moved, renamed, or no longer exists. Let us help you find what you need.
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#217328] text-white font-bold rounded-xl hover:bg-[#1a5c20] transition-colors shadow-lg shadow-[#217328]/20"
                    >
                        <Home className="w-5 h-5" />
                        Go to Homepage
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#F0FDF4] text-[#217328] font-bold rounded-xl hover:bg-[#e0f5e4] transition-colors border border-[#217328]/20"
                    >
                        <Search className="w-5 h-5" />
                        Contact Us
                    </Link>
                </div>

                
            </div>
        </div>
    );
}
