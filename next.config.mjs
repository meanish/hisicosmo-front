/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tranquilbytes.com',
                port: '', // Leave port empty for the default https port (443)
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
            },
        ],
    },
};

export default nextConfig;
