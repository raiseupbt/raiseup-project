const { createRequestHandler } = require("@remix-run/node");
const { installGlobals } = require("@remix-run/node");

installGlobals();

module.exports = createRequestHandler({
  build: require("../build/index.js"),
  mode: process.env.NODE_ENV,
});