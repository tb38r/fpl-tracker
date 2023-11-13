/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    staticPageGenerationTimeout: 360,

  }


  module.exports = nextConfig