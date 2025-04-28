/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you're using
  },
  // Enable static exports
  output: 'standalone',
  // Add any other domains you need
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
