const withExpo = require("./expo-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    browsersListForSwc: true,
    legacyBrowsers: false,
    forceSwcTransforms: true,
    scrollRestoration: true,
    swcPlugins: [[require.resolve("./plugins/swc_plugin_reanimated.wasm")]],
    transpilePackages: [
      "react-native-web",
      "react-native-reanimated",
      "react-native",
      "reanimated-thing",
      "expo-custom"
    ]
  }
}

module.exports = withExpo(nextConfig);
