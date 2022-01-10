const path = require("path");
const Dotenv = require("dotenv-webpack");

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withSvgr = require("next-svgr");
const withFonts = require("next-fonts");

const { NODE_ENV } = process.env;

const nextConfig = {
  images: {
    domains: ["devhyun-test.s3.ap-northeast-2.amazonaws.com"],
  },
  webpack: (config) => {
    config.plugins.push(
      new Dotenv({
        path: path.resolve(
          process.cwd(),
          NODE_ENV == "production" ? ".env" : ".env.development",
        ),
        silent: true,
      }),
    );
    return config;
  },
};

module.exports = withPlugins(
  [[withSvgr], [withFonts], [withTM(["swiper", "ssr-window", "dom7"])]],
  nextConfig,
);
