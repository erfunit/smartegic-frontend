const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
require("dotenv").config();

module.exports = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production" || false,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    webpack: (config, { isServer }) => {
        config.resolve.modules.push(__dirname + "/src");

        if (!config.resolve.plugins) {
            config.resolve.plugins = [];
        }
        config.resolve.plugins.push(new TsconfigPathsPlugin());

        // ignore the examples folder
        if (isServer) {
            config.externals.push((context, request, callback) => {
                if (request === "./examples") {
                    return callback(null, "commonjs " + request);
                }
                callback();
            });
        }

        return config;
    },
    experimental: {
        webVitalsAttribution: ["CLS", "LCP"],
    },
    env: {
        API_URL: process.env.API_URL,
    },
};
