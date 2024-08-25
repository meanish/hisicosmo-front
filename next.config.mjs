/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tranquilbytes.com',
                port: '',
            },
        ],
    }
};

export default nextConfig;
