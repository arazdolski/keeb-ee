/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'keeb.ee',
        port: '',
      },
    ],
  },
};

export default nextConfig;
