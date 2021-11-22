const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withSvgr = require("next-svgr");
const withFonts = require("next-fonts");

const nextConfig = {
  webpack: (config) => {
    return config;
  },
};

module.exports = withPlugins(
  [[withSvgr], [withFonts], [withTM(["swiper", "ssr-window", "dom7"])]],
  nextConfig,
);
