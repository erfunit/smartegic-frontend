const withPlugins = require("next-compose-plugins");
const { i18n, localeSubpaths } = require("./next-i18next.config");

module.exports = withPlugins([], {
    i18n,
    publicRuntimeConfig: {
        localeSubpaths,
    },
});
