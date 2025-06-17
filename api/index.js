const { createRequestHandler } = require("@remix-run/node");
const { installGlobals } = require("@remix-run/node");

installGlobals();

// Importar o build do Remix
const build = require("../build/index.js");

// Criar o handler da Vercel
module.exports = createRequestHandler({
  build,
  mode: process.env.NODE_ENV || "production"
});