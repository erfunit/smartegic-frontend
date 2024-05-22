const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    webpack: (config) => {
        // Add the src directory to the resolve modules
        config.resolve.modules.push(__dirname + "/src");

        // Add the TsconfigPathsPlugin to support TypeScript path aliases
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
};
