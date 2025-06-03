import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/xr-chile-web" : "",
  assetPrefix: isGithubPages ? "/xr-chile-web/" : "",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Agregar la regla para manejar archivos SVG con @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        // Configuración experimental de Turbopack para SVG
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.svg",
        },
      },
    },
  },
};

export default nextConfig;
