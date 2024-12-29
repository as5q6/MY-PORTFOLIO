/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['blog.amigoscode.com', 'cdn.dribbble.com', 'images.unsplash.com'],
        unoptimized: true,
    },
}

module.exports = nextConfig 