/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you're using
  },
  // Remove standalone output as it might cause issues
  // output: 'standalone',
  // Remove experimental features
  // experimental: {
  //   serverActions: true,
  // },
  // Add build optimization
  swcMinify: true,
  // Add proper image optimization
  images: {
    unoptimized: true, // Disable image optimization during build
  },
}

export default nextConfig
