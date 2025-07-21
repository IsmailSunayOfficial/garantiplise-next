/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Уверете се, че този ред е премахнат или коментиран
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'garantiplise.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'garantiplise.com',
      },
    ],
    // unoptimized: true, // Можете да премахнете този ред, за да използвате Next.js Image Optimization
  },
}

export default nextConfig
