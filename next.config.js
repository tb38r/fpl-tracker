/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    staticPageGenerationTimeout: 120,
    fetchCache: 'force-no-store',

  }


  module.exports = nextConfig