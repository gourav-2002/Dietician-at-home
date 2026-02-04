/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
        // Image optimization settings
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Enable strict mode for better development experience
    reactStrictMode: true,

    // Optimize for production
    swcMinify: true,

    // Compression for better performance
    compress: true,

    // Power by header removal for security
    poweredByHeader: false,

    // Redirects for old hash-based URLs to new clean URLs
    async redirects() {
        return [
            {
                source: '/',
                has: [{ type: 'query', key: 'hash', value: 'contact' }],
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'hash', value: 'pricing' }],
                destination: '/pricing',
                permanent: true,
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'hash', value: 'how-it-works' }],
                destination: '/how-it-works',
                permanent: true,
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'hash', value: 'programs' }],
                destination: '/programs',
                permanent: true,
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'hash', value: 'team' }],
                destination: '/team',
                permanent: true,
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'hash', value: 'app' }],
                destination: '/app',
                permanent: true,
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'hash', value: 'corporate' }],
                destination: '/corporate',
                permanent: true,
            },
        ];
    },

    // Headers for security and performance
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;