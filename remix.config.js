module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: ["marked"],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
};