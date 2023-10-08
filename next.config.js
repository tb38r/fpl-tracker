/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    staticPageGenerationTimeout: 120,

  }


  module.exports = nextConfig