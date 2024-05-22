const path = require("path");

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@components": path.resolve(__dirname, "src/app/_components"),
            // Add more aliases as needed
        },
    },
    // Other Webpack configurations
};
