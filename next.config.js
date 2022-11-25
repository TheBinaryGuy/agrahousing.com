/** @type {import('next').NextConfig} */
module.exports = {
    // Uncomment for self-hosting via Docker
    // output: 'standalone',
    swcMinify: true,
    images: {
        domains: [
            'dummyimage.com',
            process.env.NEXT_PUBLIC_DOMAIN ?? 'agrahousing.com',
        ],
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        newNextLinkBehavior: true,
        fontLoaders: [
            {
                loader: '@next/font/google',
                options: {
                    subsets: ['latin'],
                },
            },
        ],
    },
    reactStrictMode: true,
};
