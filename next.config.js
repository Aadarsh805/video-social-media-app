/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.redd.it', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
