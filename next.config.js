const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production" || false,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    webpack: (config) => {
        config.resolve.modules.push(__dirname + "/src");

        if (!config.resolve.plugins) {
            config.resolve.plugins = [];
        }
        config.resolve.plugins.push(new TsconfigPathsPlugin());

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
                pathname: "**",
            },
        ],
    },
    experimental: {
        webVitalsAttribution: ["CLS", "LCP"],
    },
};
