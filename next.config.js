/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/contact/:path*',
        destination: '/form/:path*',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
