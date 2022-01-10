const nextEnv = require("next-env");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withSvgr = require("next-svgr");
const withFonts = require("next-fonts");

const nextConfig = {
  images: {
    domains: ["devhyun-test.s3.ap-northeast-2.amazonaws.com"],
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = withPlugins(
  [
    [withSvgr],
    [withFonts],
    [withTM(["swiper", "ssr-window", "dom7"])],
    [nextEnv()],
  ],
  nextConfig,
);
