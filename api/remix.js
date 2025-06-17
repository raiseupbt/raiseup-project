import { createRequestHandler } from "@remix-run/node";
import { installGlobals } from "@remix-run/node";
import * as build from "../build/index.js";

installGlobals();

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});