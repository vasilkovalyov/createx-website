/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // assetPrefix: '/snow-agency',
  // basePath: '/snow-agency',
  async redirects() {
    const defaultLocale = `/${process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en'}`
    return [
      {
        source: '/',
        destination: defaultLocale,
        permanent: true,
      },
    ]
  },
}
