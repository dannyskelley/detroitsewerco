const isProduction = process.env.ELEVENTY_ENV === "PROD";

module.exports = {
    isProduction,
    port: 5000,
    showAllHosts: true,
};
