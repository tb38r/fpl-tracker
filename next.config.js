/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },

    staticPageGenerationTimeout: 480,

  }


  module.exports = nextConfig