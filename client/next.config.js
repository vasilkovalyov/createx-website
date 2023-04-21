/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['res.cloudinary.com', '/'],
    deviceSizes: [480, 768, 1024, 1280, 1366, 1440, 1680, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
