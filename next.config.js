// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  future: {
    webpack5: true,
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
  
};
  