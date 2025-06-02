import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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

