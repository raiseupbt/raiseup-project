module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "vercel",
  server: "./server.js",
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: ["marked"],
};