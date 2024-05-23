/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    //output: 'export',
    images: {
        remotePatterns: [
           {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            }
        ]
    }
};

module.exports = nextConfig;