// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    sw: 'service-worker.js',
    register: true,
  },
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",    
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // // Fixes npm packages that depend on `fs` module
    // if (!isServer) {
    //   config.node = {
    //     fs: 'empty'
    //   }
    // }
    return config;
  },
  // webpack: (config }) => {
  //     config.module.push({
  //        plugins: [
  //         new BrowserSyncPlugin({
  //         // browse to http://localhost:3000/ during development,
  //         // ./public directory is being served
  //         host: 'localhost',
  //         port: 3000,
  //         server: { baseDir: ['pages'] }
  //       })
  // ]
  //     })
  //   return config
  // }
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
  