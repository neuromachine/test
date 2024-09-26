/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
