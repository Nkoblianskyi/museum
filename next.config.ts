/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://rbl.palladium.expert/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
