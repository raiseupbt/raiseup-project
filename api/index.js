"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  headers: () => headers,
  links: () => links
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), headers = () => ({
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co https://www.google-analytics.com;"
}), links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "script",
        {
          async: !0,
          src: "https://www.googletagmanager.com/gtag/js?id=G-4YV8FMQ1P2"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4YV8FMQ1P2');
            `
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {})
    ] })
  ] });
}

// app/routes/agentes-conversacionais.tsx
var agentes_conversacionais_exports = {};
__export(agentes_conversacionais_exports, {
  default: () => AgentesConversacionais,
  meta: () => meta
});
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => [
  { title: "Agentes Conversacionais - RaiseUp | Chatbots Inteligentes com IA" },
  { name: "description", content: "Transforme seu atendimento com agentes conversacionais que mant\xEAm empatia e personaliza\xE7\xE3o. Chatbots 24/7, integra\xE7\xE3o CRM e an\xE1lise de sentimentos." },
  { name: "keywords", content: "agentes conversacionais, chatbot inteligente, atendimento automatizado, IA conversacional, suporte 24/7" }
];
function AgentesConversacionais() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background: #1a2332;
            overflow-x: hidden;
          }

          :root {
            --primary-green: #10b981;
            --green-light: #34d399;
            --green-dark: #059669;
            --cyan: #06b6d4;
            --blue-gradient: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #0ea5e9 100%);
            --green-gradient: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
            
            --text-primary: #f8fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #94a3b8;
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 20px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --shadow-glow: 0 0 40px rgba(16, 185, 129, 0.3);
          }

          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(15, 32, 39, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(16, 185, 129, 0.2);
          }

          .navbar {
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .logo img {
            height: 80px;
            width: auto;
            filter: brightness(0) invert(1);
          }

          .logo-text h2 {
            font-size: 1.75rem;
            background: var(--blue-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            font-weight: 800;
          }

          .logo-tagline {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-top: -4px;
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            position: relative;
          }

          .nav-link:hover {
            color: var(--primary-green);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--green-gradient);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 4px;
            padding: 0.5rem;
          }

          .nav-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-secondary);
            transition: var(--transition);
            border-radius: 2px;
          }

          .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .nav-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }

          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 8rem 0 4rem;
            position: relative;
            background: #1a2332;
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 60%, rgba(6, 182, 212, 0.2) 0%, transparent 50%);
          }

          .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .hero-content {
            animation: slideInLeft 1s ease-out;
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid var(--primary-green);
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--primary-green);
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
          }

          .hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #f8fafc 0%, #10b981 50%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero p {
            font-size: 1.25rem;
            color: var(--text-muted);
            margin-bottom: 2.5rem;
            line-height: 1.7;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
            border: none;
            position: relative;
            overflow: hidden;
          }

          .btn-primary {
            background: var(--green-gradient);
            color: white;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
          }

          .chat-demo {
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius);
            padding: 2rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(16, 185, 129, 0.2);
            animation: slideInRight 1s ease-out;
            position: relative;
            max-width: 500px;
            margin: 0 auto;
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .chat-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(16, 185, 129, 0.2);
          }

          .chat-avatar {
            width: 40px;
            height: 40px;
            background: var(--green-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
          }

          .chat-info h4 {
            color: var(--text-primary);
            font-size: 1rem;
            margin: 0;
          }

          .chat-status {
            color: var(--primary-green);
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .status-dot {
            width: 8px;
            height: 8px;
            background: var(--primary-green);
            border-radius: 50%;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          .chat-messages {
            space-y: 1rem;
          }

          .message {
            margin-bottom: 1rem;
            animation: messageSlide 0.5s ease-out;
          }

          @keyframes messageSlide {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .message-user {
            text-align: right;
          }

          .message-bot {
            text-align: left;
          }

          .message-bubble {
            display: inline-block;
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            max-width: 80%;
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .message-user .message-bubble {
            background: var(--green-gradient);
            color: white;
          }

          .message-bot .message-bubble {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-secondary);
            border: 1px solid rgba(16, 185, 129, 0.2);
          }

          .typing-indicator {
            display: flex;
            gap: 4px;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            border: 1px solid rgba(16, 185, 129, 0.2);
            width: fit-content;
          }

          .typing-dot {
            width: 6px;
            height: 6px;
            background: var(--primary-green);
            border-radius: 50%;
            animation: typing 1.4s infinite;
          }

          .typing-dot:nth-child(2) { animation-delay: 0.2s; }
          .typing-dot:nth-child(3) { animation-delay: 0.4s; }

          @keyframes typing {
            0%, 60%, 100% { opacity: 0.3; }
            30% { opacity: 1; }
          }

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .features {
            background: linear-gradient(135deg, #0f2027 0%, #203a43 100%);
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .section-tag {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: var(--green-gradient);
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 50px;
            margin-bottom: 1rem;
          }

          .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-green) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-subtitle {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .feature-card {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius);
            border: 1px solid rgba(16, 185, 129, 0.2);
            transition: var(--transition);
            backdrop-filter: blur(20px);
            text-align: center;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary-green);
            box-shadow: var(--shadow-glow);
          }

          .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: var(--green-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
          }

          .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--text-primary);
            font-size: 1.25rem;
          }

          .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
          }

          .why-choose {
            background: linear-gradient(135deg, #203a43 0%, #2c5364 100%);
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .benefit-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            border: 1px solid rgba(16, 185, 129, 0.2);
            backdrop-filter: blur(20px);
          }

          .benefit-icon {
            width: 50px;
            height: 50px;
            background: var(--green-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.25rem;
            flex-shrink: 0;
          }

          .benefit-content h4 {
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .benefit-content p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .cta-section {
            background: var(--green-gradient);
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          }

          .cta-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-section h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            color: white;
            margin-bottom: 1rem;
            font-weight: 800;
          }

          .cta-section p {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .btn-secondary {
            background: transparent;
            color: var(--primary-green);
            font-weight: 700;
            border: 2px solid var(--primary-green);
            box-shadow: none;
          }

          .btn-secondary:hover {
            transform: translateY(-3px);
            background: rgba(16, 185, 129, 0.1);
            box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            align-items: center;
          }

          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 100%;
              height: 100vh;
              background: rgba(15, 32, 39, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 3rem;
              transition: var(--transition);
              z-index: 999;
            }

            .nav-menu.active {
              right: 0;
            }

            .nav-menu .nav-link {
              font-size: 1.25rem;
              font-weight: 600;
            }

            .nav-toggle {
              display: flex;
              z-index: 1001;
            }

            .hero-container {
              grid-template-columns: 1fr;
              gap: 2rem;
              text-align: center;
              padding-top: 2rem;
            }
            
            .nav-container {
              padding: 0 1rem;
            }

            .features-grid,
            .benefits-grid {
              grid-template-columns: 1fr;
            }

            .chat-demo {
              max-width: 100%;
              margin: 2rem 0;
            }

            .container {
              padding: 0 1rem;
            }

            .hero-buttons {
              flex-direction: column;
              align-items: center;
              gap: 1rem;
            }

            .btn {
              width: 100%;
              max-width: 300px;
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .nav-container {
              padding: 0 0.5rem;
            }

            .logo img {
              height: 60px;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .hero-buttons {
              gap: 0.5rem;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", { className: "navbar", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nav-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: "/logo_raiseup.png", alt: "RaiseUp Logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "nav-menu", id: "nav-menu", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "/", className: "nav-link", children: "In\xEDcio" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "/#about", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Sobre" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "/#services", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Servi\xE7os" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "/blog", className: "nav-link", children: "Blog" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "/contato", className: "nav-link", children: "Contato" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nav-toggle", id: "nav-toggle", onClick: () => {
        let navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle");
        navMenu == null || navMenu.classList.toggle("active"), navToggle == null || navToggle.classList.toggle("active");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {})
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "hero-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "hero-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "hero-badge", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-comments" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Agentes Conversacionais" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h1", { children: [
            "Atendimento",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
            "24/7 que ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Nunca" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
            "Perde a Empatia"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Transforme seu atendimento ao cliente com agentes conversacionais que combinam intelig\xEAncia artificial avan\xE7ada com o toque humano que seus clientes merecem." }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "hero-buttons", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "/contato", className: "btn btn-primary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-check" }),
              "Implementar Agora"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#funcionalidades", className: "btn btn-secondary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-eye" }),
              "Ver Funcionalidades"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "chat-demo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "chat-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "chat-avatar", children: "AI" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "chat-info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Agente RaiseUp" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "chat-status", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "status-dot" }),
                "Online agora"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "chat-messages", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "message message-user", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "message-bubble", children: "Ol\xE1! Preciso de ajuda com meu pedido" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "message message-bot", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "message-bubble", children: "Claro! Vou verificar seu pedido agora mesmo. Qual o n\xFAmero?" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "message message-user", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "message-bubble", children: "Perfeito! Muito obrigado pela agilidade! \u{1F60A}" }) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { id: "funcionalidades", className: "features", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "section-tag", children: "Funcionalidades" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "section-title", children: "Recursos Avan\xE7ados dos Nossos Agentes" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "section-subtitle", children: "Tecnologia de ponta para revolucionar seu atendimento ao cliente" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "features-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-brain" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "IA Conversacional Avan\xE7ada" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Processamento de linguagem natural que entende contexto, inten\xE7\xF5es e nuances da comunica\xE7\xE3o humana para conversas mais naturais." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-clock" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Disponibilidade 24/7" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Atendimento ininterrupto que nunca dorme, garantindo suporte aos seus clientes a qualquer hora do dia ou da noite." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-heart" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "An\xE1lise de Sentimentos" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Detecta emo\xE7\xF5es e ajusta o tom da conversa para proporcionar uma experi\xEAncia mais emp\xE1tica e humana." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-link" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Integra\xE7\xE3o Completa" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Conecta-se facilmente com CRM, sistemas de vendas e outras ferramentas da sua empresa para m\xE1xima efici\xEAncia." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-mobile-alt" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Multicanal" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Funciona em WhatsApp, site, Instagram, Facebook e outros canais para uma experi\xEAncia unificada." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-chart-line" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Analytics Detalhados" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Relat\xF3rios completos sobre intera\xE7\xF5es, satisfa\xE7\xE3o e oportunidades de melhoria com insights acion\xE1veis." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { className: "why-choose", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "section-tag", children: "Vantagens" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "section-title", children: "Por que Escolher Nossos Agentes Conversacionais?" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "section-subtitle", children: "Diferenciais que fazem a diferen\xE7a no seu atendimento" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefits-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "benefit-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-bolt" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Resposta Instant\xE2nea" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Atendimento imediato sem filas de espera, aumentando a satisfa\xE7\xE3o do cliente" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "benefit-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-user-tie" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Personaliza\xE7\xE3o Inteligente" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Cada conversa \xE9 adaptada ao perfil e hist\xF3rico do cliente para m\xE1xima relev\xE2ncia" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "benefit-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-shield-alt" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Seguran\xE7a de Dados" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Prote\xE7\xE3o total das informa\xE7\xF5es com criptografia de ponta a ponta" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "benefit-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-rocket" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Escalabilidade Infinita" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Atende milhares de clientes simultaneamente sem perder qualidade" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "benefit-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-graduation-cap" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Aprendizado Cont\xEDnuo" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Melhora constantemente atrav\xE9s de machine learning e feedback dos usu\xE1rios" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "benefit-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-dollar-sign" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "benefit-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Redu\xE7\xE3o de Custos" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Diminui significativamente os custos operacionais do atendimento" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { className: "cta-section", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "cta-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: "Pronto para Revolucionar seu Atendimento?" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Descubra como nossos agentes conversacionais podem transformar a experi\xEAncia dos seus clientes e impulsionar seus resultados." }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "/contato", className: "btn btn-primary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fas fa-phone" }),
          "Solicitar Demonstra\xE7\xE3o Gratuita"
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("script", { dangerouslySetInnerHTML: {
      __html: `
          // Chat animation
          document.addEventListener('DOMContentLoaded', () => {
            const messages = document.querySelectorAll('.message');
            messages.forEach((message, index) => {
              message.style.animationDelay = (index * 0.8) + 's';
            });

            // Auto-scroll chat demo
            const chatDemo = document.querySelector('.chat-demo');
            if (chatDemo) {
              chatDemo.addEventListener('mouseenter', () => {
                chatDemo.style.transform = 'scale(1.02)';
              });
              chatDemo.addEventListener('mouseleave', () => {
                chatDemo.style.transform = 'scale(1)';
              });
            }
          });
        `
    } })
  ] });
}

// app/routes/admin.analytics._index.tsx
var admin_analytics_index_exports = {};
__export(admin_analytics_index_exports, {
  default: () => AdminAnalytics,
  loader: () => loader,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/lib/supabase.server.ts
var import_supabase_js = require("@supabase/supabase-js"), supabaseUrl = process.env.SUPABASE_URL, supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey)
  throw new Error("Vari\xE1veis de ambiente do Supabase n\xE3o configuradas");
var supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);

// app/lib/auth.server.ts
var bcrypt = __toESM(require("bcryptjs")), import_node = require("@remix-run/node"), sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: [process.env.SESSION_SECRET || "default-secret-change-in-production"],
    secure: !0,
    maxAge: 60 * 60 * 24 * 7
    // 7 dias
  }
});
async function getSession(request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  return (await getSession(request)).get("userId") || null;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (!userId)
    return null;
  let { data, error } = await supabase.from("usuarios").select("*").eq("id", userId).eq("ativo", !0).single();
  return error || !data ? null : data;
}
async function requireUser(request) {
  let user = await getUser(request);
  if (!user)
    throw (0, import_node.redirect)("/admin/login");
  return user;
}
async function login(email, senha) {
  if (!email || !senha)
    return null;
  let emailSanitizado = email.toLowerCase().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailSanitizado))
    return null;
  try {
    let { data: usuario, error } = await supabase.from("usuarios").select("*").eq("email", emailSanitizado).eq("ativo", !0).single();
    return error || !usuario || !await bcrypt.compare(senha, usuario.senha_hash) ? null : (await supabase.from("usuarios").update({ ultimo_login: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", usuario.id), usuario);
  } catch {
    return null;
  }
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node.redirect)("/admin/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}

// app/lib/analytics.server.ts
var import_data = require("@google-analytics/data"), GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID, GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS, analyticsDataClient = null;
function getAnalyticsClient() {
  if (!analyticsDataClient && GOOGLE_APPLICATION_CREDENTIALS && GA4_PROPERTY_ID)
    try {
      analyticsDataClient = new import_data.BetaAnalyticsDataClient({
        keyFilename: GOOGLE_APPLICATION_CREDENTIALS
      });
    } catch (error) {
      console.error("Erro ao inicializar Google Analytics:", error);
    }
  return analyticsDataClient;
}
async function getAnalyticsData() {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  let client = getAnalyticsClient();
  if (!client || !GA4_PROPERTY_ID)
    return console.log("Google Analytics n\xE3o configurado, retornando dados simulados"), getSimulatedData();
  try {
    let [overviewReport, pagesReport, sourcesReport, devicesReport, locationsReport] = await Promise.all([
      // Métricas gerais
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        metrics: [
          { name: "sessions" },
          { name: "totalUsers" },
          { name: "screenPageViews" },
          { name: "bounceRate" },
          { name: "averageSessionDuration" }
        ]
      }),
      // Páginas mais visitadas
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: !0 }],
        limit: 10
      }),
      // Fontes de tráfego
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "sessionSource" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: !0 }],
        limit: 10
      }),
      // Dispositivos
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "deviceCategory" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: !0 }]
      }),
      // Localizações
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: !0 }],
        limit: 10
      })
    ]), overviewData = overviewReport[0], totalSessions = parseInt(((_d = (_c = (_b = (_a2 = overviewData.rows) == null ? void 0 : _a2[0]) == null ? void 0 : _b.metricValues) == null ? void 0 : _c[0]) == null ? void 0 : _d.value) || "0"), totalUsers = parseInt(((_h = (_g = (_f = (_e = overviewData.rows) == null ? void 0 : _e[0]) == null ? void 0 : _f.metricValues) == null ? void 0 : _g[1]) == null ? void 0 : _h.value) || "0"), totalPageviews = parseInt(((_l = (_k = (_j = (_i = overviewData.rows) == null ? void 0 : _i[0]) == null ? void 0 : _j.metricValues) == null ? void 0 : _k[2]) == null ? void 0 : _l.value) || "0"), bounceRate = parseFloat(((_p = (_o = (_n = (_m = overviewData.rows) == null ? void 0 : _m[0]) == null ? void 0 : _n.metricValues) == null ? void 0 : _o[3]) == null ? void 0 : _p.value) || "0") * 100, avgSessionDurationSeconds = parseFloat(((_t = (_s = (_r = (_q = overviewData.rows) == null ? void 0 : _q[0]) == null ? void 0 : _r.metricValues) == null ? void 0 : _s[4]) == null ? void 0 : _t.value) || "0"), minutes = Math.floor(avgSessionDurationSeconds / 60), seconds = Math.floor(avgSessionDurationSeconds % 60), avgSessionDuration = `${minutes}m ${seconds}s`, topPages = ((_u = pagesReport[0].rows) == null ? void 0 : _u.map((row, index) => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return {
        page: ((_b2 = (_a3 = row.dimensionValues) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.value) || "",
        views: parseInt(((_d2 = (_c2 = row.metricValues) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.value) || "0"),
        percentage: parseFloat((parseInt(((_f2 = (_e2 = row.metricValues) == null ? void 0 : _e2[0]) == null ? void 0 : _f2.value) || "0") / totalPageviews * 100).toFixed(1))
      };
    })) || [], trafficSources = ((_v = sourcesReport[0].rows) == null ? void 0 : _v.map((row) => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return {
        source: ((_b2 = (_a3 = row.dimensionValues) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.value) || "Direto",
        sessions: parseInt(((_d2 = (_c2 = row.metricValues) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.value) || "0"),
        percentage: parseFloat((parseInt(((_f2 = (_e2 = row.metricValues) == null ? void 0 : _e2[0]) == null ? void 0 : _f2.value) || "0") / totalSessions * 100).toFixed(1))
      };
    })) || [], devices = ((_w = devicesReport[0].rows) == null ? void 0 : _w.map((row) => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return {
        device: ((_b2 = (_a3 = row.dimensionValues) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.value) || "Desconhecido",
        sessions: parseInt(((_d2 = (_c2 = row.metricValues) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.value) || "0"),
        percentage: parseFloat((parseInt(((_f2 = (_e2 = row.metricValues) == null ? void 0 : _e2[0]) == null ? void 0 : _f2.value) || "0") / totalSessions * 100).toFixed(1))
      };
    })) || [], locations = ((_x = locationsReport[0].rows) == null ? void 0 : _x.map((row) => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return {
        country: ((_b2 = (_a3 = row.dimensionValues) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.value) || "Desconhecido",
        sessions: parseInt(((_d2 = (_c2 = row.metricValues) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.value) || "0"),
        percentage: parseFloat((parseInt(((_f2 = (_e2 = row.metricValues) == null ? void 0 : _e2[0]) == null ? void 0 : _f2.value) || "0") / totalSessions * 100).toFixed(1))
      };
    })) || [];
    return {
      totalSessions,
      totalUsers,
      totalPageviews,
      bounceRate,
      avgSessionDuration,
      topPages: topPages.slice(0, 6),
      trafficSources: trafficSources.slice(0, 5),
      devices: devices.slice(0, 3),
      locations: locations.slice(0, 5)
    };
  } catch (error) {
    return console.error("Erro ao buscar dados do Google Analytics:", error), getSimulatedData();
  }
}
function getSimulatedData() {
  return {
    totalSessions: 15420,
    totalUsers: 12845,
    totalPageviews: 28950,
    bounceRate: 45.8,
    avgSessionDuration: "2m 34s",
    topPages: [
      { page: "/", views: 8420, percentage: 29.1 },
      { page: "/agentes-conversacionais", views: 6150, percentage: 21.2 },
      { page: "/agentes-midias-sociais", views: 4820, percentage: 16.7 },
      { page: "/agentes-produtividade", views: 3960, percentage: 13.7 },
      { page: "/contato", views: 2800, percentage: 9.7 },
      { page: "/blog", views: 2800, percentage: 9.6 }
    ],
    trafficSources: [
      { source: "Org\xE2nico (Google)", sessions: 7210, percentage: 46.8 },
      { source: "Direto", sessions: 3850, percentage: 25 },
      { source: "Redes Sociais", sessions: 2310, percentage: 15 },
      { source: "Refer\xEAncia", sessions: 1540, percentage: 10 },
      { source: "Email", sessions: 510, percentage: 3.2 }
    ],
    devices: [
      { device: "Desktop", sessions: 8950, percentage: 58.1 },
      { device: "Mobile", sessions: 5890, percentage: 38.2 },
      { device: "Tablet", sessions: 580, percentage: 3.7 }
    ],
    locations: [
      { country: "Brasil", sessions: 12350, percentage: 80.1 },
      { country: "Portugal", sessions: 1540, percentage: 10 },
      { country: "Estados Unidos", sessions: 770, percentage: 5 },
      { country: "Argentina", sessions: 460, percentage: 3 },
      { country: "Outros", sessions: 300, percentage: 1.9 }
    ]
  };
}

// app/components/AdminLayout.tsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime");
function AdminLayout({
  user,
  currentPage,
  children,
  pageTitle,
  pageActions
}) {
  let navItems = [
    { key: "dashboard", href: "/admin", label: "\u{1F4CA} Dashboard", icon: "\u{1F4CA}" },
    { key: "artigos", href: "/admin/artigos", label: "\u{1F4DD} Artigos", icon: "\u{1F4DD}" },
    { key: "contatos", href: "/admin/contatos", label: "\u{1F4DE} Contatos", icon: "\u{1F4DE}" },
    { key: "analytics", href: "/admin/analytics", label: "\u{1F4C8} Analytics", icon: "\u{1F4C8}" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          @media (max-width: 768px) {
            .admin-header {
              padding: 0.75rem 1rem !important;
            }
            
            .admin-header-content {
              flex-direction: column !important;
              gap: 0.75rem !important;
              align-items: flex-start !important;
            }
            
            .admin-logo {
              font-size: 1.25rem !important;
            }
            
            .admin-user-section {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
              width: 100% !important;
            }
            
            .admin-user-info {
              padding: 0.4rem 0.75rem !important;
            }
            
            .admin-nav-container {
              padding: 0.5rem !important;
              overflow-x: auto !important;
              scrollbar-width: none !important;
              -ms-overflow-style: none !important;
            }
            
            .admin-nav-container::-webkit-scrollbar {
              display: none !important;
            }
            
            .admin-nav-items {
              flex-wrap: nowrap !important;
              min-width: max-content !important;
            }
            
            .admin-nav-link {
              white-space: nowrap !important;
              min-width: max-content !important;
              padding: 0.5rem 1rem !important;
              font-size: 0.8rem !important;
            }
            
            .admin-page-title {
              font-size: 1.5rem !important;
            }
            
            .admin-main-container {
              padding: 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .admin-logo {
              font-size: 1.1rem !important;
            }
            
            .admin-nav-link {
              padding: 0.4rem 0.8rem !important;
              font-size: 0.75rem !important;
            }
            
            .admin-page-title {
              font-size: 1.25rem !important;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%)",
      color: "#f8fafc",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { className: "admin-header", style: {
        background: "rgba(26, 32, 44, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(51, 65, 85, 0.3)",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "admin-header-content", style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1400px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Link, { to: "/admin", className: "admin-logo", style: {
          fontSize: "1.5rem",
          fontWeight: "700",
          background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }, children: "\u{1F680} RaiseUp Admin" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "admin-user-section", style: { display: "flex", alignItems: "center", gap: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "admin-user-info", style: {
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "0.5rem 1rem",
          background: "rgba(45, 55, 72, 0.5)",
          borderRadius: "8px",
          border: "1px solid rgba(51, 65, 85, 0.3)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            fontWeight: "600"
          }, children: user.nome.charAt(0).toUpperCase() }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { color: "#e2e8f0", fontSize: "0.9rem" }, children: user.nome }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Form, { action: "/admin/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              style: {
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                color: "#ef4444",
                padding: "0.5rem 0.75rem",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.8rem",
                fontWeight: "500",
                transition: "all 0.2s"
              },
              onMouseEnter: (e) => {
                e.target.style.background = "rgba(239, 68, 68, 0.2)";
              },
              onMouseLeave: (e) => {
                e.target.style.background = "rgba(239, 68, 68, 0.1)";
              },
              children: "\u{1F6AA} Sair"
            }
          ) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "admin-main-container", style: { maxWidth: "1400px", margin: "0 auto", padding: "2rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { style: { marginBottom: "2rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "admin-nav-container", style: {
          display: "flex",
          gap: "0.5rem",
          background: "rgba(26, 32, 44, 0.8)",
          backdropFilter: "blur(20px)",
          padding: "0.75rem",
          borderRadius: "12px",
          border: "1px solid rgba(51, 65, 85, 0.3)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          flexWrap: "wrap"
        }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "admin-nav-items", style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" }, children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          import_react3.Link,
          {
            to: item.href,
            className: "admin-nav-link",
            style: {
              color: currentPage === item.key ? "#0ea5e9" : "#94a3b8",
              textDecoration: "none",
              padding: "0.75rem 1.25rem",
              borderRadius: "8px",
              transition: "all 0.2s",
              fontWeight: "500",
              fontSize: "0.9rem",
              background: currentPage === item.key ? "rgba(14, 165, 233, 0.15)" : "transparent",
              border: currentPage === item.key ? "1px solid rgba(14, 165, 233, 0.3)" : "1px solid transparent",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            },
            onMouseEnter: (e) => {
              currentPage !== item.key && (e.target.style.color = "#e2e8f0", e.target.style.background = "rgba(45, 55, 72, 0.5)");
            },
            onMouseLeave: (e) => {
              currentPage !== item.key && (e.target.style.color = "#94a3b8", e.target.style.background = "transparent");
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { fontSize: "1rem" }, children: item.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: item.label.replace(/^.+ /, "") })
            ]
          },
          item.key
        )) }) }) }),
        (pageTitle || pageActions) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          flexWrap: "wrap",
          gap: "1rem"
        }, children: [
          pageTitle && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "admin-page-title", style: {
            fontSize: "2rem",
            fontWeight: "700",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0
          }, children: pageTitle }),
          pageActions && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { display: "flex", gap: "1rem", alignItems: "center" }, children: pageActions })
        ] }),
        children
      ] })
    ] })
  ] });
}

// app/routes/admin.analytics._index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), meta2 = () => [
  { title: "Analytics - Admin RaiseUp" },
  { name: "robots", content: "noindex, nofollow" }
], loader = async ({ request }) => {
  let user = await requireUser(request);
  try {
    let analyticsData = await getAnalyticsData();
    return (0, import_node2.json)({ user, analyticsData });
  } catch (error) {
    return console.error("Erro ao carregar analytics:", error), (0, import_node2.json)({ user, analyticsData: {
      totalSessions: 0,
      totalUsers: 0,
      totalPageviews: 0,
      bounceRate: 0,
      avgSessionDuration: "0m 0s",
      topPages: [],
      trafficSources: [],
      devices: [],
      locations: []
    } });
  }
};
function AdminAnalytics() {
  let { user, analyticsData } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          @media (max-width: 768px) {
            .analytics-stats-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .analytics-content-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .analytics-stat-card {
              padding: 1.25rem !important;
            }
            
            .analytics-stat-value {
              font-size: 1.75rem !important;
            }
            
            .analytics-stat-icon {
              font-size: 1.25rem !important;
              top: 0.75rem !important;
              right: 0.75rem !important;
            }
            
            .analytics-content-card {
              padding: 1rem !important;
            }
            
            .analytics-card-title {
              font-size: 1.1rem !important;
              margin-bottom: 1rem !important;
            }
            
            .analytics-progress-item {
              margin-bottom: 0.75rem !important;
            }
            
            .analytics-progress-header {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.25rem !important;
              margin-bottom: 0.25rem !important;
            }
            
            .analytics-integration-actions {
              flex-direction: column !important;
              gap: 0.75rem !important;
            }
            
            .analytics-integration-button {
              width: 100% !important;
              text-align: center !important;
            }
          }
          
          @media (max-width: 480px) {
            .analytics-stat-card {
              padding: 1rem !important;
            }
            
            .analytics-stat-value {
              font-size: 1.5rem !important;
            }
            
            .analytics-content-card {
              padding: 0.75rem !important;
            }
            
            .analytics-card-title {
              font-size: 1rem !important;
            }
            
            .analytics-progress-label {
              font-size: 0.8rem !important;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      AdminLayout,
      {
        user,
        currentPage: "analytics",
        pageTitle: "Analytics",
        pageActions: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: {
          padding: "0.75rem 1rem",
          background: "rgba(45, 55, 72, 0.8)",
          borderRadius: "8px",
          fontSize: "0.9rem",
          color: "#94a3b8",
          border: "1px solid rgba(51, 65, 85, 0.3)"
        }, children: "\u{1F4C5} \xDAltimos 30 dias" }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-stats-grid", style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              StatCard,
              {
                title: "Total de Sess\xF5es",
                value: analyticsData.totalSessions.toLocaleString(),
                subtitle: "+12% vs m\xEAs anterior",
                color: "#0ea5e9",
                icon: "\u{1F465}"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              StatCard,
              {
                title: "Usu\xE1rios \xDAnicos",
                value: analyticsData.totalUsers.toLocaleString(),
                subtitle: "+8% vs m\xEAs anterior",
                color: "#8b5cf6",
                icon: "\u{1F464}"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              StatCard,
              {
                title: "Visualiza\xE7\xF5es",
                value: analyticsData.totalPageviews.toLocaleString(),
                subtitle: "+15% vs m\xEAs anterior",
                color: "#10b981",
                icon: "\u{1F441}\uFE0F"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              StatCard,
              {
                title: "Taxa de Rejei\xE7\xE3o",
                value: `${analyticsData.bounceRate}%`,
                subtitle: "-3% vs m\xEAs anterior",
                color: "#f59e0b",
                icon: "\u{1F4CA}"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              StatCard,
              {
                title: "Dura\xE7\xE3o M\xE9dia",
                value: analyticsData.avgSessionDuration,
                subtitle: "+18s vs m\xEAs anterior",
                color: "#ef4444",
                icon: "\u23F1\uFE0F"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-content-grid", style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-content-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(51, 65, 85, 0.3)",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "analytics-card-title", style: {
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "0 0 1.5rem 0",
                color: "#f8fafc",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }, children: "\u{1F4C8} P\xE1ginas Mais Visitadas" }),
              analyticsData.topPages.map((page, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                ProgressBar,
                {
                  label: page.page === "/" ? "P\xE1gina Inicial" : page.page,
                  value: page.views,
                  percentage: page.percentage,
                  color: index === 0 ? "#0ea5e9" : index === 1 ? "#8b5cf6" : "#10b981"
                },
                page.page
              ))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-content-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(51, 65, 85, 0.3)",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "analytics-card-title", style: {
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "0 0 1.5rem 0",
                color: "#f8fafc",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }, children: "\u{1F680} Fontes de Tr\xE1fego" }),
              analyticsData.trafficSources.map((source, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                ProgressBar,
                {
                  label: source.source,
                  value: source.sessions,
                  percentage: source.percentage,
                  color: index === 0 ? "#0ea5e9" : index === 1 ? "#8b5cf6" : index === 2 ? "#10b981" : "#f59e0b"
                },
                source.source
              ))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-content-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(51, 65, 85, 0.3)",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "analytics-card-title", style: {
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "0 0 1.5rem 0",
                color: "#f8fafc",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }, children: "\u{1F4F1} Dispositivos" }),
              analyticsData.devices.map((device, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                ProgressBar,
                {
                  label: device.device,
                  value: device.sessions,
                  percentage: device.percentage,
                  color: index === 0 ? "#0ea5e9" : index === 1 ? "#8b5cf6" : "#10b981"
                },
                device.device
              ))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-content-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(51, 65, 85, 0.3)",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "analytics-card-title", style: {
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "0 0 1.5rem 0",
                color: "#f8fafc",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }, children: "\u{1F30D} Localiza\xE7\xF5es" }),
              analyticsData.locations.map((location, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                ProgressBar,
                {
                  label: location.country,
                  value: location.sessions,
                  percentage: location.percentage,
                  color: index === 0 ? "#0ea5e9" : index === 1 ? "#8b5cf6" : "#10b981"
                },
                location.country
              ))
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: {
            marginTop: "2rem",
            background: "rgba(26, 32, 44, 0.8)",
            backdropFilter: "blur(20px)",
            padding: "1.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(51, 65, 85, 0.3)",
            boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)",
            textAlign: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { style: {
              color: "#f8fafc",
              fontSize: "1.1rem",
              fontWeight: "600",
              margin: "0 0 1rem 0"
            }, children: "\u{1F4CA} Integra\xE7\xE3o com Google Analytics" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: {
              color: "#94a3b8",
              margin: "0 0 1.5rem 0",
              lineHeight: "1.6"
            }, children: "Os dados mostrados acima s\xE3o simulados para demonstra\xE7\xE3o. Para dados reais em tempo real, integre com a API do Google Analytics 4." }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-integration-actions", style: {
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "a",
                {
                  href: "https://analytics.google.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "analytics-integration-button",
                  style: {
                    padding: "0.75rem 1.5rem",
                    background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "all 0.2s"
                  },
                  children: "\u{1F4C8} Abrir Google Analytics"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "a",
                {
                  href: "https://console.cloud.google.com/apis/library/analyticsreporting.googleapis.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "analytics-integration-button",
                  style: {
                    padding: "0.75rem 1.5rem",
                    background: "rgba(107, 114, 128, 0.2)",
                    border: "1px solid rgba(107, 114, 128, 0.3)",
                    color: "#d1d5db",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "all 0.2s"
                  },
                  children: "\u{1F527} Configurar API"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
function StatCard({ title, value, subtitle, color, icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-stat-card", style: {
    background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`,
    border: `1px solid ${color}30`,
    padding: "1.5rem",
    borderRadius: "12px",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "analytics-stat-icon", style: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      fontSize: "1.5rem",
      opacity: 0.7
    }, children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { style: {
      color: "#94a3b8",
      fontSize: "0.9rem",
      fontWeight: "500",
      margin: "0 0 0.5rem 0"
    }, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "analytics-stat-value", style: {
      color: "#f8fafc",
      fontSize: "2rem",
      fontWeight: "700",
      margin: "0 0 0.5rem 0"
    }, children: value }),
    subtitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: {
      color: "#94a3b8",
      fontSize: "0.8rem",
      margin: 0
    }, children: subtitle })
  ] });
}
function ProgressBar({ label, value, percentage, color }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-progress-item", style: { marginBottom: "1rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "analytics-progress-header", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "0.5rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "analytics-progress-label", style: { color: "#e2e8f0", fontSize: "0.9rem" }, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { display: "flex", gap: "1rem", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { color: "#94a3b8", fontSize: "0.8rem" }, children: value.toLocaleString() }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { style: { color, fontSize: "0.8rem", fontWeight: "600" }, children: [
          percentage,
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: {
      width: "100%",
      height: "8px",
      background: "rgba(45, 55, 72, 0.5)",
      borderRadius: "4px",
      overflow: "hidden"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: {
      width: `${percentage}%`,
      height: "100%",
      background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
      borderRadius: "4px",
      transition: "width 0.3s ease"
    } }) })
  ] });
}

// app/routes/agentes-midias-sociais.tsx
var agentes_midias_sociais_exports = {};
__export(agentes_midias_sociais_exports, {
  default: () => AgentesMidiasSociais,
  meta: () => meta3
});
var import_jsx_runtime6 = require("react/jsx-runtime"), meta3 = () => [
  { title: "Agentes para M\xEDdias Sociais - RaiseUp | Automa\xE7\xE3o de Redes Sociais" },
  { name: "description", content: "Automatize suas redes sociais mantendo autenticidade. Gest\xE3o de posts, resposta inteligente a coment\xE1rios e an\xE1lise de performance." },
  { name: "keywords", content: "automa\xE7\xE3o m\xEDdias sociais, gest\xE3o redes sociais, social media automation, marketing digital, engajamento autom\xE1tico" }
];
function AgentesMidiasSociais() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #f8fafc;
            background: linear-gradient(135deg, #2d1b4e 0%, #1a1332 50%, #0a0a1a 100%);
            overflow-x: hidden;
            position: relative;
          }

          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
              radial-gradient(circle at 20% 80%, rgba(255, 23, 147, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
            z-index: -1;
            animation: backgroundPulse 8s ease-in-out infinite;
          }

          :root {
            --primary-pink: #ff1793;
            --pink-light: #ff4db8;
            --pink-dark: #e91e63;
            --purple: #a855f7;
            --purple-dark: #9333ea;
            --blue: #00f5ff;
            --pink-gradient: linear-gradient(135deg, #ff1793 0%, #e91e63 50%, #00f5ff 100%);
            --purple-gradient: linear-gradient(135deg, #00f5ff 0%, #a855f7 50%, #9333ea 100%);
            
            --text-primary: #ffffff;
            --text-secondary: #f8fafc;
            --text-muted: #e2e8f0;
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 25px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --shadow-glow: 0 0 40px rgba(255, 107, 157, 0.4);
          }

          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(255, 107, 157, 0.1);
            backdrop-filter: blur(30px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .navbar {
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .logo img {
            height: 80px;
            width: auto;
            filter: brightness(0) invert(1);
          }

          .logo-text h2 {
            font-size: 1.75rem;
            background: linear-gradient(135deg, #ffffff 0%, #ff6b9d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            font-weight: 800;
          }

          .logo-tagline {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-top: -4px;
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            position: relative;
          }

          .nav-link:hover {
            color: var(--text-primary);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--pink-gradient);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 4px;
            padding: 0.5rem;
          }

          .nav-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-secondary);
            transition: var(--transition);
            border-radius: 2px;
          }

          .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .nav-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }

          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 8rem 0 4rem;
            position: relative;
            background: linear-gradient(135deg, #d63384 0%, #a61e4d 30%, #495057 70%, #6f42c1 100%);
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(255, 107, 157, 0.3) 0%, transparent 50%);
          }

          .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .hero-content {
            animation: slideInLeft 1s ease-out;
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            color: white;
            margin-bottom: 2rem;
            backdrop-filter: blur(20px);
          }

          .hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: white;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .hero p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
            line-height: 1.7;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
            border: none;
            position: relative;
            overflow: hidden;
          }

          .btn-primary {
            background: var(--pink-gradient);
            color: white;
            font-weight: 700;
            box-shadow: 0 10px 30px rgba(255, 23, 147, 0.3);
            border: none;
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(255, 23, 147, 0.4);
          }

          .social-demo {
            position: relative;
            width: 500px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: slideInRight 1s ease-out;
          }

          .central-robot {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #ff1793 0%, #e91e63 50%, #a855f7 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            position: relative;
            z-index: 10;
            animation: float 3s ease-in-out infinite;
            box-shadow: 
              0 10px 30px rgba(255, 23, 147, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.1);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .agent-character {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, rgba(196, 69, 105, 0.1) 0%, rgba(100, 50, 150, 0.1) 100%);
            border-radius: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #c44569;
            position: relative;
            z-index: 2;
            animation: subtleFloat 4s ease-in-out infinite;
            border: 1px solid rgba(196, 69, 105, 0.3);
            backdrop-filter: blur(10px);
            box-shadow: 
              0 8px 32px rgba(196, 69, 105, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes modernFloat {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              opacity: 0.8;
            }
            50% { 
              transform: translateY(-12px) scale(1.02);
              opacity: 1;
            }
          }

          .social-icons {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .social-icon {
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            color: white;
            animation: modernFloat 4s ease-in-out infinite;
            z-index: 1;
            transition: all 0.3s ease;
          }

          .facebook-icon {
            background: #1877f2;
            animation-delay: 0s;
          }

          .instagram-icon {
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            animation-delay: 0.5s;
          }

          .discord-icon {
            background: #7289da;
            animation-delay: 1s;
          }

          .twitter-icon {
            background: #1da1f2;
            animation-delay: 1.5s;
          }

          .youtube-icon {
            background: #ff0000;
            animation-delay: 2s;
          }

          .linkedin-icon {
            background: #0077b5;
            animation-delay: 2.5s;
          }

          .social-icon:hover {
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }

          @keyframes socialFloat {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
              opacity: 0.8;
            }
            50% { 
              transform: translateY(-15px) rotate(5deg);
              opacity: 1;
            }
          }

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .features {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .section-tag {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 50px;
            margin-bottom: 1rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            color: white;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .section-subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .feature-card {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: var(--border-radius);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: var(--transition);
            backdrop-filter: blur(30px);
            text-align: center;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 20px 40px rgba(255, 107, 157, 0.3);
          }

          .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: var(--primary-pink);
          }

          .feature-card h3 {
            margin-bottom: 1rem;
            color: white;
            font-size: 1.25rem;
          }

          .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
          }

          .integrations {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
          }

          .integrations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .integration-card {
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: var(--transition);
            backdrop-filter: blur(30px);
            text-align: center;
          }

          .integration-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.2);
          }

          .integration-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 1rem;
            background: white;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }

          .integration-card h4 {
            color: white;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .integration-card p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .cta-section {
            background: var(--pink-gradient);
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          }

          .cta-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-section h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            color: white;
            margin-bottom: 1rem;
            font-weight: 800;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .cta-section p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .btn-secondary {
            background: transparent;
            color: var(--primary-pink);
            font-weight: 700;
            border: 2px solid var(--primary-pink);
            box-shadow: none;
          }

          .btn-secondary:hover {
            transform: translateY(-3px);
            background: rgba(255, 23, 147, 0.1);
            box-shadow: 0 10px 20px rgba(255, 23, 147, 0.2);
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            align-items: center;
          }

          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 100%;
              height: 100vh;
              background: rgba(255, 107, 157, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 3rem;
              transition: var(--transition);
              z-index: 999;
            }

            .nav-menu.active {
              right: 0;
            }

            .nav-menu .nav-link {
              font-size: 1.25rem;
              font-weight: 600;
            }

            .nav-toggle {
              display: flex;
              z-index: 1001;
            }

            .hero-container {
              grid-template-columns: 1fr;
              gap: 2rem;
              text-align: center;
              padding-top: 2rem;
            }
            
            .nav-container {
              padding: 0 1rem;
            }

            .features-grid,
            .integrations-grid {
              grid-template-columns: 1fr;
            }

            .social-demo {
              height: 400px;
              max-width: 100%;
              margin: 2rem 0;
            }

            .agent-character {
              width: 100px;
              height: 100px;
              font-size: 2.5rem;
            }

            .social-icon {
              width: 50px;
              height: 50px;
              font-size: 1.25rem;
            }

            .container {
              padding: 0 1rem;
            }

            .hero-buttons {
              flex-direction: column;
              align-items: center;
              gap: 1rem;
            }

            .btn {
              width: 100%;
              max-width: 300px;
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .nav-container {
              padding: 0 0.5rem;
            }

            .logo img {
              height: 60px;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .hero-buttons {
              gap: 0.5rem;
            }

            .central-robot {
              width: 80px;
              height: 80px;
              font-size: 2rem;
            }

            .social-icon {
              width: 45px;
              height: 45px;
              font-size: 1.1rem;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("nav", { className: "navbar", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nav-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: "/logo_raiseup.png", alt: "RaiseUp Logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", { className: "nav-menu", id: "nav-menu", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: "/", className: "nav-link", children: "In\xEDcio" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: "/#about", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Sobre" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: "/#services", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Servi\xE7os" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: "/blog", className: "nav-link", children: "Blog" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: "/contato", className: "nav-link", children: "Contato" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nav-toggle", id: "nav-toggle", onClick: () => {
        let navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle");
        navMenu == null || navMenu.classList.toggle("active"), navToggle == null || navToggle.classList.toggle("active");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {})
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "hero-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "hero-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "hero-badge", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-share-alt" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Agentes para M\xEDdias Sociais" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h1", { children: [
            "Presen\xE7a ",
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { background: "linear-gradient(135deg, #ff1793 0%, #e91e63 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Digital" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("br", {}),
            "Aut\xEAntica e",
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("br", {}),
            "Automatizada"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Mantenha suas redes sociais sempre ativas e engajadas com agentes inteligentes que preservam sua voz e personalidade de marca." }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "hero-buttons", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { href: "/contato", className: "btn btn-primary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-heart" }),
              "Automatizar Agora"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { href: "#funcionalidades", className: "btn btn-secondary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-eye" }),
              "Ver Recursos"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "social-demo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "central-robot", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-robot" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "social-icons", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "social-icon facebook-icon", style: { top: "20%", right: "30%" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-facebook-f" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "social-icon instagram-icon", style: { top: "10%", right: "15%" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-instagram" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "social-icon discord-icon", style: { top: "50%", right: "8%" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-discord" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "social-icon twitter-icon", style: { top: "70%", left: "15%" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-twitter" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "social-icon youtube-icon", style: { bottom: "20%", left: "30%" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-youtube" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "social-icon linkedin-icon", style: { bottom: "10%", right: "25%" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-linkedin-in" }) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { id: "funcionalidades", className: "features", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "section-tag", children: "Funcionalidades" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "section-title", children: "Automa\xE7\xE3o Inteligente para Redes Sociais" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "section-subtitle", children: "Mantenha sua marca ativa e engajada em todas as plataformas" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "features-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-calendar-alt" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Agendamento Inteligente" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Posts autom\xE1ticos no melhor hor\xE1rio para seu p\xFAblico, com conte\xFAdo personalizado para cada plataforma e an\xE1lise de engajamento." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-reply" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Respostas Autom\xE1ticas" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Responde coment\xE1rios e mensagens instantaneamente, mantendo o tom da sua marca e escalando para humanos quando necess\xE1rio." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-edit" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Cria\xE7\xE3o de Conte\xFAdo" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Gera posts, legendas e hashtags relevantes baseados nas tend\xEAncias e no comportamento da sua audi\xEAncia em tempo real." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-chart-bar" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Analytics Avan\xE7ados" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Relat\xF3rios detalhados sobre engajamento, crescimento e ROI das suas campanhas em redes sociais com insights acion\xE1veis." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-hashtag" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Monitoramento de Trends" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Identifica tend\xEAncias relevantes para sua marca e sugere conte\xFAdos para aproveitar o momento ideal de postagem." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-users" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Gest\xE3o de Comunidade" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Modera\xE7\xE3o autom\xE1tica, identifica\xE7\xE3o de influenciadores e gest\xE3o proativa da sua comunidade online com engajamento aut\xEAntico." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "integrations", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "section-tag", children: "Conectividade" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "section-title", children: "Integra\xE7\xF5es com Todas as Principais Redes" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "section-subtitle", children: "Conecte-se \xE0s plataformas mais importantes para sua marca" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integrations-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#1877f2" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-facebook-f" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "Facebook" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Posts, Stories, Reels e gerenciamento completo de p\xE1ginas empresariais" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#e4405f" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-instagram" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "Instagram" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Feed, Stories, Reels, IGTV e intera\xE7\xE3o autom\xE1tica com seguidores" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#1da1f2" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-twitter" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "Twitter" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Tweets, threads, respostas autom\xE1ticas e monitoramento de men\xE7\xF5es" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#0077b5" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-linkedin-in" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "LinkedIn" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Posts profissionais, artigos e networking automatizado B2B" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#ff0000" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-youtube" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "YouTube" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Upload de v\xEDdeos, otimiza\xE7\xE3o de t\xEDtulos e gest\xE3o de coment\xE1rios" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#ff0050" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-tiktok" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "TikTok" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Conte\xFAdo viral, hashtags trending e engajamento com Gen Z" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#25d366" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-whatsapp" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "WhatsApp Business" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Atendimento direto, campanhas e automa\xE7\xE3o de mensagens" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "integration-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "integration-icon", style: { color: "#7289da" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fab fa-discord" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "Discord" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Comunidades engajadas, bots interativos e eventos virtuais" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "cta-section", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "cta-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: "Pronto para Dominar as Redes Sociais?" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Transforme sua presen\xE7a digital com automa\xE7\xE3o inteligente que mant\xE9m a autenticidade e maximiza o engajamento." }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { href: "/contato", className: "btn btn-primary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fas fa-rocket" }),
          "Come\xE7ar Automa\xE7\xE3o Social"
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("script", { dangerouslySetInnerHTML: {
      __html: `
          // Social icons animation
          document.addEventListener('DOMContentLoaded', () => {
            const socialIcons = document.querySelectorAll('.social-icon');
            socialIcons.forEach((icon, index) => {
              icon.style.animationDelay = (index * 0.3) + 's';
            });

            // Agent character interaction
            const agentCharacter = document.querySelector('.agent-character');
            if (agentCharacter) {
              agentCharacter.addEventListener('mouseenter', () => {
                agentCharacter.style.transform = 'scale(1.1) rotate(5deg)';
                socialIcons.forEach(icon => {
                  icon.style.animationDuration = '2s';
                });
              });
              
              agentCharacter.addEventListener('mouseleave', () => {
                agentCharacter.style.transform = 'scale(1) rotate(0deg)';
                socialIcons.forEach(icon => {
                  icon.style.animationDuration = '4s';
                });
              });
            }
          });
        `
    } })
  ] });
}

// app/routes/admin.contatos._index.tsx
var admin_contatos_index_exports = {};
__export(admin_contatos_index_exports, {
  default: () => AdminContatos,
  loader: () => loader2,
  meta: () => meta4
});
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_runtime7 = require("react/jsx-runtime"), contatosStyles = `
  .contatos-page-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  .contatos-search-input {
    padding: 0.75rem 1rem;
    background: rgba(45, 55, 72, 0.8);
    border: 1px solid rgba(51, 65, 85, 0.4);
    border-radius: 8px;
    color: #f8fafc;
    font-size: 0.9rem;
    outline: none;
    min-width: 250px;
    flex: 1;
    max-width: 400px;
  }

  .contatos-filter-select {
    padding: 0.75rem 1rem;
    background: rgba(45, 55, 72, 0.8);
    border: 1px solid rgba(51, 65, 85, 0.4);
    border-radius: 8px;
    color: #f8fafc;
    font-size: 0.9rem;
    outline: none;
    min-width: 150px;
  }

  .contatos-main-container {
    background: rgba(26, 32, 44, 0.8);
    backdrop-filter: blur(20px);
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid rgba(51, 65, 85, 0.3);
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.3);
  }

  .contatos-header {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #f8fafc;
  }

  .contatos-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contatos-card {
    background: rgba(45, 55, 72, 0.5);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #334155;
  }

  .contatos-card-header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: start;
  }

  .contatos-card-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .contatos-card-name {
    color: #f8fafc;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .contatos-card-contact {
    color: #94a3b8;
    margin: 0;
    font-size: 0.9rem;
  }

  .contatos-card-meta {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .contatos-card-date {
    color: #94a3b8;
    margin: 0;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .contatos-card-status {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  .contatos-card-status.novo {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
  }

  .contatos-card-status.respondido {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
  }

  .contatos-card-status.arquivado {
    background: rgba(156, 163, 175, 0.2);
    color: #9ca3af;
  }

  .contatos-card-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contatos-card-detail {
    color: #94a3b8;
    margin: 0;
    font-size: 0.9rem;
  }

  .contatos-card-message {
    background: rgba(15, 23, 42, 0.5);
    padding: 1rem;
    border-radius: 6px;
    margin-top: 1rem;
  }

  .contatos-card-message-title {
    color: #f8fafc;
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .contatos-card-message-content {
    color: #e2e8f0;
    margin: 0;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  .contatos-empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #94a3b8;
  }

  .contatos-empty-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .contatos-empty-subtitle {
    font-size: 0.9rem;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .contatos-page-actions {
      flex-direction: column;
      align-items: stretch;
      gap: 0.75rem;
    }

    .contatos-search-input {
      min-width: unset;
      max-width: unset;
      width: 100%;
      font-size: 1rem;
    }

    .contatos-filter-select {
      min-width: unset;
      width: 100%;
      font-size: 1rem;
    }

    .contatos-main-container {
      padding: 1rem;
      border-radius: 12px;
    }

    .contatos-header {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .contatos-card {
      padding: 1rem;
    }

    .contatos-card-header {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .contatos-card-meta {
      text-align: left;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .contatos-card-date {
      font-size: 0.8rem;
    }

    .contatos-card-status {
      font-size: 0.75rem;
      padding: 0.2rem 0.6rem;
    }

    .contatos-card-name {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }

    .contatos-card-contact {
      font-size: 0.85rem;
    }

    .contatos-card-detail {
      font-size: 0.85rem;
    }

    .contatos-card-message {
      padding: 0.75rem;
      margin-top: 0.75rem;
    }

    .contatos-card-message-title {
      font-size: 0.85rem;
    }

    .contatos-card-message-content {
      font-size: 0.85rem;
    }

    .contatos-empty-state {
      padding: 2rem 1rem;
    }

    .contatos-empty-title {
      font-size: 1rem;
    }

    .contatos-empty-subtitle {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .contatos-main-container {
      padding: 0.75rem;
    }

    .contatos-card {
      padding: 0.75rem;
    }

    .contatos-card-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .contatos-search-input,
    .contatos-filter-select {
      padding: 0.875rem 1rem;
    }
  }
`, meta4 = () => [
  { title: "Contatos - Admin RaiseUp" },
  { name: "robots", content: "noindex, nofollow" }
], loader2 = async ({ request }) => {
  let user = await requireUser(request);
  try {
    let { data: contatos, error } = await supabase.from("contatos").select("*").order("criado_em", { ascending: !1 });
    return error && console.error("Erro ao buscar contatos:", error), (0, import_node3.json)({
      user,
      contatos: contatos || []
    });
  } catch (error) {
    return console.error("Erro ao carregar contatos:", error), (0, import_node3.json)({
      user,
      contatos: []
    });
  }
};
function AdminContatos() {
  let { user, contatos } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("style", { dangerouslySetInnerHTML: { __html: contatosStyles } }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      AdminLayout,
      {
        user,
        currentPage: "contatos",
        pageTitle: "Gerenciar Contatos",
        pageActions: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-page-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "input",
            {
              type: "search",
              placeholder: "\u{1F50D} Buscar contatos...",
              className: "contatos-search-input"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("select", { className: "contatos-filter-select", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", children: "Todos os status" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "novo", children: "Novos" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "respondido", children: "Respondidos" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "arquivado", children: "Arquivados" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("select", { className: "contatos-filter-select", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", children: "Ordenar por" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "data_desc", children: "Mais recentes" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "data_asc", children: "Mais antigos" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "nome_asc", children: "Nome A-Z" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "nome_desc", children: "Nome Z-A" })
          ] })
        ] }),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-main-container", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h2", { className: "contatos-header", children: [
            "Contatos Recebidos (",
            contatos.length,
            ")"
          ] }),
          contatos.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "contatos-list", children: contatos.map((contato) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-card-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-card-info", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "contatos-card-name", children: contato.nome }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "contatos-card-contact", children: [
                  "\u{1F4E7} ",
                  contato.email
                ] }),
                contato.telefone && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "contatos-card-contact", children: [
                  "\u{1F4F1} ",
                  contato.telefone
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-card-meta", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "contatos-card-date", children: new Date(contato.criado_em).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                }) }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: `contatos-card-status ${contato.status || "novo"}`, children: contato.status || "novo" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-card-details", children: [
              contato.empresa && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "contatos-card-detail", children: [
                "\u{1F3E2} ",
                contato.empresa
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "contatos-card-detail", children: [
                "\u{1F3AF} \xC1rea: ",
                contato.area_interesse
              ] })
            ] }),
            contato.mensagem && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-card-message", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: "contatos-card-message-title", children: "Mensagem:" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "contatos-card-message-content", children: contato.mensagem })
            ] })
          ] }, contato.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contatos-empty-state", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "contatos-empty-title", children: "\u{1F4ED} Nenhum contato encontrado" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "contatos-empty-subtitle", children: "Os contatos enviados atrav\xE9s do formul\xE1rio aparecer\xE3o aqui." })
          ] })
        ] })
      }
    )
  ] });
}

// app/routes/agentes-produtividade.tsx
var agentes_produtividade_exports = {};
__export(agentes_produtividade_exports, {
  default: () => AgentesProdutividade,
  meta: () => meta5
});
var import_jsx_runtime8 = require("react/jsx-runtime"), meta5 = () => [
  { title: "Agentes de Produtividade - RaiseUp | Automa\xE7\xE3o de Processos Empresariais" },
  { name: "description", content: "Automatize processos internos e integre sistemas para m\xE1xima efici\xEAncia. Workflows automatizados, relat\xF3rios e gest\xE3o de tarefas inteligente." },
  { name: "keywords", content: "automa\xE7\xE3o processos, workflow automation, produtividade empresarial, integra\xE7\xE3o sistemas, gest\xE3o tarefas" }
];
function AgentesProdutividade() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #ffffff;
            background: #1a2332;
            overflow-x: hidden;
          }

          :root {
            --primary-orange: #ff7c3a;
            --secondary-green: #00d084;
            --bg-dark: #1a2332;
            --text-white: #ffffff;
            --text-gray: #a0aec0;
            --orange-gradient: linear-gradient(135deg, #ff7c3a 0%, #00d084 100%);
            
            --text-primary: #ffffff;
            --text-secondary: #f8fafc;
            --text-muted: #e2e8f0;
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 25px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --shadow-glow: 0 0 40px rgba(255, 154, 86, 0.4);
          }

          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(255, 154, 86, 0.1);
            backdrop-filter: blur(30px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .navbar {
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .logo img {
            height: 80px;
            width: auto;
            filter: brightness(0) invert(1);
          }

          .logo-text h2 {
            font-size: 1.75rem;
            background: linear-gradient(135deg, #ffffff 0%, #ff9a56 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            font-weight: 800;
          }

          .logo-tagline {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-top: -4px;
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            position: relative;
          }

          .nav-link:hover {
            color: var(--text-primary);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--orange-gradient);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 4px;
            padding: 0.5rem;
          }

          .nav-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-secondary);
            transition: var(--transition);
            border-radius: 2px;
          }

          .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .nav-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }

          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 8rem 0 4rem;
            position: relative;
            background: var(--bg-dark);
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(255, 154, 86, 0.3) 0%, transparent 50%);
          }

          .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .hero-content {
            animation: slideInLeft 1s ease-out;
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            color: white;
            margin-bottom: 2rem;
            backdrop-filter: blur(20px);
          }

          .hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: white;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .hero p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
            line-height: 1.7;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
            border: none;
            position: relative;
            overflow: hidden;
          }

          .btn-primary {
            background: var(--orange-gradient);
            color: white;
            font-weight: 700;
            box-shadow: 0 10px 30px rgba(255, 124, 58, 0.3);
            border: none;
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(255, 124, 58, 0.4);
          }

          .productivity-demo {
            position: relative;
            width: 500px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: slideInRight 1s ease-out;
          }

          .central-icon {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #4f9cf9 0%, #3b82f6 50%, #2563eb 100%);
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            position: relative;
            z-index: 10;
            animation: float 3s ease-in-out infinite;
            box-shadow: 
              0 10px 30px rgba(79, 156, 249, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.1);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .floating-icons {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }

          .floating-icon {
            position: absolute;
            width: 60px;
            height: 60px;
            background: transparent;
            border: 3px solid var(--primary-orange);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            color: var(--primary-orange);
            z-index: 5;
            animation: floatAround 4s ease-in-out infinite;
          }

          .float-1 {
            top: 10%;
            right: 30%;
            animation-delay: 0s;
          }

          .float-2 {
            top: 40%;
            right: 10%;
            animation-delay: 1s;
          }

          .float-3 {
            bottom: 20%;
            right: 25%;
            animation-delay: 2s;
          }

          .float-4 {
            bottom: 10%;
            left: 20%;
            animation-delay: 3s;
          }

          @keyframes floatAround {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              opacity: 1;
            }
            50% { 
              transform: translateY(-15px) scale(1.05);
              opacity: 0.8;
            }
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            align-items: center;
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .features {
            background: linear-gradient(135deg, #4f9cf9 0%, #667eea 100%);
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .section-tag {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 50px;
            margin-bottom: 1rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            color: white;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .section-subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .feature-card {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: var(--border-radius);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: var(--transition);
            backdrop-filter: blur(30px);
            text-align: center;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 20px 40px rgba(255, 154, 86, 0.3);
          }

          .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: var(--primary-orange);
          }

          .feature-card h3 {
            margin-bottom: 1rem;
            color: white;
            font-size: 1.25rem;
          }

          .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
          }

          .implementation {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 50%, #4f9cf9 100%);
          }

          .implementation-timeline {
            max-width: 800px;
            margin: 0 auto;
            display: grid;
            gap: 2rem;
            padding: 2rem 0;
          }

          .timeline-step {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 0;
            margin: 0;
            position: relative;
          }

          .step-number {
            width: 56px;
            height: 56px;
            background: rgba(26, 26, 46, 0.8);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: #e67e22;
            border: 1px solid rgba(230, 126, 34, 0.3);
            backdrop-filter: blur(10px);
            box-shadow: 
              0 4px 16px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05);
            flex-shrink: 0;
            position: relative;
          }

          .step-number::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            width: 2px;
            height: 48px;
            background: linear-gradient(to bottom, rgba(230, 126, 34, 0.3), transparent);
            transform: translateX(-50%);
          }

          .timeline-step:last-child .step-number::after {
            display: none;
          }

          .step-content {
            background: rgba(26, 26, 46, 0.6);
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid rgba(230, 126, 34, 0.2);
            backdrop-filter: blur(10px);
            box-shadow: 
              0 4px 16px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05);
            flex: 1;
          }

          .step-content h3 {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .step-content p {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .step-features {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .step-feature {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.875rem;
            color: white;
          }

          .cta-section {
            background: var(--orange-gradient);
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          }

          .cta-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-section h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            color: white;
            margin-bottom: 1rem;
            font-weight: 800;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .cta-section p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .btn-secondary {
            background: transparent;
            color: var(--primary-orange);
            font-weight: 700;
            border: 2px solid var(--primary-orange);
            box-shadow: none;
          }

          .btn-secondary:hover {
            transform: translateY(-3px);
            background: rgba(255, 124, 58, 0.1);
            box-shadow: 0 10px 20px rgba(255, 124, 58, 0.2);
          }

          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 100%;
              height: 100vh;
              background: rgba(255, 154, 86, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 3rem;
              transition: var(--transition);
              z-index: 999;
            }

            .nav-menu.active {
              right: 0;
            }

            .nav-menu .nav-link {
              font-size: 1.25rem;
              font-weight: 600;
            }

            .nav-toggle {
              display: flex;
              z-index: 1001;
            }

            .hero-container {
              grid-template-columns: 1fr;
              gap: 2rem;
              text-align: center;
              padding-top: 2rem;
            }
            
            .nav-container {
              padding: 0 1rem;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .productivity-demo {
              height: 400px;
              max-width: 100%;
              margin: 2rem 0;
            }

            .agent-character {
              width: 100px;
              height: 100px;
              font-size: 2.5rem;
            }

            .tool-icon {
              width: 50px;
              height: 50px;
              font-size: 1.25rem;
            }

            .timeline-step {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 1rem;
            }

            .step-number::after {
              display: none;
            }

            .container {
              padding: 0 1rem;
            }

            .hero-buttons {
              flex-direction: column;
              align-items: center;
              gap: 1rem;
            }

            .btn {
              width: 100%;
              max-width: 300px;
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .nav-container {
              padding: 0 0.5rem;
            }

            .logo img {
              height: 60px;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .hero-buttons {
              gap: 0.5rem;
            }

            .central-icon {
              width: 80px;
              height: 80px;
              font-size: 2rem;
            }

            .floating-icon {
              width: 45px;
              height: 45px;
              font-size: 1.2rem;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("nav", { className: "navbar", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "nav-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: "/logo_raiseup.png", alt: "RaiseUp Logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "nav-menu", id: "nav-menu", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "/", className: "nav-link", children: "In\xEDcio" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "/#about", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Sobre" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "/#services", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Servi\xE7os" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "/blog", className: "nav-link", children: "Blog" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "/contato", className: "nav-link", children: "Contato" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "nav-toggle", id: "nav-toggle", onClick: () => {
        let navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle");
        navMenu == null || navMenu.classList.toggle("active"), navToggle == null || navToggle.classList.toggle("active");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {})
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "hero-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "hero-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "hero-badge", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-cogs" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Agentes de Produtividade" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h1", { children: [
            "Efici\xEAncia",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
            "M\xE1xima em",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { background: "linear-gradient(135deg, #ff7c3a 0%, #ff9a56 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Cada Processo" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Libere o potencial da sua equipe automatizando processos repetitivos, integrando sistemas e otimizando fluxos de trabalho com intelig\xEAncia artificial." }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "hero-buttons", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { href: "/contato", className: "btn btn-primary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-cogs" }),
              "Otimizar Processos"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { href: "#funcionalidades", className: "btn btn-secondary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-eye" }),
              "Ver Solu\xE7\xF5es"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "productivity-demo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "central-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-robot" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "floating-icons", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "floating-icon float-1", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-cog" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "floating-icon float-2", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-chart-line" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "floating-icon float-3", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-cogs" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "floating-icon float-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-project-diagram" }) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { id: "funcionalidades", className: "features", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "section-tag", children: "Funcionalidades" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "section-title", children: "Automa\xE7\xE3o Completa de Processos" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "section-subtitle", children: "Transforme opera\xE7\xF5es manuais em fluxos automatizados inteligentes" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "features-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-project-diagram" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Workflows Automatizados" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Crie fluxos de trabalho personalizados que executam tarefas complexas automaticamente, reduzindo erros e tempo de execu\xE7\xE3o significativamente." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-plug" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Integra\xE7\xE3o de Sistemas" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Conecte diferentes ferramentas e sistemas da sua empresa, criando um ecossistema unificado e eficiente para m\xE1xima produtividade." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-file-alt" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Relat\xF3rios Automatizados" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Gera\xE7\xE3o autom\xE1tica de relat\xF3rios personalizados com dados em tempo real de todas as suas opera\xE7\xF5es e processos cr\xEDticos." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-tasks" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Gest\xE3o Inteligente de Tarefas" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Distribui\xE7\xE3o autom\xE1tica de tarefas, acompanhamento de progresso e otimiza\xE7\xE3o de recursos da equipe para m\xE1xima efici\xEAncia." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-database" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Processamento de Dados" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "An\xE1lise autom\xE1tica de grandes volumes de dados, extraindo insights valiosos para tomada de decis\xF5es estrat\xE9gicas." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "feature-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-bell" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Alertas Inteligentes" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Sistema proativo de notifica\xE7\xF5es que identifica problemas e oportunidades antes que se tornem cr\xEDticos para o neg\xF3cio." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "implementation", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "section-tag", children: "Metodologia" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "section-title", children: "Como Implementamos a Automa\xE7\xE3o" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "section-subtitle", children: "Processo estruturado e gradual para m\xE1ximo sucesso na transforma\xE7\xE3o" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "implementation-timeline", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "timeline-line" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "timeline-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "step-number", children: "1" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "step-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "An\xE1lise e Mapeamento" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Realizamos uma auditoria completa dos seus processos atuais, identificando gargalos, inefici\xEAncias e oportunidades de automa\xE7\xE3o." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "step-features", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Mapeamento de processos" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Identifica\xE7\xE3o de gargalos" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "An\xE1lise de ROI" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Prioriza\xE7\xE3o de oportunidades" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "timeline-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "step-number", children: "2" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "step-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Design da Solu\xE7\xE3o" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Desenvolvemos uma arquitetura personalizada que integra com seus sistemas existentes e atende \xE0s necessidades espec\xEDficas do seu neg\xF3cio." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "step-features", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Arquitetura personalizada" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Integra\xE7\xE3o com sistemas" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Workflow design" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Prototipagem" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "timeline-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "step-number", children: "3" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "step-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Implementa\xE7\xE3o Gradual" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Implementamos a automa\xE7\xE3o em fases controladas, minimizando riscos e garantindo adapta\xE7\xE3o gradual da equipe aos novos processos." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "step-features", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Deploy por fases" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Testes rigorosos" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Treinamento da equipe" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Monitoramento cont\xEDnuo" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "timeline-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "step-number", children: "4" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "step-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "Otimiza\xE7\xE3o e Suporte" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Monitoramos continuamente o desempenho, realizamos ajustes e fornecemos suporte t\xE9cnico para garantir m\xE1xima efici\xEAncia." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "step-features", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Monitoramento 24/7" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Suporte t\xE9cnico" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Otimiza\xE7\xF5es cont\xEDnuas" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "step-feature", children: "Relat\xF3rios de performance" })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "cta-section", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "cta-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: "Transforma\xE7\xE3o que Impacta Resultados" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "Descubra como nossa automa\xE7\xE3o pode revolucionar seus processos e multiplicar a produtividade da sua equipe." }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { href: "/contato", className: "btn btn-secondary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fas fa-chart-line" }),
          "Solicitar An\xE1lise Gratuita"
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("script", { dangerouslySetInnerHTML: {
      __html: `
          document.addEventListener('DOMContentLoaded', () => {
            // Timeline animation on scroll
            const timelineSteps = document.querySelectorAll('.timeline-step');
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                }
              });
            }, { threshold: 0.1 });

            timelineSteps.forEach(step => {
              step.style.opacity = '0';
              step.style.transform = 'translateY(50px)';
              observer.observe(step);
            });
          });

          // Add slideInUp animation
          const style = document.createElement('style');
          style.textContent = \`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          \`;
          document.head.appendChild(style);
        `
    } })
  ] });
}

// app/routes/admin.artigos._index.tsx
var admin_artigos_index_exports = {};
__export(admin_artigos_index_exports, {
  default: () => AdminArtigos,
  loader: () => loader3,
  meta: () => meta6
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/lib/blog.server.ts
var import_jsdom = require("jsdom"), import_isomorphic_dompurify = __toESM(require("isomorphic-dompurify")), window = new import_jsdom.JSDOM("").window, purify = (0, import_isomorphic_dompurify.default)(window);
async function listarArtigos() {
  let { data, error } = await supabase.from("artigos").select("*").eq("ativo", !0).order("data_publicacao", { ascending: !1 });
  if (error)
    throw console.error("Erro ao buscar artigos:", error), new Error("Erro ao buscar artigos");
  return data || [];
}
async function buscarArtigoPorSlug(slug) {
  let { data, error } = await supabase.from("artigos").select("*").eq("slug", slug).eq("ativo", !0).single();
  if (error) {
    if (error.code === "PGRST116")
      return null;
    throw console.error("Erro ao buscar artigo:", error), new Error("Erro ao buscar artigo");
  }
  return data;
}
function sanitizeHtml(html2) {
  if (!html2)
    return "";
  let config = {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "u",
      "b",
      "i",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "blockquote",
      "pre",
      "code",
      "a",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "hr",
      "div",
      "span"
    ],
    ALLOWED_ATTR: ["href", "title", "alt", "src", "target", "rel", "class"],
    ALLOW_DATA_ATTR: !1,
    FORBID_SCRIPT: !0,
    FORBID_TAGS: ["script", "object", "embed", "link", "style", "iframe", "frame"],
    FORBID_ATTR: ["onclick", "onload", "onerror", "onmouseover", "onfocus", "onblur"]
  };
  return purify.sanitize(html2, config);
}
async function incrementarVisualizacoes(slug) {
  if (!slug || typeof slug != "string")
    throw new Error("Slug inv\xE1lido");
  if (!/^[a-z0-9\-_]+$/i.test(slug))
    throw new Error("Slug cont\xE9m caracteres inv\xE1lidos");
  if (slug.length > 200)
    throw new Error("Slug muito longo");
  let { error } = await supabase.rpc("incrementar_visualizacoes_artigo", {
    artigo_slug: slug.toLowerCase().trim()
  });
  error && console.error("Erro ao incrementar visualiza\xE7\xF5es:", error);
}
async function buscarArtigosDestaque() {
  let { data, error } = await supabase.from("artigos").select("*").eq("ativo", !0).eq("destaque", !0).order("data_publicacao", { ascending: !1 }).limit(1);
  return error ? (console.error("Erro ao buscar artigos em destaque:", error), []) : data || [];
}
async function buscarArtigosRegulares() {
  let { data, error } = await supabase.from("artigos").select("*").eq("ativo", !0).eq("destaque", !1).order("data_publicacao", { ascending: !1 });
  return error ? (console.error("Erro ao buscar artigos regulares:", error), []) : data || [];
}

// app/routes/admin.artigos._index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), meta6 = () => [
  { title: "Gerenciar Artigos - Admin RaiseUp" },
  { name: "robots", content: "noindex, nofollow" }
], loader3 = async ({ request }) => {
  let user = await requireUser(request), artigos = await listarArtigos();
  return (0, import_node4.json)({ user, artigos });
};
function AdminArtigos() {
  let { user, artigos } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          @media (max-width: 768px) {
            .artigos-page-actions {
              flex-direction: column !important;
              gap: 0.75rem !important;
              align-items: stretch !important;
            }
            
            .artigos-search-input {
              min-width: auto !important;
              width: 100% !important;
            }
            
            .artigos-select {
              width: 100% !important;
            }
            
            .artigos-new-button {
              width: 100% !important;
              justify-content: center !important;
            }
            
            .artigos-table-header {
              grid-template-columns: 1fr auto !important;
              gap: 0.5rem !important;
              padding: 0.75rem 1rem !important;
            }
            
            .artigos-table-row {
              grid-template-columns: 1fr !important;
              padding: 1rem !important;
              gap: 0.75rem !important;
            }
            
            .artigos-row-meta {
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              flex-wrap: wrap !important;
              gap: 0.5rem !important;
            }
            
            .artigos-desktop-column {
              display: none !important;
            }
            
            .artigos-mobile-visible {
              display: block !important;
            }
          }
          
          @media (max-width: 480px) {
            .artigos-table-header {
              padding: 0.5rem !important;
            }
            
            .artigos-table-row {
              padding: 0.75rem !important;
            }
            
            .artigos-row-meta {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      AdminLayout,
      {
        user,
        currentPage: "artigos",
        pageTitle: "Gerenciar Artigos",
        pageActions: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "artigos-page-actions", style: { display: "flex", gap: "1rem", alignItems: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "input",
            {
              type: "search",
              placeholder: "\u{1F50D} Buscar artigos...",
              className: "artigos-search-input",
              style: {
                padding: "0.75rem 1rem",
                background: "rgba(45, 55, 72, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.4)",
                borderRadius: "8px",
                color: "#f8fafc",
                fontSize: "0.9rem",
                outline: "none",
                minWidth: "250px"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "select",
            {
              className: "artigos-select",
              style: {
                padding: "0.75rem 1rem",
                background: "rgba(45, 55, 72, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.4)",
                borderRadius: "8px",
                color: "#f8fafc",
                fontSize: "0.9rem",
                outline: "none"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "", children: "Todos os status" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "ativo", children: "Ativos" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "inativo", children: "Inativos" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react6.Link, { to: "/admin/artigos/novo", className: "artigos-new-button", style: {
            background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "all 0.2s"
          }, children: "\u2795 Novo Artigo" })
        ] }),
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: {
          background: "rgba(26, 32, 44, 0.8)",
          backdropFilter: "blur(20px)",
          borderRadius: "16px",
          border: "1px solid rgba(51, 65, 85, 0.3)",
          overflow: "hidden",
          boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "artigos-table-header", style: {
            display: "grid",
            gridTemplateColumns: "1fr auto auto auto auto",
            gap: "1rem",
            padding: "1rem 1.5rem",
            borderBottom: "1px solid #334155",
            background: "rgba(45, 55, 72, 0.5)",
            fontWeight: "600",
            fontSize: "0.9rem",
            color: "#94a3b8"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: "ARTIGO" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "artigos-desktop-column", style: { textAlign: "center" }, children: "VISUALIZA\xC7\xD5ES" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "artigos-desktop-column", style: { textAlign: "center" }, children: "STATUS" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "artigos-desktop-column", style: { textAlign: "center" }, children: "DATA" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { textAlign: "center" }, children: "A\xC7\xD5ES" })
          ] }),
          artigos.length > 0 ? artigos.map((artigo) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "div",
            {
              className: "artigos-table-row",
              style: {
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto auto",
                gap: "1rem",
                padding: "1.5rem",
                borderBottom: "1px solid rgba(51, 65, 85, 0.3)",
                alignItems: "center",
                transition: "background 0.2s"
              },
              onMouseEnter: (e) => e.currentTarget.style.background = "rgba(45, 55, 72, 0.3)",
              onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { style: {
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "#f8fafc"
                  }, children: artigo.titulo }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { style: {
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "#94a3b8",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }, children: artigo.resumo }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: {
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "0.5rem",
                    flexWrap: "wrap"
                  }, children: artigo.tags.map((tag2) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: {
                    fontSize: "0.7rem",
                    padding: "0.25rem 0.5rem",
                    background: "rgba(14, 165, 233, 0.2)",
                    color: "#0ea5e9",
                    borderRadius: "4px"
                  }, children: tag2 }, tag2)) }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "artigos-row-meta artigos-mobile-visible", style: { display: "none", marginTop: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "1rem", alignItems: "center" }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { style: { fontSize: "0.8rem", color: "#94a3b8" }, children: [
                      "\u{1F441}\uFE0F ",
                      artigo.visualizacoes.toLocaleString()
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: {
                      padding: "0.25rem 0.75rem",
                      borderRadius: "12px",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      background: artigo.ativo ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)",
                      color: artigo.ativo ? "#22c55e" : "#ef4444"
                    }, children: artigo.ativo ? "Ativo" : "Inativo" }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: { fontSize: "0.75rem", color: "#94a3b8" }, children: new Date(artigo.data_publicacao).toLocaleDateString("pt-BR") })
                  ] }) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "artigos-desktop-column", style: {
                  textAlign: "center",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#f8fafc"
                }, children: artigo.visualizacoes.toLocaleString() }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "artigos-desktop-column", style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: {
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    background: artigo.ativo ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)",
                    color: artigo.ativo ? "#22c55e" : "#ef4444"
                  }, children: artigo.ativo ? "Ativo" : "Inativo" }),
                  artigo.destaque && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: {
                    marginTop: "0.25rem",
                    fontSize: "0.7rem",
                    color: "#fbbf24"
                  }, children: "\u2B50 Destaque" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "artigos-desktop-column", style: {
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: "#94a3b8"
                }, children: new Date(artigo.data_publicacao).toLocaleDateString("pt-BR") }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: {
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: "center"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react6.Link, { to: `/blog/${artigo.slug}`, target: "_blank", style: {
                    padding: "0.5rem",
                    background: "rgba(34, 197, 94, 0.2)",
                    color: "#22c55e",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }, children: "\u{1F441}\uFE0F" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react6.Link, { to: `/admin/artigos/${artigo.id}/editar`, style: {
                    padding: "0.5rem",
                    background: "rgba(14, 165, 233, 0.2)",
                    color: "#0ea5e9",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }, children: "\u270F\uFE0F" })
                ] })
              ]
            },
            artigo.id
          )) : /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: {
            padding: "3rem",
            textAlign: "center",
            color: "#94a3b8"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { style: { marginBottom: "1rem" }, children: "Nenhum artigo encontrado" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react6.Link, { to: "/admin/artigos/novo", style: {
              color: "#0ea5e9",
              textDecoration: "none"
            }, children: "Criar primeiro artigo \u2192" })
          ] })
        ] })
      }
    )
  ] });
}

// app/routes/admin.artigos.novo.tsx
var admin_artigos_novo_exports = {};
__export(admin_artigos_novo_exports, {
  action: () => action,
  default: () => NovoArtigo,
  loader: () => loader4,
  meta: () => meta7
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_jsx_runtime10 = require("react/jsx-runtime"), meta7 = () => [
  { title: "Novo Artigo - Admin RaiseUp" },
  { name: "robots", content: "noindex, nofollow" }
], loader4 = async ({ request }) => {
  let user = await requireUser(request);
  return (0, import_node5.json)({ user });
}, action = async ({ request }) => {
  var _a2, _b, _c, _d;
  await requireUser(request);
  let formData = await request.formData(), titulo = (_a2 = formData.get("titulo")) == null ? void 0 : _a2.toString(), conteudo = (_b = formData.get("conteudo")) == null ? void 0 : _b.toString(), resumo = (_c = formData.get("resumo")) == null ? void 0 : _c.toString(), slug = (_d = formData.get("slug")) == null ? void 0 : _d.toString(), ativo = formData.get("ativo") === "on";
  if (!titulo || !conteudo || !resumo || !slug)
    return (0, import_node5.json)({
      erro: "Todos os campos s\xE3o obrigat\xF3rios",
      values: { titulo, conteudo, resumo, slug, ativo }
    }, { status: 400 });
  try {
    let { data, error } = await supabase.from("artigos").insert({
      titulo,
      conteudo,
      resumo,
      slug,
      ativo,
      autor: "Admin",
      visualizacoes: 0
    }).select().single();
    return error ? (console.error("Erro ao criar artigo:", error), (0, import_node5.json)({
      erro: "Erro ao criar artigo. Verifique se o slug n\xE3o est\xE1 duplicado.",
      values: { titulo, conteudo, resumo, slug, ativo }
    }, { status: 400 })) : (0, import_node5.redirect)("/admin/artigos");
  } catch (error) {
    return console.error("Erro ao criar artigo:", error), (0, import_node5.json)({
      erro: "Erro interno. Tente novamente.",
      values: { titulo, conteudo, resumo, slug, ativo }
    }, { status: 500 });
  }
};
function NovoArtigo() {
  let actionData = (0, import_react7.useActionData)(), isSubmitting = (0, import_react7.useNavigation)().state === "submitting", values = (actionData == null ? void 0 : actionData.values) || {};
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%)",
    color: "#f8fafc",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("header", { style: {
      background: "rgba(26, 32, 44, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(51, 65, 85, 0.3)",
      padding: "1rem 2rem",
      position: "sticky",
      top: 0,
      zIndex: 100
    }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react7.Link, { to: "/admin/artigos", style: {
        color: "#94a3b8",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "color 0.2s"
      }, children: "\u2190 Voltar" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { style: {
        fontSize: "1.5rem",
        fontWeight: "700",
        background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        margin: 0
      }, children: "Novo Artigo" })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { maxWidth: "800px", margin: "0 auto", padding: "2rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react7.Form, { method: "post", style: {
      background: "rgba(26, 32, 44, 0.8)",
      backdropFilter: "blur(20px)",
      padding: "2rem",
      borderRadius: "16px",
      border: "1px solid rgba(51, 65, 85, 0.3)",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)"
    }, children: [
      (actionData == null ? void 0 : actionData.erro) && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: {
        background: "rgba(239, 68, 68, 0.1)",
        border: "1px solid rgba(239, 68, 68, 0.3)",
        color: "#ef4444",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1.5rem",
        fontSize: "0.9rem"
      }, children: [
        "\u274C ",
        actionData.erro
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { display: "grid", gap: "1.5rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { style: {
            display: "block",
            marginBottom: "0.5rem",
            color: "#f8fafc",
            fontWeight: "600",
            fontSize: "0.9rem"
          }, children: "T\xEDtulo *" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "input",
            {
              type: "text",
              name: "titulo",
              required: !0,
              defaultValue: values.titulo,
              style: {
                width: "100%",
                padding: "0.875rem 1rem",
                background: "rgba(45, 55, 72, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.4)",
                borderRadius: "8px",
                color: "#f8fafc",
                fontSize: "1rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box"
              },
              onFocus: (e) => {
                e.target.style.borderColor = "#0ea5e9", e.target.style.boxShadow = "0 0 0 3px rgba(14, 165, 233, 0.1)";
              },
              onBlur: (e) => {
                e.target.style.borderColor = "rgba(51, 65, 85, 0.4)", e.target.style.boxShadow = "none";
              },
              placeholder: "Ex: Como a IA pode revolucionar sua empresa"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { style: {
            display: "block",
            marginBottom: "0.5rem",
            color: "#f8fafc",
            fontWeight: "600",
            fontSize: "0.9rem"
          }, children: "Slug (URL) *" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "input",
            {
              type: "text",
              name: "slug",
              required: !0,
              defaultValue: values.slug,
              style: {
                width: "100%",
                padding: "0.875rem 1rem",
                background: "rgba(45, 55, 72, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.4)",
                borderRadius: "8px",
                color: "#f8fafc",
                fontSize: "1rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box"
              },
              onFocus: (e) => {
                e.target.style.borderColor = "#0ea5e9", e.target.style.boxShadow = "0 0 0 3px rgba(14, 165, 233, 0.1)";
              },
              onBlur: (e) => {
                e.target.style.borderColor = "rgba(51, 65, 85, 0.4)", e.target.style.boxShadow = "none";
              },
              placeholder: "como-ia-pode-revolucionar-sua-empresa"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { style: {
            color: "#94a3b8",
            fontSize: "0.8rem",
            margin: "0.5rem 0 0 0"
          }, children: "Use apenas letras min\xFAsculas, n\xFAmeros e h\xEDfens. Ex: meu-artigo-incrivel" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { style: {
            display: "block",
            marginBottom: "0.5rem",
            color: "#f8fafc",
            fontWeight: "600",
            fontSize: "0.9rem"
          }, children: "Resumo *" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "textarea",
            {
              name: "resumo",
              required: !0,
              rows: 3,
              defaultValue: values.resumo,
              style: {
                width: "100%",
                padding: "0.875rem 1rem",
                background: "rgba(45, 55, 72, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.4)",
                borderRadius: "8px",
                color: "#f8fafc",
                fontSize: "1rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box",
                resize: "vertical",
                minHeight: "80px"
              },
              onFocus: (e) => {
                e.target.style.borderColor = "#0ea5e9", e.target.style.boxShadow = "0 0 0 3px rgba(14, 165, 233, 0.1)";
              },
              onBlur: (e) => {
                e.target.style.borderColor = "rgba(51, 65, 85, 0.4)", e.target.style.boxShadow = "none";
              },
              placeholder: "Breve descri\xE7\xE3o do artigo para aparecer nas listagens..."
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { style: {
            display: "block",
            marginBottom: "0.5rem",
            color: "#f8fafc",
            fontWeight: "600",
            fontSize: "0.9rem"
          }, children: "Conte\xFAdo (Markdown) *" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "textarea",
            {
              name: "conteudo",
              required: !0,
              rows: 20,
              defaultValue: values.conteudo,
              style: {
                width: "100%",
                padding: "1rem",
                background: "rgba(45, 55, 72, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.4)",
                borderRadius: "8px",
                color: "#f8fafc",
                fontSize: "0.95rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box",
                resize: "vertical",
                minHeight: "400px",
                fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
                lineHeight: "1.6"
              },
              onFocus: (e) => {
                e.target.style.borderColor = "#0ea5e9", e.target.style.boxShadow = "0 0 0 3px rgba(14, 165, 233, 0.1)";
              },
              onBlur: (e) => {
                e.target.style.borderColor = "rgba(51, 65, 85, 0.4)", e.target.style.boxShadow = "none";
              },
              placeholder: `# T\xEDtulo do Artigo

## Introdu\xE7\xE3o

Seu conte\xFAdo aqui em Markdown...

### Subt\xEDtulo

- Lista item 1
- Lista item 2

**Texto em negrito** e *texto em it\xE1lico*`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { style: {
            color: "#94a3b8",
            fontSize: "0.8rem",
            margin: "0.5rem 0 0 0"
          }, children: "Use Markdown para formata\xE7\xE3o. Suporte a t\xEDtulos (##), listas, negrito (**texto**), it\xE1lico (*texto*), etc." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "1rem",
          background: "rgba(15, 23, 42, 0.5)",
          borderRadius: "8px",
          border: "1px solid rgba(51, 65, 85, 0.3)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "input",
            {
              type: "checkbox",
              name: "ativo",
              id: "ativo",
              defaultChecked: values.ativo !== !1,
              style: {
                width: "18px",
                height: "18px",
                accentColor: "#0ea5e9"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { htmlFor: "ativo", style: {
            color: "#f8fafc",
            fontWeight: "500",
            cursor: "pointer"
          }, children: "Publicar artigo (ativo)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: {
          display: "flex",
          gap: "1rem",
          justifyContent: "flex-end",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(51, 65, 85, 0.3)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_react7.Link,
            {
              to: "/admin/artigos",
              style: {
                padding: "0.875rem 1.5rem",
                background: "rgba(107, 114, 128, 0.2)",
                border: "1px solid rgba(107, 114, 128, 0.3)",
                borderRadius: "8px",
                color: "#d1d5db",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.2s",
                display: "inline-block"
              },
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              style: {
                padding: "0.875rem 1.5rem",
                background: isSubmitting ? "rgba(107, 114, 128, 0.5)" : "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              },
              onMouseEnter: (e) => {
                isSubmitting || (e.target.style.transform = "translateY(-1px)", e.target.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)");
              },
              onMouseLeave: (e) => {
                e.target.style.transform = "translateY(0)", e.target.style.boxShadow = "none";
              },
              children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: {
                  width: "16px",
                  height: "16px",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  borderTopColor: "white",
                  animation: "spin 1s linear infinite"
                } }),
                "Salvando..."
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: "\u{1F4BE} Salvar Artigo" })
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `
    } })
  ] });
}

// app/routes/admin._index.tsx
var admin_index_exports = {};
__export(admin_index_exports, {
  default: () => AdminDashboard,
  loader: () => loader5,
  meta: () => meta8
});
var import_node6 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime"), meta8 = () => [
  { title: "Dashboard Admin - RaiseUp" },
  { name: "robots", content: "noindex, nofollow" }
], loader5 = async ({ request }) => {
  let user = await requireUser(request);
  try {
    let hoje = /* @__PURE__ */ new Date(), ontem = new Date(hoje);
    ontem.setDate(hoje.getDate() - 1);
    let inicioSemana = new Date(hoje);
    inicioSemana.setDate(hoje.getDate() - 7);
    let mesPassado = new Date(hoje);
    mesPassado.setMonth(hoje.getMonth() - 1);
    let [
      contatosResult,
      artigosResult,
      totalContatosResult,
      totalArtigosResult,
      contatosHojeResult,
      contatosOntemResult,
      contatosSemanaResult,
      contatosMesPassadoResult,
      artigosSemanaResult
    ] = await Promise.all([
      // Contatos recentes
      supabase.from("contatos").select("id, nome, criado_em, status").order("criado_em", { ascending: !1 }).limit(5),
      // Artigos populares
      supabase.from("artigos").select("id, titulo, visualizacoes, ativo").order("visualizacoes", { ascending: !1 }).limit(5),
      // Total de contatos
      supabase.from("contatos").select("id", { count: "exact", head: !0 }),
      // Total de artigos
      supabase.from("artigos").select("id", { count: "exact", head: !0 }),
      // Contatos hoje
      supabase.from("contatos").select("id", { count: "exact", head: !0 }).gte("criado_em", hoje.toISOString().split("T")[0]),
      // Contatos ontem
      supabase.from("contatos").select("id", { count: "exact", head: !0 }).gte("criado_em", ontem.toISOString().split("T")[0]).lt("criado_em", hoje.toISOString().split("T")[0]),
      // Contatos esta semana
      supabase.from("contatos").select("id", { count: "exact", head: !0 }).gte("criado_em", inicioSemana.toISOString().split("T")[0]),
      // Contatos mês passado
      supabase.from("contatos").select("id", { count: "exact", head: !0 }).gte("criado_em", mesPassado.toISOString().split("T")[0]).lt("criado_em", hoje.toISOString().split("T")[0]),
      // Artigos criados esta semana
      supabase.from("artigos").select("id", { count: "exact", head: !0 }).gte("criado_em", inicioSemana.toISOString().split("T")[0])
    ]), contatos = contatosResult.data || [], artigos = artigosResult.data || [], totalContatos = totalContatosResult.count || 0, totalArtigos = totalArtigosResult.count || 0, contatosHoje = contatosHojeResult.count || 0, contatosOntem = contatosOntemResult.count || 0, contatosSemana = contatosSemanaResult.count || 0, contatosMesPassado = contatosMesPassadoResult.count || 0, artigosSemana = artigosSemanaResult.count || 0, crescimentoContatosVsOntem = contatosOntem > 0 ? ((contatosHoje - contatosOntem) / contatosOntem * 100).toFixed(1) : contatosHoje > 0 ? "100" : "0", crescimentoContatosVsMes = contatosMesPassado > 0 ? ((totalContatos - contatosMesPassado) / contatosMesPassado * 100).toFixed(1) : totalContatos > 0 ? "100" : "0";
    return (0, import_node6.json)({
      user,
      contatos,
      artigos,
      stats: {
        totalContatos,
        totalArtigos,
        contatosHoje,
        artigosSemana,
        crescimentoContatosVsOntem: parseFloat(crescimentoContatosVsOntem),
        crescimentoContatosVsMes: parseFloat(crescimentoContatosVsMes),
        // Simulando dados de acesso (pode integrar com Analytics depois)
        acessos30Dias: 15400,
        crescimentoAcessos: 18.5
      }
    });
  } catch (error) {
    return console.error("Erro ao carregar dashboard:", error), (0, import_node6.json)({
      user,
      contatos: [],
      artigos: [],
      stats: {
        totalContatos: 0,
        totalArtigos: 0,
        contatosHoje: 0,
        artigosSemana: 0,
        crescimentoContatosVsOntem: 0,
        crescimentoContatosVsMes: 0,
        acessos30Dias: 0,
        crescimentoAcessos: 0
      }
    });
  }
};
function AdminDashboard() {
  let { user, contatos, artigos, stats } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          @media (max-width: 768px) {
            .dashboard-stats-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .dashboard-content-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .dashboard-stat-card {
              padding: 1.5rem !important;
            }
            
            .dashboard-stat-number {
              font-size: 2rem !important;
            }
            
            .dashboard-content-card {
              padding: 1rem !important;
            }
            
            .dashboard-contact-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
            }
            
            .dashboard-article-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .dashboard-stat-card {
              padding: 1rem !important;
            }
            
            .dashboard-stat-number {
              font-size: 1.75rem !important;
            }
            
            .dashboard-stat-icon {
              font-size: 1.5rem !important;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      AdminLayout,
      {
        user,
        currentPage: "dashboard",
        pageTitle: "Dashboard",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-stats-grid", style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-stat-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(14, 165, 233, 0.3)",
              padding: "2rem",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "dashboard-stat-icon", style: {
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontSize: "2rem",
                opacity: 0.7
              }, children: "\u{1F4DE}" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { style: {
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
                color: "#94a3b8",
                fontWeight: "500"
              }, children: "Total de Contatos" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "dashboard-stat-number", style: {
                fontSize: "2.5rem",
                fontWeight: "700",
                margin: "0 0 0.5rem 0",
                background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }, children: stats.totalContatos }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { style: {
                color: stats.crescimentoContatosVsMes >= 0 ? "#22c55e" : "#ef4444",
                fontSize: "0.8rem",
                margin: 0
              }, children: [
                stats.crescimentoContatosVsMes >= 0 ? "+" : "",
                stats.crescimentoContatosVsMes,
                "% vs m\xEAs anterior"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-stat-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              padding: "2rem",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "dashboard-stat-icon", style: {
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontSize: "2rem",
                opacity: 0.7
              }, children: "\u{1F4C5}" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { style: {
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
                color: "#94a3b8",
                fontWeight: "500"
              }, children: "Contatos Hoje" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: {
                fontSize: "2.5rem",
                fontWeight: "700",
                margin: "0 0 0.5rem 0",
                background: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }, children: stats.contatosHoje }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { style: {
                color: stats.crescimentoContatosVsOntem >= 0 ? "#22c55e" : "#ef4444",
                fontSize: "0.8rem",
                margin: 0
              }, children: [
                stats.crescimentoContatosVsOntem >= 0 ? "+" : "",
                stats.crescimentoContatosVsOntem,
                "% vs ontem"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-stat-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              padding: "2rem",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "dashboard-stat-icon", style: {
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontSize: "2rem",
                opacity: 0.7
              }, children: "\u{1F4DD}" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { style: {
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
                color: "#94a3b8",
                fontWeight: "500"
              }, children: "Total de Artigos" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: {
                fontSize: "2.5rem",
                fontWeight: "700",
                margin: "0 0 0.5rem 0",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }, children: stats.totalArtigos }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { style: { color: "#22c55e", fontSize: "0.8rem", margin: 0 }, children: [
                "+",
                stats.artigosSemana,
                " esta semana"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-stat-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              padding: "2rem",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "dashboard-stat-icon", style: {
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontSize: "2rem",
                opacity: 0.7
              }, children: "\u{1F4C8}" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { style: {
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
                color: "#94a3b8",
                fontWeight: "500"
              }, children: "Acessos (30 dias)" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { style: {
                fontSize: "2.5rem",
                fontWeight: "700",
                margin: "0 0 0.5rem 0",
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }, children: [
                (stats.acessos30Dias / 1e3).toFixed(1),
                "K"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { style: { color: "#22c55e", fontSize: "0.8rem", margin: 0 }, children: [
                "+",
                stats.crescimentoAcessos,
                "% vs m\xEAs anterior"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-content-grid", style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-content-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(51, 65, 85, 0.3)",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { style: { fontSize: "1.25rem", fontWeight: "600", margin: 0 }, children: "Contatos Recentes" }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.Link, { to: "/admin/contatos", style: {
                  color: "#0ea5e9",
                  textDecoration: "none",
                  fontSize: "0.9rem"
                }, children: "Ver todos \u2192" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: contatos.length > 0 ? contatos.map((contato) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
                padding: "0.75rem",
                background: "rgba(45, 55, 72, 0.5)",
                borderRadius: "6px",
                borderLeft: "3px solid #0ea5e9"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-contact-item", style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: { fontWeight: "500" }, children: contato.nome }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: {
                    fontSize: "0.75rem",
                    color: "#94a3b8"
                  }, children: new Date(contato.criado_em).toLocaleDateString("pt-BR") })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: {
                  fontSize: "0.8rem",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                  background: contato.status === "novo" ? "rgba(34, 197, 94, 0.2)" : "rgba(156, 163, 175, 0.2)",
                  color: contato.status === "novo" ? "#22c55e" : "#9ca3af"
                }, children: contato.status })
              ] }, contato.id)) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: { color: "#94a3b8", textAlign: "center", padding: "2rem" }, children: "Nenhum contato encontrado" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-content-card", style: {
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(51, 65, 85, 0.3)",
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { style: { fontSize: "1.25rem", fontWeight: "600", margin: 0 }, children: "Artigos Populares" }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.Link, { to: "/admin/artigos", style: {
                  color: "#0ea5e9",
                  textDecoration: "none",
                  fontSize: "0.9rem"
                }, children: "Gerenciar \u2192" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: artigos.length > 0 ? artigos.map((artigo) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
                padding: "0.75rem",
                background: "rgba(45, 55, 72, 0.5)",
                borderRadius: "6px",
                borderLeft: "3px solid #8b5cf6"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "dashboard-article-item", style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: {
                    fontWeight: "500",
                    fontSize: "0.9rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }, children: artigo.titulo }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { style: {
                    fontSize: "0.75rem",
                    color: "#94a3b8"
                  }, children: [
                    artigo.visualizacoes,
                    " views"
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: {
                  fontSize: "0.8rem",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                  background: artigo.ativo ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)",
                  color: artigo.ativo ? "#22c55e" : "#ef4444"
                }, children: artigo.ativo ? "Ativo" : "Inativo" })
              ] }, artigo.id)) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: { color: "#94a3b8", textAlign: "center", padding: "2rem" }, children: "Nenhum artigo encontrado" }) })
            ] })
          ] })
        ]
      }
    )
  ] });
}

// app/routes/admin.logout.tsx
var admin_logout_exports = {};
__export(admin_logout_exports, {
  action: () => action2,
  loader: () => loader6
});
var action2 = async ({ request }) => logout(request), loader6 = async () => new Response("", { status: 404 });

// app/routes/admin.login.tsx
var admin_login_exports = {};
__export(admin_login_exports, {
  action: () => action3,
  default: () => LoginAdmin,
  loader: () => loader7,
  meta: () => meta9
});
var import_node7 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_react10 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime"), meta9 = () => [
  { title: "Login Administrativo - RaiseUp" },
  { name: "description", content: "\xC1rea administrativa da RaiseUp" },
  { name: "robots", content: "noindex, nofollow" }
], loader7 = async ({ request }) => await getUser(request) ? (0, import_node7.redirect)("/admin") : (0, import_node7.json)({}), action3 = async ({ request }) => {
  var _a2, _b;
  console.log("=== ACTION INICIADA ===");
  let formData = await request.formData();
  console.log("=== FORM DEBUG ===");
  for (let [key, value] of formData.entries())
    console.log(`${key}: ${value}`);
  let email = (_a2 = formData.get("email")) == null ? void 0 : _a2.toString(), senha = (_b = formData.get("senha")) == null ? void 0 : _b.toString();
  if (console.log("Email extra\xEDdo:", email), console.log("Senha extra\xEDda:", senha), !email || !senha)
    return console.log("Email ou senha n\xE3o fornecidos"), (0, import_node7.json)({ erro: "Email e senha s\xE3o obrigat\xF3rios" }, { status: 400 });
  console.log("Chamando fun\xE7\xE3o login...");
  let user = await login(email, senha);
  return console.log("Retorno da fun\xE7\xE3o login:", user), user ? (console.log("Login bem-sucedido para:", user.email), createUserSession(user.id, "/admin")) : (console.log("Login falhou - usu\xE1rio n\xE3o encontrado ou senha inv\xE1lida"), (0, import_node7.json)({ erro: "Email ou senha inv\xE1lidos" }, { status: 401 }));
};
function LoginAdmin() {
  let actionData = (0, import_react9.useActionData)(), navigation = (0, import_react9.useNavigation)(), [showPassword, setShowPassword] = (0, import_react10.useState)(!1), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0f1c 0%, #1a202c 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: {
      background: "rgba(26, 32, 44, 0.9)",
      padding: "3rem",
      borderRadius: "16px",
      border: "1px solid rgba(51, 65, 85, 0.3)",
      backdropFilter: "blur(10px)",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { textAlign: "center", marginBottom: "2rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { style: {
          fontSize: "2rem",
          fontWeight: "700",
          color: "#f8fafc",
          marginBottom: "0.5rem",
          background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }, children: "RaiseUp Admin" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { style: { color: "#94a3b8", fontSize: "0.9rem" }, children: "\xC1rea administrativa" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react9.Form, { method: "post", children: [
        (actionData == null ? void 0 : actionData.erro) && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: {
          background: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          color: "#ef4444",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "1.5rem",
          fontSize: "0.9rem"
        }, children: [
          "\u274C ",
          actionData.erro
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { style: {
            display: "block",
            marginBottom: "0.5rem",
            color: "#f8fafc",
            fontWeight: "500",
            fontSize: "0.9rem"
          }, children: "Email" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "input",
            {
              type: "email",
              name: "email",
              required: !0,
              style: {
                width: "100%",
                padding: "0.75rem 1rem",
                background: "#2d3748",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#f8fafc",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box"
              },
              onFocus: (e) => e.target.style.borderColor = "#0ea5e9",
              onBlur: (e) => e.target.style.borderColor = "#334155",
              placeholder: "admin@raiseup.com.br"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { style: {
            display: "block",
            marginBottom: "0.5rem",
            color: "#f8fafc",
            fontWeight: "500",
            fontSize: "0.9rem"
          }, children: "Senha" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "input",
              {
                type: showPassword ? "text" : "password",
                name: "senha",
                required: !0,
                style: {
                  width: "100%",
                  padding: "0.75rem 3rem 0.75rem 1rem",
                  background: "#2d3748",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#f8fafc",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box"
                },
                onFocus: (e) => e.target.style.borderColor = "#0ea5e9",
                onBlur: (e) => e.target.style.borderColor = "#334155",
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                style: {
                  position: "absolute",
                  right: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  padding: "0.25rem",
                  fontSize: "0.9rem"
                },
                children: showPassword ? "\u{1F441}\uFE0F" : "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            style: {
              width: "100%",
              padding: "0.875rem",
              background: isSubmitting ? "#6b7280" : "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem"
            },
            onMouseEnter: (e) => {
              isSubmitting || (e.target.style.transform = "translateY(-1px)", e.target.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)");
            },
            onMouseLeave: (e) => {
              e.target.style.transform = "translateY(0)", e.target.style.boxShadow = "none";
            },
            children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { style: {
                width: "16px",
                height: "16px",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "50%",
                borderTopColor: "white",
                animation: "spin 1s linear infinite"
              } }),
              "Entrando..."
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: "\u{1F510} Entrar" })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { style: {
        marginTop: "2rem",
        textAlign: "center",
        fontSize: "0.8rem",
        color: "#64748b"
      }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "Acesso restrito para administradores" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `
    } })
  ] });
}

// app/routes/api.contato.tsx
var api_contato_exports = {};
__export(api_contato_exports, {
  action: () => action4
});
var import_node8 = require("@remix-run/node");

// app/lib/validacao.ts
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validarTelefone(telefone) {
  let telefoneLimpo = telefone.replace(/\D/g, "");
  return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
}
function sanitizarTexto(texto) {
  return texto.trim().replace(/[<>]/g, "").slice(0, 1e3);
}
function extrairNumerosTelefone(telefone) {
  return telefone.replace(/\D/g, "");
}
function validarAreaInteresse(area) {
  return ["conversacional", "midias-sociais", "produtividade", "todos", "outro"].includes(area);
}
function validarFormularioContato(dados) {
  let erros = [];
  return (!dados.nome || dados.nome.trim().length < 2) && erros.push({ campo: "nome", mensagem: "Nome deve ter pelo menos 2 caracteres" }), (!dados.email || !validarEmail(dados.email)) && erros.push({ campo: "email", mensagem: "Email inv\xE1lido" }), (!dados.telefone || !validarTelefone(dados.telefone)) && erros.push({ campo: "telefone", mensagem: "Telefone inv\xE1lido" }), (!dados.area_interesse || !validarAreaInteresse(dados.area_interesse)) && erros.push({ campo: "area_interesse", mensagem: "\xC1rea de interesse inv\xE1lida" }), dados.mensagem && dados.mensagem.trim().length > 0 && dados.mensagem.trim().length < 10 && erros.push({ campo: "mensagem", mensagem: "Mensagem deve ter pelo menos 10 caracteres" }), erros;
}

// app/lib/rate-limit.server.ts
var MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "5"), WINDOW_MINUTES = parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES || "60");
async function verificarRateLimit(ip) {
  try {
    let agora = /* @__PURE__ */ new Date(), janela = new Date(agora.getTime() - WINDOW_MINUTES * 60 * 1e3), { data: rateLimitData, error: selectError } = await supabase.from("rate_limit").select("*").eq("endereco_ip", ip).single();
    if (selectError && selectError.code !== "PGRST116")
      return console.error("Erro ao verificar rate limit:", selectError), { permitir: !0 };
    if (!rateLimitData) {
      let { error: insertError } = await supabase.from("rate_limit").insert({
        endereco_ip: ip,
        contador: 1,
        primeira_tentativa: agora.toISOString(),
        ultima_tentativa: agora.toISOString()
      });
      return insertError ? (console.error("Erro ao criar rate limit:", insertError), { permitir: !0 }) : { permitir: !0 };
    }
    let primeiraTentativa = new Date(rateLimitData.primeira_tentativa);
    if (primeiraTentativa < janela) {
      let { error: updateError2 } = await supabase.from("rate_limit").update({
        contador: 1,
        primeira_tentativa: agora.toISOString(),
        ultima_tentativa: agora.toISOString()
      }).eq("endereco_ip", ip);
      return updateError2 ? (console.error("Erro ao resetar rate limit:", updateError2), { permitir: !0 }) : { permitir: !0 };
    }
    if (rateLimitData.contador >= MAX_REQUESTS)
      return {
        permitir: !1,
        mensagem: `Muitas tentativas. Tente novamente em ${Math.ceil((primeiraTentativa.getTime() + WINDOW_MINUTES * 60 * 1e3 - agora.getTime()) / 6e4)} minutos.`
      };
    let { error: updateError } = await supabase.from("rate_limit").update({
      contador: rateLimitData.contador + 1,
      ultima_tentativa: agora.toISOString()
    }).eq("endereco_ip", ip);
    return updateError ? (console.error("Erro ao atualizar rate limit:", updateError), { permitir: !0 }) : { permitir: !0 };
  } catch (error) {
    return console.error("Erro no rate limit:", error), { permitir: !0 };
  }
}

// app/routes/api.contato.tsx
function obterIpCliente(request) {
  let forwarded = request.headers.get("x-forwarded-for"), realIp = request.headers.get("x-real-ip");
  return forwarded ? forwarded.split(",")[0].trim() : realIp || "127.0.0.1";
}
async function action4({ request }) {
  var _a2, _b, _c, _d, _e, _f;
  if (request.method !== "POST")
    return (0, import_node8.json)({ erro: "M\xE9todo n\xE3o permitido" }, { status: 405 });
  try {
    let ip = obterIpCliente(request), userAgent = request.headers.get("user-agent") || "", rateLimitResult = await verificarRateLimit(ip);
    if (!rateLimitResult.permitir)
      return (0, import_node8.json)(
        { erro: rateLimitResult.mensagem || "Muitas tentativas" },
        { status: 429 }
      );
    let formData = await request.formData(), dadosFormulario = {
      nome: ((_a2 = formData.get("name")) == null ? void 0 : _a2.toString()) || "",
      email: ((_b = formData.get("email")) == null ? void 0 : _b.toString()) || "",
      telefone: ((_c = formData.get("phone")) == null ? void 0 : _c.toString()) || "",
      empresa: ((_d = formData.get("company")) == null ? void 0 : _d.toString()) || "",
      area_interesse: ((_e = formData.get("interest")) == null ? void 0 : _e.toString()) || "",
      mensagem: ((_f = formData.get("message")) == null ? void 0 : _f.toString()) || ""
    }, erros = validarFormularioContato(dadosFormulario);
    if (erros.length > 0)
      return (0, import_node8.json)({ erros }, { status: 400 });
    let dadosLimpos = {
      nome: sanitizarTexto(dadosFormulario.nome),
      email: dadosFormulario.email.toLowerCase().trim(),
      telefone: extrairNumerosTelefone(dadosFormulario.telefone),
      // Salva apenas números
      empresa: dadosFormulario.empresa ? sanitizarTexto(dadosFormulario.empresa) : void 0,
      area_interesse: dadosFormulario.area_interesse,
      mensagem: dadosFormulario.mensagem ? sanitizarTexto(dadosFormulario.mensagem) : "Nenhuma mensagem adicional",
      endereco_ip: ip,
      navegador: userAgent.slice(0, 500)
      // Limita o tamanho
    }, { data, error } = await supabase.from("contatos").insert(dadosLimpos).select().single();
    return error ? (console.error("Erro ao salvar contato:", error), (0, import_node8.json)(
      { erro: "Erro interno do servidor. Tente novamente." },
      { status: 500 }
    )) : (0, import_node8.json)({
      sucesso: !0,
      mensagem: "Contato enviado com sucesso! Retornaremos em breve.",
      id: data.id
    });
  } catch (error) {
    return console.error("Erro no endpoint de contato:", error), (0, import_node8.json)(
      { erro: "Erro interno do servidor. Tente novamente." },
      { status: 500 }
    );
  }
}

// app/routes/blog._index.tsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => BlogIndex,
  loader: () => loader8,
  meta: () => meta10
});
var import_node9 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/components/BlogLayout.tsx
var import_react11 = require("@remix-run/react"), import_jsx_runtime13 = require("react/jsx-runtime");
function BlogLayout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "blog-layout", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("style", { children: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background: #0a0f1c;
            overflow-x: hidden;
          }

          :root {
            --primary-bg: #0a0f1c;
            --secondary-bg: #1a202c;
            --tertiary-bg: #2d3748;
            --accent-bg: #1e3a8a;
            --accent-light: #3b82f6;
            
            --primary-blue: #0ea5e9;
            --blue-light: #38bdf8;
            --blue-dark: #0284c7;
            --cyan: #06b6d4;
            --purple: #8b5cf6;
            
            --text-primary: #f8fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #94a3b8;
            --text-accent: #0ea5e9;
            
            --border-color: #334155;
            --border-light: #475569;
            
            --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
            --gradient-secondary: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --card-padding: 2rem;
            
            --border-radius: 12px;
            --border-radius-lg: 20px;
            
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            --shadow-glow: 0 0 20px rgba(14, 165, 233, 0.3);
            
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .blog-header {
            position: relative;
            width: 100%;
            background: var(--secondary-bg);
            border-bottom: 1px solid var(--border-color);
          }

          .blog-navbar {
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .logo img {
            height: 80px;
            width: auto;
            filter: brightness(0) invert(1);
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            position: relative;
          }

          .nav-link:hover {
            color: var(--text-primary);
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
            border: none;
            position: relative;
            overflow: hidden;
          }

          .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: var(--shadow-md);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
          }

          .btn-secondary {
            background: transparent;
            color: var(--primary-blue);
            border: 2px solid var(--primary-blue);
          }

          .btn-secondary:hover {
            background: var(--primary-blue);
            color: white;
            transform: translateY(-2px);
          }

          /* Header */
          .header {
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .nav-logo {
            text-decoration: none;
            color: inherit;
          }

          .logo-content h2 {
            font-size: 1.75rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0;
          }

          .logo-tagline {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }

          .nav-link:hover {
            color: var(--primary-blue);
          }

          /* Blog specific styles */
          .blog-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }

          .blog-header {
            text-align: center;
            margin-bottom: 2rem;
            padding: 2rem 0;
          }

          .blog-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-blue) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .blog-subtitle {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto;
          }

          .blog-content {
            background: var(--secondary-bg);
            border-radius: var(--border-radius-lg);
            padding: 3rem;
            border: 1px solid var(--border-color);
            line-height: 1.8;
          }

          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4 {
            color: var(--text-primary);
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .blog-content h1 { font-size: 2.5rem; }
          .blog-content h2 { font-size: 2rem; }
          .blog-content h3 { font-size: 1.5rem; }
          .blog-content h4 { font-size: 1.25rem; }

          .blog-content p {
            margin-bottom: 1.5rem;
            color: var(--text-secondary);
          }

          .blog-content ul,
          .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
          }

          .blog-content li {
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
          }

          .blog-content blockquote {
            border-left: 4px solid var(--primary-blue);
            padding-left: 2rem;
            margin: 2rem 0;
            font-style: italic;
            color: var(--text-muted);
          }

          .blog-content code {
            background: var(--tertiary-bg);
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            color: var(--primary-blue);
          }

          .blog-content pre {
            background: var(--tertiary-bg);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            overflow-x: auto;
            margin: 1.5rem 0;
          }

          .blog-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
          }

          .blog-date {
            color: var(--text-muted);
            font-size: 0.9rem;
          }

          .blog-tags {
            display: flex;
            gap: 0.5rem;
          }

          .blog-tag {
            padding: 0.25rem 0.75rem;
            background: var(--tertiary-bg);
            color: var(--primary-blue);
            border-radius: 50px;
            font-size: 0.8rem;
            text-decoration: none;
            transition: var(--transition);
          }

          .blog-tag:hover {
            background: var(--primary-blue);
            color: white;
          }

          .blog-list {
            display: grid;
            gap: 2rem;
            margin-top: 2rem;
          }

          .blog-card {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-lg);
            padding: 2rem;
            transition: var(--transition);
            text-decoration: none;
            color: inherit;
          }

          .blog-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary-blue);
            box-shadow: var(--shadow-glow);
          }

          .blog-card h3 {
            color: var(--text-primary);
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }

          .blog-card p {
            color: var(--text-muted);
            margin-bottom: 1rem;
          }

          .blog-card-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
            color: var(--text-muted);
          }

          /* Markdown content styles */
          .markdown-content {
            color: var(--text-secondary);
            line-height: 1.8;
          }

          .markdown-content h1 {
            font-size: 2.5rem;
            color: var(--text-primary);
            margin: 2rem 0 1rem 0;
            font-weight: 700;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 0.5rem;
          }

          .markdown-content h2 {
            font-size: 2rem;
            color: var(--text-primary);
            margin: 2rem 0 1rem 0;
            font-weight: 600;
          }

          .markdown-content h3 {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin: 1.5rem 0 1rem 0;
            font-weight: 600;
          }

          .markdown-content h4 {
            font-size: 1.25rem;
            color: var(--text-primary);
            margin: 1.5rem 0 0.75rem 0;
            font-weight: 600;
          }

          .markdown-content p {
            margin-bottom: 1.5rem;
            color: var(--text-secondary);
          }

          .markdown-content ul, .markdown-content ol {
            margin: 1.5rem 0;
            padding-left: 2rem;
          }

          .markdown-content li {
            margin-bottom: 0.75rem;
            color: var(--text-secondary);
          }

          .markdown-content li strong {
            color: var(--text-primary);
          }

          .markdown-content strong {
            color: var(--text-primary);
            font-weight: 700;
          }

          .markdown-content em {
            color: var(--primary-blue);
            font-style: italic;
          }

          .markdown-content blockquote {
            border-left: 4px solid var(--primary-blue);
            padding: 1rem 0 1rem 2rem;
            margin: 2rem 0;
            font-style: italic;
            color: var(--text-muted);
            background: rgba(14, 165, 233, 0.05);
            border-radius: 0 8px 8px 0;
          }

          .markdown-content code {
            background: var(--tertiary-bg);
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-family: 'SF Mono', 'Courier New', monospace;
            color: var(--primary-blue);
            font-size: 0.9em;
          }

          .markdown-content pre {
            background: var(--tertiary-bg);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            overflow-x: auto;
            margin: 1.5rem 0;
            border: 1px solid var(--border-color);
          }

          .markdown-content pre code {
            background: none;
            padding: 0;
            color: var(--text-secondary);
          }

          .markdown-content a {
            color: var(--primary-blue);
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: var(--transition);
          }

          .markdown-content a:hover {
            border-bottom-color: var(--primary-blue);
          }

          .markdown-content hr {
            border: none;
            height: 1px;
            background: var(--border-color);
            margin: 3rem 0;
          }

          @media (max-width: 768px) {
            .nav-container {
              padding: 0 1rem;
            }
            
            .blog-container {
              padding: 1rem;
            }

            .blog-content {
              padding: 2rem;
            }

            .nav-menu {
              display: none;
            }
          }
        ` }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("header", { className: "blog-header", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { className: "blog-navbar", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "nav-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react11.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src: "/logo_raiseup.png", alt: "RaiseUp Logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("ul", { className: "nav-menu", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react11.Link, { to: "/", className: "nav-link", children: "In\xEDcio" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react11.Link, { to: "/#about", className: "nav-link", children: "Sobre" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react11.Link, { to: "/#services", className: "nav-link", children: "Servi\xE7os" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react11.Link, { to: "/blog", className: "nav-link", children: "Blog" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react11.Link, { to: "/contato", className: "nav-link", children: "Contato" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("main", { children })
  ] });
}

// app/routes/blog._index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime"), meta10 = () => [
  { title: "Blog RaiseUp | Automa\xE7\xE3o com IA e Transforma\xE7\xE3o Digital" },
  {
    name: "description",
    content: "Descubra estrat\xE9gias de automa\xE7\xE3o empresarial, casos de sucesso e tend\xEAncias em IA para neg\xF3cios. Conte\xFAdo especializado em transforma\xE7\xE3o digital."
  },
  { name: "keywords", content: "automa\xE7\xE3o empresarial, IA para neg\xF3cios, transforma\xE7\xE3o digital, chatbot, produtividade" }
], loader8 = async () => {
  try {
    let [artigosDestaque, artigosRegulares] = await Promise.all([
      buscarArtigosDestaque(),
      buscarArtigosRegulares()
    ]);
    return (0, import_node9.json)({
      artigosDestaque,
      artigosRegulares
    });
  } catch (error) {
    return console.error("Erro ao carregar artigos:", error), (0, import_node9.json)({
      artigosDestaque: [],
      artigosRegulares: []
    });
  }
};
function BlogIndex() {
  let { artigosDestaque, artigosRegulares } = (0, import_react12.useLoaderData)(), featuredPost = artigosDestaque[0], regularPosts = artigosRegulares;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(BlogLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { padding: "4rem 0 2rem", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { style: {
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: "800",
        marginBottom: "1rem",
        background: "linear-gradient(135deg, #f8fafc 0%, #0ea5e9 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "var(--text-primary)"
      }, children: "Blog RaiseUp" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { style: {
        fontSize: "1.25rem",
        color: "var(--text-muted)",
        maxWidth: "600px",
        margin: "0 auto"
      }, children: "Insights, estrat\xE9gias e tend\xEAncias em automa\xE7\xE3o empresarial com IA humanizada" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      featuredPost && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { marginBottom: "4rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { style: {
          color: "var(--text-primary)",
          marginBottom: "2rem",
          fontSize: "2rem",
          textAlign: "center"
        }, children: "\u2B50 Post em Destaque" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          import_react12.Link,
          {
            to: `/blog/${featuredPost.slug}`,
            className: "blog-card",
            style: {
              display: "block",
              background: "var(--gradient-primary)",
              border: "none",
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(10, 15, 28, 0.8)",
                zIndex: 1
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { position: "relative", zIndex: 2 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "blog-tags", style: { marginBottom: "1rem" }, children: featuredPost.tags.map((tag2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "blog-tag", style: {
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white"
                }, children: tag2 }, tag2)) }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: featuredPost.titulo }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { style: { fontSize: "1.1rem", marginBottom: "1.5rem" }, children: featuredPost.resumo }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "blog-card-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: new Date(featuredPost.data_publicacao).toLocaleDateString("pt-BR") }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { children: [
                    featuredPost.tempo_leitura,
                    " de leitura"
                  ] })
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { style: {
          color: "var(--text-primary)",
          marginBottom: "2rem",
          fontSize: "2rem",
          textAlign: "center"
        }, children: "\xDAltimos Posts" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "blog-list", children: regularPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react12.Link, { to: `/blog/${post.slug}`, className: "blog-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "blog-tags", style: { marginBottom: "1rem" }, children: post.tags.map((tag2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "blog-tag", children: tag2 }, tag2)) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { children: post.titulo }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: post.resumo }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "blog-card-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: new Date(post.data_publicacao).toLocaleDateString("pt-BR") }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { children: [
              post.tempo_leitura,
              " de leitura"
            ] })
          ] })
        ] }, post.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: {
        background: "var(--gradient-secondary)",
        borderRadius: "var(--border-radius-lg)",
        padding: "3rem",
        textAlign: "center",
        margin: "4rem 0",
        color: "white"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { style: { marginBottom: "1rem", color: "white" }, children: "Pronto para Implementar Automa\xE7\xE3o?" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { style: {
          marginBottom: "2rem",
          fontSize: "1.1rem",
          color: "rgba(255, 255, 255, 0.9)"
        }, children: "Descubra como nossa automa\xE7\xE3o com IA pode transformar seu neg\xF3cio" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react12.Link, { to: "/contato", className: "btn btn-primary", style: {
          background: "white",
          color: "var(--accent-bg)",
          border: "none"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("i", { className: "fas fa-rocket" }),
          "Come\xE7ar Agora"
        ] })
      ] })
    ] })
  ] });
}

// app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  default: () => BlogPost,
  loader: () => loader9,
  meta: () => meta11
});
var import_node10 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var noopTest = { exec: () => null };
function edit(regex, opt = "") {
  let source = typeof regex == "string" ? regex : regex.source, obj = {
    replace: (name, val) => {
      let valSource = typeof val == "string" ? val : val.source;
      return valSource = valSource.replace(other.caret, "$1"), source = source.replace(name, valSource), obj;
    },
    getRegex: () => new RegExp(source, opt)
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (bull) => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
  htmlBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i")
}, newline = /^(?:[ \t]*(?:\n|$))+/, blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, bullet = /(?:[*+-]|\d{1,9}[.)])/, lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, blockText = /^[^\n]+/, _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/, def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex(), _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, html = edit(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex(), blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex(), blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
}, gfmTable = edit(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex(), blockGfm = {
  ...blockNormal,
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
}, blockPedantic = {
  ...blockNormal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br = /^( {2,}|\\)\n(?!\s*$)/, inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, _punctuation = /[\p{P}\p{S}]/u, _punctuationOrSpace = /[\s\p{P}\p{S}]/u, _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u, punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex(), _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u, _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u, _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u, blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex(), emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex(), emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex(), emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex(), emStrongRDelimUnd = edit(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex(), anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex(), autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex(), tag = edit(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex(), nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex(), reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex(), inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
}, inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
}, inlineGfm = {
  ...inlineNormal,
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
}, inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
}, escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2))
      return html2.replace(other.escapeReplace, getEscapeReplacement);
  } else if (other.escapeTestNoEncode.test(html2))
    return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  var _a2;
  let row = tableRow.replace(other.findPipe, (match, offset, str) => {
    let escaped = !1, curr = offset;
    for (; --curr >= 0 && str[curr] === "\\"; )
      escaped = !escaped;
    return escaped ? "|" : " |";
  }), cells = row.split(other.splitPipe), i = 0;
  if (cells[0].trim() || cells.shift(), cells.length > 0 && !((_a2 = cells.at(-1)) != null && _a2.trim()) && cells.pop(), count)
    if (cells.length > count)
      cells.splice(count);
    else
      for (; cells.length < count; )
        cells.push("");
  for (; i < cells.length; i++)
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  return cells;
}
function rtrim(str, c, invert) {
  let l = str.length;
  if (l === 0)
    return "";
  let suffLen = 0;
  for (; suffLen < l; ) {
    let currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert)
      suffLen++;
    else if (currChar !== c && invert)
      suffLen++;
    else
      break;
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1)
    return -1;
  let level = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i] === "\\")
      i++;
    else if (str[i] === b[0])
      level++;
    else if (str[i] === b[1] && (level--, level < 0))
      return i;
  return level > 0 ? -2 : -1;
}
function outputLink(cap, link2, raw, lexer2, rules) {
  let href = link2.href, title = link2.title || null, text = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = !0;
  let token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text,
    tokens: lexer2.inlineTokens(text)
  };
  return lexer2.state.inLink = !1, token;
}
function indentCodeCompensation(raw, text, rules) {
  let matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null)
    return text;
  let indentToCode = matchIndentToCode[1];
  return text.split(`
`).map((node) => {
    let matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null)
      return node;
    let [indentInNode] = matchIndentInNode;
    return indentInNode.length >= indentToCode.length ? node.slice(indentToCode.length) : node;
  }).join(`
`);
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    let cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0)
      return {
        type: "space",
        raw: cap[0]
      };
  }
  code(src) {
    let cap = this.rules.block.code.exec(src);
    if (cap) {
      let text = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? text : rtrim(text, `
`)
      };
    }
  }
  fences(src) {
    let cap = this.rules.block.fences.exec(src);
    if (cap) {
      let raw = cap[0], text = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    let cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (this.rules.other.endingHash.test(text)) {
        let trimmed = rtrim(text, "#");
        (this.options.pedantic || !trimmed || this.rules.other.endingSpaceChar.test(trimmed)) && (text = trimmed.trim());
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    let cap = this.rules.block.hr.exec(src);
    if (cap)
      return {
        type: "hr",
        raw: rtrim(cap[0], `
`)
      };
  }
  blockquote(src) {
    let cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], `
`).split(`
`), raw = "", text = "", tokens = [];
      for (; lines.length > 0; ) {
        let inBlockquote = !1, currentLines = [], i;
        for (i = 0; i < lines.length; i++)
          if (this.rules.other.blockquoteStart.test(lines[i]))
            currentLines.push(lines[i]), inBlockquote = !0;
          else if (!inBlockquote)
            currentLines.push(lines[i]);
          else
            break;
        lines = lines.slice(i);
        let currentRaw = currentLines.join(`
`), currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw, text = text ? `${text}
${currentText}` : currentText;
        let top = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(currentText, tokens, !0), this.lexer.state.top = top, lines.length === 0)
          break;
        let lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "code")
          break;
        if ((lastToken == null ? void 0 : lastToken.type) === "blockquote") {
          let oldToken = lastToken, newText = oldToken.raw + `
` + lines.join(`
`), newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken, raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw, text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "list") {
          let oldToken = lastToken, newText = oldToken.raw + `
` + lines.join(`
`), newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken, raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw, text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw, lines = newText.substring(tokens.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim(), isordered = bull.length > 1, list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`, this.options.pedantic && (bull = isordered ? bull : "[*+-]");
      let itemRegex = this.rules.other.listItemRegex(bull), endsWithBlankLine = !1;
      for (; src; ) {
        let endEarly = !1, raw = "", itemContents = "";
        if (!(cap = itemRegex.exec(src)) || this.rules.block.hr.test(src))
          break;
        raw = cap[0], src = src.substring(raw.length);
        let line = cap[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (t) => " ".repeat(3 * t.length)), nextLine = src.split(`
`, 1)[0], blankLine = !line.trim(), indent = 0;
        if (this.options.pedantic ? (indent = 2, itemContents = line.trimStart()) : blankLine ? indent = cap[1].length + 1 : (indent = cap[2].search(this.rules.other.nonSpaceChar), indent = indent > 4 ? 1 : indent, itemContents = line.slice(indent), indent += cap[1].length), blankLine && this.rules.other.blankLine.test(nextLine) && (raw += nextLine + `
`, src = src.substring(nextLine.length + 1), endEarly = !0), !endEarly) {
          let nextBulletRegex = this.rules.other.nextBulletRegex(indent), hrRegex = this.rules.other.hrRegex(indent), fencesBeginRegex = this.rules.other.fencesBeginRegex(indent), headingBeginRegex = this.rules.other.headingBeginRegex(indent), htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          for (; src; ) {
            let rawLine = src.split(`
`, 1)[0], nextLineWithoutTabs;
            if (nextLine = rawLine, this.options.pedantic ? (nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  "), nextLineWithoutTabs = nextLine) : nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    "), fencesBeginRegex.test(nextLine) || headingBeginRegex.test(nextLine) || htmlBeginRegex.test(nextLine) || nextBulletRegex.test(nextLine) || hrRegex.test(nextLine))
              break;
            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim())
              itemContents += `
` + nextLineWithoutTabs.slice(indent);
            else {
              if (blankLine || line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || fencesBeginRegex.test(line) || headingBeginRegex.test(line) || hrRegex.test(line))
                break;
              itemContents += `
` + nextLine;
            }
            !blankLine && !nextLine.trim() && (blankLine = !0), raw += rawLine + `
`, src = src.substring(rawLine.length + 1), line = nextLineWithoutTabs.slice(indent);
          }
        }
        list2.loose || (endsWithBlankLine ? list2.loose = !0 : this.rules.other.doubleBlankLine.test(raw) && (endsWithBlankLine = !0));
        let istask = null, ischecked;
        this.options.gfm && (istask = this.rules.other.listIsTask.exec(itemContents), istask && (ischecked = istask[0] !== "[ ] ", itemContents = itemContents.replace(this.rules.other.listReplaceTask, ""))), list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: !1,
          text: itemContents,
          tokens: []
        }), list2.raw += raw;
      }
      let lastItem = list2.items.at(-1);
      if (lastItem)
        lastItem.raw = lastItem.raw.trimEnd(), lastItem.text = lastItem.text.trimEnd();
      else
        return;
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++)
        if (this.lexer.state.top = !1, list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []), !list2.loose) {
          let spacers = list2.items[i].tokens.filter((t) => t.type === "space"), hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => this.rules.other.anyLine.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      if (list2.loose)
        for (let i = 0; i < list2.items.length; i++)
          list2.items[i].loose = !0;
      return list2;
    }
  }
  html(src) {
    let cap = this.rules.block.html.exec(src);
    if (cap)
      return {
        type: "html",
        block: !0,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
  }
  def(src) {
    let cap = this.rules.block.def.exec(src);
    if (cap) {
      let tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    var _a2;
    let cap = this.rules.block.table.exec(src);
    if (!cap || !this.rules.other.tableDelimiter.test(cap[2]))
      return;
    let headers2 = splitCells(cap[1]), aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|"), rows = (_a2 = cap[3]) != null && _a2.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers2.length === aligns.length) {
      for (let align of aligns)
        this.rules.other.tableAlignRight.test(align) ? item.align.push("right") : this.rules.other.tableAlignCenter.test(align) ? item.align.push("center") : this.rules.other.tableAlignLeft.test(align) ? item.align.push("left") : item.align.push(null);
      for (let i = 0; i < headers2.length; i++)
        item.header.push({
          text: headers2[i],
          tokens: this.lexer.inline(headers2[i]),
          header: !0,
          align: item.align[i]
        });
      for (let row of rows)
        item.rows.push(splitCells(row, item.header.length).map((cell, i) => ({
          text: cell,
          tokens: this.lexer.inline(cell),
          header: !1,
          align: item.align[i]
        })));
      return item;
    }
  }
  lheading(src) {
    let cap = this.rules.block.lheading.exec(src);
    if (cap)
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
  }
  paragraph(src) {
    let cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      let text = cap[1].charAt(cap[1].length - 1) === `
` ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    let cap = this.rules.block.text.exec(src);
    if (cap)
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
  }
  escape(src) {
    let cap = this.rules.inline.escape.exec(src);
    if (cap)
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1]
      };
  }
  tag(src) {
    let cap = this.rules.inline.tag.exec(src);
    if (cap)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(cap[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(cap[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: cap[0]
      };
  }
  link(src) {
    let cap = this.rules.inline.link.exec(src);
    if (cap) {
      let trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl))
          return;
        let rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0)
          return;
      } else {
        let lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2)
          return;
        if (lastParenIndex > -1) {
          let linkLen = (cap[0].indexOf("!") === 0 ? 5 : 4) + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex), cap[0] = cap[0].substring(0, linkLen).trim(), cap[3] = "";
        }
      }
      let href = cap[2], title = "";
      if (this.options.pedantic) {
        let link2 = this.rules.other.pedanticHrefTitle.exec(href);
        link2 && (href = link2[1], title = link2[3]);
      } else
        title = cap[3] ? cap[3].slice(1, -1) : "";
      return href = href.trim(), this.rules.other.startAngleBracket.test(href) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl) ? href = href.slice(1) : href = href.slice(1, -1)), outputLink(cap, {
        href: href && href.replace(this.rules.inline.anyPunctuation, "$1"),
        title: title && title.replace(this.rules.inline.anyPunctuation, "$1")
      }, cap[0], this.lexer, this.rules);
    }
  }
  reflink(src, links2) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " "), link2 = links2[linkString.toLowerCase()];
      if (!link2) {
        let text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match || match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(match[1] || match[2] || "") || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      let lLength = [...match[0]].length - 1, rDelim, rLength, delimTotal = lLength, midDelimTotal = 0, endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (endReg.lastIndex = 0, maskedSrc = maskedSrc.slice(-1 * src.length + lLength); (match = endReg.exec(maskedSrc)) != null; ) {
        if (rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6], !rDelim)
          continue;
        if (rLength = [...rDelim].length, match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if ((match[5] || match[6]) && lLength % 3 && !((lLength + rLength) % 3)) {
          midDelimTotal += rLength;
          continue;
        }
        if (delimTotal -= rLength, delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        let lastCharLength = [...match[0]][0].length, raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          let text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        let text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    let cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(this.rules.other.newLineCharGlobal, " "), hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text), hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
      return hasNonSpaceChars && hasSpaceCharsOnBothEnds && (text = text.substring(1, text.length - 1)), {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    let cap = this.rules.inline.br.exec(src);
    if (cap)
      return {
        type: "br",
        raw: cap[0]
      };
  }
  del(src) {
    let cap = this.rules.inline.del.exec(src);
    if (cap)
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
  }
  autolink(src) {
    let cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      return cap[2] === "@" ? (text = cap[1], href = "mailto:" + text) : (text = cap[1], href = text), {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    var _a2;
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@")
        text = cap[0], href = "mailto:" + text;
      else {
        let prevCapZero;
        do
          prevCapZero = cap[0], cap[0] = ((_a2 = this.rules.inline._backpedal.exec(cap[0])) == null ? void 0 : _a2[0]) ?? "";
        while (prevCapZero !== cap[0]);
        text = cap[0], cap[1] === "www." ? href = "http://" + cap[0] : href = cap[0];
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    let cap = this.rules.inline.text.exec(src);
    if (cap) {
      let escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped
      };
    }
  }
}, _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = options2 || _defaults, this.options.tokenizer = this.options.tokenizer || new _Tokenizer(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    let rules = {
      other,
      block: block.normal,
      inline: inline.normal
    };
    this.options.pedantic ? (rules.block = block.pedantic, rules.inline = inline.pedantic) : this.options.gfm && (rules.block = block.gfm, this.options.breaks ? rules.inline = inline.breaks : rules.inline = inline.gfm), this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    return new __Lexer(options2).lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    return new __Lexer(options2).inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(other.carriageReturn, `
`), this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      let next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = !1) {
    var _a2, _b, _c;
    for (this.options.pedantic && (src = src.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "")); src; ) {
      let token;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) != null && _b.some((extTokenizer) => (token = extTokenizer.call({ lexer: this }, src, tokens)) ? (src = src.substring(token.raw.length), tokens.push(token), !0) : !1))
        continue;
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        let lastToken = tokens.at(-1);
        token.raw.length === 1 && lastToken !== void 0 ? lastToken.raw += `
` : tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        let lastToken = tokens.at(-1);
        (lastToken == null ? void 0 : lastToken.type) === "paragraph" || (lastToken == null ? void 0 : lastToken.type) === "text" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue.at(-1).src = lastToken.text) : tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        let lastToken = tokens.at(-1);
        (lastToken == null ? void 0 : lastToken.type) === "paragraph" || (lastToken == null ? void 0 : lastToken.type) === "text" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.raw, this.inlineQueue.at(-1).src = lastToken.text) : this.tokens.links[token.tag] || (this.tokens.links[token.tag] = {
          href: token.href,
          title: token.title
        });
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if ((_c = this.options.extensions) != null && _c.startBlock) {
        let startIndex = 1 / 0, tempSrc = src.slice(1), tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc), typeof tempStart == "number" && tempStart >= 0 && (startIndex = Math.min(startIndex, tempStart));
        }), startIndex < 1 / 0 && startIndex >= 0 && (cutSrc = src.substring(0, startIndex + 1));
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        let lastToken = tokens.at(-1);
        lastParagraphClipped && (lastToken == null ? void 0 : lastToken.type) === "paragraph" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = lastToken.text) : tokens.push(token), lastParagraphClipped = cutSrc.length !== src.length, src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        let lastToken = tokens.at(-1);
        (lastToken == null ? void 0 : lastToken.type) === "text" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = lastToken.text) : tokens.push(token);
        continue;
      }
      if (src) {
        let errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else
          throw new Error(errMsg);
      }
    }
    return this.state.top = !0, tokens;
  }
  inline(src, tokens = []) {
    return this.inlineQueue.push({ src, tokens }), tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    var _a2, _b, _c;
    let maskedSrc = src, match = null;
    if (this.tokens.links) {
      let links2 = Object.keys(this.tokens.links);
      if (links2.length > 0)
        for (; (match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null; )
          links2.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1)) && (maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null; )
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null; )
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let keepPrevChar = !1, prevChar = "";
    for (; src; ) {
      keepPrevChar || (prevChar = ""), keepPrevChar = !1;
      let token;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.inline) != null && _b.some((extTokenizer) => (token = extTokenizer.call({ lexer: this }, src, tokens)) ? (src = src.substring(token.raw.length), tokens.push(token), !0) : !1))
        continue;
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        let lastToken = tokens.at(-1);
        token.type === "text" && (lastToken == null ? void 0 : lastToken.type) === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length), tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if ((_c = this.options.extensions) != null && _c.startInline) {
        let startIndex = 1 / 0, tempSrc = src.slice(1), tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc), typeof tempStart == "number" && tempStart >= 0 && (startIndex = Math.min(startIndex, tempStart));
        }), startIndex < 1 / 0 && startIndex >= 0 && (cutSrc = src.substring(0, startIndex + 1));
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length), token.raw.slice(-1) !== "_" && (prevChar = token.raw.slice(-1)), keepPrevChar = !0;
        let lastToken = tokens.at(-1);
        (lastToken == null ? void 0 : lastToken.type) === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
        continue;
      }
      if (src) {
        let errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else
          throw new Error(errMsg);
      }
    }
    return tokens;
  }
}, _Renderer = class {
  options;
  parser;
  // set by the parser
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    var _a2;
    let langString = (_a2 = (lang || "").match(other.notSpaceStart)) == null ? void 0 : _a2[0], code = text.replace(other.endingNewline, "") + `
`;
    return langString ? '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, !0)) + `</code></pre>
` : "<pre><code>" + (escaped ? code : escape2(code, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens }) {
    return `<blockquote>
${this.parser.parse(tokens)}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return `<hr>
`;
  }
  list(token) {
    let ordered = token.ordered, start = token.start, body = "";
    for (let j = 0; j < token.items.length; j++) {
      let item = token.items[j];
      body += this.listitem(item);
    }
    let type = ordered ? "ol" : "ul", startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + `>
` + body + "</" + type + `>
`;
  }
  listitem(item) {
    var _a2;
    let itemBody = "";
    if (item.task) {
      let checkbox = this.checkbox({ checked: !!item.checked });
      item.loose ? ((_a2 = item.tokens[0]) == null ? void 0 : _a2.type) === "paragraph" ? (item.tokens[0].text = checkbox + " " + item.tokens[0].text, item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text" && (item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text), item.tokens[0].tokens[0].escaped = !0)) : item.tokens.unshift({
        type: "text",
        raw: checkbox + " ",
        text: checkbox + " ",
        escaped: !0
      }) : itemBody += checkbox + " ";
    }
    return itemBody += this.parser.parse(item.tokens, !!item.loose), `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "", cell = "";
    for (let j = 0; j < token.header.length; j++)
      cell += this.tablecell(token.header[j]);
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      let row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++)
        cell += this.tablecell(row[k]);
      body += this.tablerow({ text: cell });
    }
    return body && (body = `<tbody>${body}</tbody>`), `<table>
<thead>
` + header + `</thead>
` + body + `</table>
`;
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    let content = this.parser.parseInline(token.tokens), type = token.header ? "th" : "td";
    return (token.align ? `<${type} align="${token.align}">` : `<${type}>`) + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${escape2(text, !0)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    let text = this.parser.parseInline(tokens), cleanHref = cleanUrl(href);
    if (cleanHref === null)
      return text;
    href = cleanHref;
    let out = '<a href="' + href + '"';
    return title && (out += ' title="' + escape2(title) + '"'), out += ">" + text + "</a>", out;
  }
  image({ href, title, text, tokens }) {
    tokens && (text = this.parser.parseInline(tokens, this.parser.textRenderer));
    let cleanHref = cleanUrl(href);
    if (cleanHref === null)
      return escape2(text);
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    return title && (out += ` title="${escape2(title)}"`), out += ">", out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
  }
}, _TextRenderer = class {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
}, _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults, this.options.renderer = this.options.renderer || new _Renderer(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    return new __Parser(options2).parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    return new __Parser(options2).parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = !0) {
    var _a2, _b;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      let anyToken = tokens[i];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) != null && _b[anyToken.type]) {
        let genericToken = anyToken, ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      let token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token, body = this.renderer.text(textToken);
          for (; i + 1 < tokens.length && tokens[i + 1].type === "text"; )
            textToken = tokens[++i], body += `
` + this.renderer.text(textToken);
          top ? out += this.renderer.paragraph({
            type: "paragraph",
            raw: body,
            text: body,
            tokens: [{ type: "text", raw: body, text: body, escaped: !0 }]
          }) : out += body;
          continue;
        }
        default: {
          let errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent)
            return console.error(errMsg), "";
          throw new Error(errMsg);
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer = this.renderer) {
    var _a2, _b;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      let anyToken = tokens[i];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) != null && _b[anyToken.type]) {
        let ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      let token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          let errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent)
            return console.error(errMsg), "";
          throw new Error(errMsg);
        }
      }
    }
    return out;
  }
}, _a, _Hooks = (_a = class {
  options;
  block;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), _a), Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    var _a2, _b;
    let values = [];
    for (let token of tokens)
      switch (values = values.concat(callback.call(this, token)), token.type) {
        case "table": {
          let tableToken = token;
          for (let cell of tableToken.header)
            values = values.concat(this.walkTokens(cell.tokens, callback));
          for (let row of tableToken.rows)
            for (let cell of row)
              values = values.concat(this.walkTokens(cell.tokens, callback));
          break;
        }
        case "list": {
          let listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          let genericToken = token;
          (_b = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) != null && _b[genericToken.type] ? this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
            let tokens2 = genericToken[childTokens].flat(1 / 0);
            values = values.concat(this.walkTokens(tokens2, callback));
          }) : genericToken.tokens && (values = values.concat(this.walkTokens(genericToken.tokens, callback)));
        }
      }
    return values;
  }
  use(...args) {
    let extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return args.forEach((pack) => {
      let opts = { ...pack };
      if (opts.async = this.defaults.async || opts.async || !1, pack.extensions && (pack.extensions.forEach((ext) => {
        if (!ext.name)
          throw new Error("extension name required");
        if ("renderer" in ext) {
          let prevRenderer = extensions.renderers[ext.name];
          prevRenderer ? extensions.renderers[ext.name] = function(...args2) {
            let ret = ext.renderer.apply(this, args2);
            return ret === !1 && (ret = prevRenderer.apply(this, args2)), ret;
          } : extensions.renderers[ext.name] = ext.renderer;
        }
        if ("tokenizer" in ext) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          let extLevel = extensions[ext.level];
          extLevel ? extLevel.unshift(ext.tokenizer) : extensions[ext.level] = [ext.tokenizer], ext.start && (ext.level === "block" ? extensions.startBlock ? extensions.startBlock.push(ext.start) : extensions.startBlock = [ext.start] : ext.level === "inline" && (extensions.startInline ? extensions.startInline.push(ext.start) : extensions.startInline = [ext.start]));
        }
        "childTokens" in ext && ext.childTokens && (extensions.childTokens[ext.name] = ext.childTokens);
      }), opts.extensions = extensions), pack.renderer) {
        let renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (let prop in pack.renderer) {
          if (!(prop in renderer))
            throw new Error(`renderer '${prop}' does not exist`);
          if (["options", "parser"].includes(prop))
            continue;
          let rendererProp = prop, rendererFunc = pack.renderer[rendererProp], prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            return ret === !1 && (ret = prevRenderer.apply(renderer, args2)), ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        let tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (let prop in pack.tokenizer) {
          if (!(prop in tokenizer))
            throw new Error(`tokenizer '${prop}' does not exist`);
          if (["options", "rules", "lexer"].includes(prop))
            continue;
          let tokenizerProp = prop, tokenizerFunc = pack.tokenizer[tokenizerProp], prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            return ret === !1 && (ret = prevTokenizer.apply(tokenizer, args2)), ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        let hooks = this.defaults.hooks || new _Hooks();
        for (let prop in pack.hooks) {
          if (!(prop in hooks))
            throw new Error(`hook '${prop}' does not exist`);
          if (["options", "block"].includes(prop))
            continue;
          let hooksProp = prop, hooksFunc = pack.hooks[hooksProp], prevHook = hooks[hooksProp];
          _Hooks.passThroughHooks.has(prop) ? hooks[hooksProp] = (arg) => {
            if (this.defaults.async)
              return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => prevHook.call(hooks, ret2));
            let ret = hooksFunc.call(hooks, arg);
            return prevHook.call(hooks, ret);
          } : hooks[hooksProp] = (...args2) => {
            let ret = hooksFunc.apply(hooks, args2);
            return ret === !1 && (ret = prevHook.apply(hooks, args2)), ret;
          };
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        let walkTokens2 = this.defaults.walkTokens, packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          return values.push(packWalktokens.call(this, token)), walkTokens2 && (values = values.concat(walkTokens2.call(this, token))), values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    }), this;
  }
  setOptions(opt) {
    return this.defaults = { ...this.defaults, ...opt }, this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  parseMarkdown(blockType) {
    return (src, options2) => {
      let origOpt = { ...options2 }, opt = { ...this.defaults, ...origOpt }, throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === !0 && origOpt.async === !1)
        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof src > "u" || src === null)
        return throwError(new Error("marked(): input parameter is undefined or null"));
      if (typeof src != "string")
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      opt.hooks && (opt.hooks.options = opt, opt.hooks.block = blockType);
      let lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline, parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async)
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      try {
        opt.hooks && (src = opt.hooks.preprocess(src));
        let tokens = lexer2(src, opt);
        opt.hooks && (tokens = opt.hooks.processAllTokens(tokens)), opt.walkTokens && this.walkTokens(tokens, opt.walkTokens);
        let html2 = parser2(tokens, opt);
        return opt.hooks && (html2 = opt.hooks.postprocess(html2)), html2;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  onError(silent, async) {
    return (e) => {
      if (e.message += `
Please report this to https://github.com/markedjs/marked.`, silent) {
        let msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", !0) + "</pre>";
        return async ? Promise.resolve(msg) : msg;
      }
      if (async)
        return Promise.reject(e);
      throw e;
    };
  }
}, markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  return markedInstance.setOptions(options2), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  return markedInstance.use(...args), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options, setOptions = marked.setOptions, use = marked.use, walkTokens = marked.walkTokens, parseInline = marked.parseInline;
var parser = _Parser.parse, lexer = _Lexer.lex;

// app/routes/blog.$slug.tsx
var import_jsx_runtime15 = require("react/jsx-runtime"), loader9 = async ({ params }) => {
  let { slug } = params;
  if (!slug)
    throw new Response("Slug n\xE3o informado", { status: 400 });
  try {
    let post = await buscarArtigoPorSlug(slug);
    if (!post)
      throw new Response("Post n\xE3o encontrado", { status: 404 });
    incrementarVisualizacoes(slug).catch(console.error);
    let htmlContent = await marked(post.conteudo), sanitizedContent = sanitizeHtml(htmlContent);
    return (0, import_node10.json)({
      post: {
        ...post,
        htmlContent: sanitizedContent
      }
    });
  } catch (error) {
    throw console.error("Erro ao carregar artigo:", error), new Response("Erro interno do servidor", { status: 500 });
  }
}, meta11 = ({ data }) => {
  if (!(data != null && data.post))
    return [
      { title: "Post n\xE3o encontrado | Blog RaiseUp" }
    ];
  let { post } = data;
  return [
    { title: `${post.titulo} | Blog RaiseUp` },
    { name: "description", content: post.resumo },
    { name: "keywords", content: post.tags.join(", ") },
    { property: "og:title", content: post.titulo },
    { property: "og:description", content: post.resumo },
    { property: "og:type", content: "article" }
  ];
};
function BlogPost() {
  let { post } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BlogLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "blog-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "blog-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "blog-meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "blog-date", children: [
          new Date(post.data_publicacao).toLocaleDateString("pt-BR"),
          " \u2022 ",
          post.tempo_leitura,
          " de leitura"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "blog-tags", children: post.tags.map((tag2) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "blog-tag", children: tag2 }, tag2)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "div",
        {
          className: "markdown-content",
          dangerouslySetInnerHTML: { __html: post.htmlContent }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: {
        marginTop: "3rem",
        padding: "2rem",
        background: "var(--tertiary-bg)",
        borderRadius: "var(--border-radius)",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { style: { marginBottom: "1rem", color: "var(--text-primary)" }, children: "Gostou do conte\xFAdo?" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { style: { marginBottom: "1.5rem", color: "var(--text-muted)" }, children: "Descubra como implementar essas estrat\xE9gias em sua empresa" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react13.Link, { to: "/contato", className: "btn btn-primary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("i", { className: "fas fa-rocket" }),
          "Falar com Especialista"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { textAlign: "center", marginTop: "2rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react13.Link, { to: "/blog", className: "btn btn-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("i", { className: "fas fa-arrow-left" }),
      "Voltar ao Blog"
    ] }) })
  ] }) });
}

// app/routes/contato.tsx
var contato_exports = {};
__export(contato_exports, {
  action: () => action5,
  default: () => Contato,
  meta: () => meta12
});
var import_node11 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_react15 = require("react"), import_jsx_runtime16 = require("react/jsx-runtime"), meta12 = () => [
  { title: "Contato - RaiseUp | Consultoria em Automa\xE7\xE3o com IA" },
  { name: "description", content: "Entre em contato com a RaiseUp para transformar seu neg\xF3cio com automa\xE7\xF5es inteligentes. Consultoria gratuita em IA e transforma\xE7\xE3o digital." },
  { name: "keywords", content: "contato raiseup, consultoria IA, automa\xE7\xE3o empresarial, transforma\xE7\xE3o digital, agendamento consultoria" }
];
async function action5({ request }) {
  let formData = await request.formData(), response = await fetch(`${new URL(request.url).origin}/api/contato`, {
    method: "POST",
    body: formData
  }), result = await response.json();
  return response.ok ? (0, import_node11.json)(result) : (0, import_node11.json)(result, { status: response.status });
}
function Contato() {
  let actionData = (0, import_react14.useActionData)(), navigation = (0, import_react14.useNavigation)(), [showSuccess, setShowSuccess] = (0, import_react15.useState)(!1), [showError, setShowError] = (0, import_react15.useState)(!1), [telefone, setTelefone] = (0, import_react15.useState)(""), isSubmitting = navigation.state === "submitting", formatarTelefone = (valor) => {
    let numeros = valor.replace(/\D/g, "");
    return numeros.length <= 10 ? numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3") : numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }, handleTelefoneChange = (e) => {
    let valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
  };
  return (0, import_react15.useEffect)(() => {
    if (actionData != null && actionData.sucesso) {
      setShowSuccess(!0), setShowError(!1), setTelefone("");
      let timer = setTimeout(() => setShowSuccess(!1), 5e3);
      return () => clearTimeout(timer);
    } else
      (actionData != null && actionData.erro || actionData != null && actionData.erros) && (setShowError(!0), setShowSuccess(!1));
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background: #0a0f1c;
          }

          :root {
            --primary-bg: #0a0f1c;
            --secondary-bg: #1a202c;
            --tertiary-bg: #2d3748;
            --primary-blue: #0ea5e9;
            --text-primary: #f8fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #94a3b8;
            --border-color: #334155;
            --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --border-radius: 12px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
          }

          .navbar {
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .logo img {
            height: 80px;
            width: auto;
            filter: brightness(0) invert(1);
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
          }

          .nav-link:hover {
            color: var(--primary-blue);
          }

          .hero {
            min-height: 50vh;
            display: flex;
            align-items: center;
            padding: 8rem 0 4rem;
            background: var(--secondary-bg);
          }

          .hero-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
          }

          h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.2;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
          }

          .highlight {
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2.5rem;
            color: var(--text-muted);
          }

          section {
            padding: var(--section-padding);
          }

          .contact {
            background: var(--primary-bg);
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }

          .contact-info {
            padding: 2rem;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: var(--secondary-bg);
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            transition: var(--transition);
          }

          .contact-item:hover {
            border-color: var(--primary-blue);
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
          }

          .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            color: white;
            flex-shrink: 0;
          }

          .contact-details h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
          }

          .contact-details p {
            color: var(--text-muted);
            margin: 0;
          }

          .contact-form {
            background: var(--secondary-bg);
            padding: 2rem;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
            font-weight: 500;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            background: var(--tertiary-bg);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            color: var(--text-primary);
            font-family: inherit;
            transition: var(--transition);
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
          }

          .form-group textarea {
            min-height: 120px;
            resize: vertical;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
            border: none;
            width: 100%;
            justify-content: center;
          }

          .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(14, 165, 233, 0.3);
          }

          .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .alert {
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-bottom: 1.5rem;
            border: 1px solid;
          }

          .alert-success {
            background: rgba(34, 197, 94, 0.1);
            border-color: rgba(34, 197, 94, 0.3);
            color: #22c55e;
          }

          .alert-error {
            background: rgba(239, 68, 68, 0.1);
            border-color: rgba(239, 68, 68, 0.3);
            color: #ef4444;
          }

          .loading {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            line-height: 1.2;
            color: var(--text-primary);
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .nav-container {
              padding: 0 1rem;
            }
            
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("nav", { className: "navbar", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "nav-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: "/logo_raiseup.png", alt: "RaiseUp Logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ul", { className: "nav-menu", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "/", className: "nav-link", children: "In\xEDcio" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "/#about", className: "nav-link", children: "Sobre" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "/#services", className: "nav-link", children: "Servi\xE7os" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "/blog", className: "nav-link", children: "Blog" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "/contato", className: "nav-link", children: "Contato" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "hero-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h1", { children: [
          "Vamos ",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "highlight", children: "Transformar" }),
          " Seu Neg\xF3cio"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "hero-subtitle", children: "Entre em contato conosco e descubra como nossas automa\xE7\xF5es com IA podem revolucionar sua empresa mantendo o toque humano." })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "contact", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-info", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { children: "Entre em Contato" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { style: { marginBottom: "2rem", color: "var(--text-muted)" }, children: "Estamos prontos para ajudar voc\xEA a automatizar e otimizar seus processos. Entre em contato atrav\xE9s de qualquer um dos canais abaixo." }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "contact-icon", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("i", { className: "fas fa-envelope" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-details", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "contato@raiseup.com.br" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "contact-icon", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("i", { className: "fab fa-instagram" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-details", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { children: "Instagram" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "https://www.instagram.com/raiseup_bt/", target: "_blank", style: { color: "var(--primary-blue)", textDecoration: "none" }, children: "@raiseup_bt" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "contact-icon", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("i", { className: "fab fa-whatsapp" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-details", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { children: "WhatsApp" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "https://wa.me/5519981476177", target: "_blank", style: { color: "var(--primary-blue)", textDecoration: "none" }, children: "(19) 98147-6177" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "contact-icon", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("i", { className: "fab fa-linkedin" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-details", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { children: "LinkedIn" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "Em breve" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contact-form", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { children: "Agende sua Consultoria Gratuita" }),
          showSuccess && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "alert alert-success", children: [
            "\u2705 ",
            (actionData == null ? void 0 : actionData.mensagem) || "Contato enviado com sucesso!"
          ] }),
          showError && (actionData == null ? void 0 : actionData.erro) && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "alert alert-error", children: [
            "\u274C ",
            actionData.erro
          ] }),
          showError && (actionData == null ? void 0 : actionData.erros) && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "alert alert-error", children: [
            "\u274C Corrija os seguintes erros:",
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", { style: { marginTop: "0.5rem", paddingLeft: "1.5rem" }, children: actionData.erros.map((erro, index) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: erro.mensagem }, index)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("form", { method: "POST", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "form-group", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "name", children: "Nome Completo*" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "text", id: "name", name: "name", required: !0 })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "form-group", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "email", children: "Email*" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "email", id: "email", name: "email", required: !0 })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "form-group", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "phone", children: "Telefone*" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "input",
                {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  value: telefone,
                  onChange: handleTelefoneChange,
                  placeholder: "(11) 99999-9999",
                  maxLength: 15,
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "form-group", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "company", children: "Empresa" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "text", id: "company", name: "company" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "form-group", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "interest", children: "\xC1rea de Interesse*" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("select", { id: "interest", name: "interest", required: !0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "", children: "Selecione uma op\xE7\xE3o" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "conversacional", children: "Agentes Conversacionais" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "midias-sociais", children: "Agentes para M\xEDdias Sociais" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "produtividade", children: "Agentes de Produtividade" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "todos", children: "Todas as Solu\xE7\xF5es" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "outro", children: "Outro" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "form-group", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "message", children: "Mensagem" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  placeholder: "Conte-nos mais sobre seu projeto e como podemos ajudar..."
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "submit", className: "btn btn-primary", disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "loading" }),
              "Enviando..."
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("i", { className: "fas fa-paper-plane" }),
              "Enviar Mensagem"
            ] }) })
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta13
});
var import_jsx_runtime17 = require("react/jsx-runtime"), meta13 = () => [
  { title: "RaiseUp - Automa\xE7\xF5es com IA para Transforma\xE7\xE3o Digital | Agentes Inteligentes" },
  { name: "description", content: "RaiseUp oferece automa\xE7\xF5es com IA humanizada para transforma\xE7\xE3o digital. Agentes conversacionais, m\xEDdias sociais e produtividade. Libere sua equipe de tarefas repetitivas." },
  { name: "keywords", content: "automa\xE7\xE3o com IA, transforma\xE7\xE3o digital, agentes conversacionais, chatbot, automa\xE7\xE3o redes sociais, produtividade empresarial, IA humanizada, intelig\xEAncia artificial" },
  { property: "og:title", content: "RaiseUp - Automa\xE7\xF5es com IA para Transforma\xE7\xE3o Digital" },
  { property: "og:description", content: "Transforme seu neg\xF3cio com automa\xE7\xF5es inteligentes que preservam o toque humano. Agentes para atendimento, redes sociais e produtividade." },
  { property: "og:type", content: "website" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("style", { dangerouslySetInnerHTML: {
      __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background: #0a0f1c;
            overflow-x: hidden;
          }

          :root {
            --primary-bg: #0a0f1c;
            --secondary-bg: #1a202c;
            --tertiary-bg: #2d3748;
            --accent-bg: #1e3a8a;
            --accent-light: #3b82f6;
            --accent-darker: #1e40af;
            
            --primary-blue: #0ea5e9;
            --blue-light: #38bdf8;
            --blue-dark: #0284c7;
            --cyan: #06b6d4;
            --purple: #8b5cf6;
            
            --text-primary: #f8fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #94a3b8;
            --text-accent: #0ea5e9;
            
            --border-color: #334155;
            --border-light: #475569;
            
            --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
            --gradient-secondary: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            --gradient-dark: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            
            --container-max-width: 1200px;
            --section-padding: 100px 0;
            --card-padding: 2rem;
            
            --border-radius: 12px;
            --border-radius-lg: 20px;
            
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            --shadow-glow: 0 0 20px rgba(14, 165, 233, 0.3);
            
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.2;
            color: var(--text-primary);
          }

          h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
          h2 { font-size: clamp(2rem, 4vw, 3rem); }
          h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
          h4 { font-size: 1.25rem; }

          p {
            font-size: 1.1rem;
            color: var(--text-secondary);
            line-height: 1.7;
          }

          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(10, 15, 28, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
            transition: var(--transition);
          }

          .navbar {
            padding: 1rem 0;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .logo img {
            height: 80px;
            width: auto;
            filter: brightness(0) invert(1);
          }

          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
          }

          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
          }

          .nav-link:hover {
            color: var(--primary-blue);
          }

          .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 4px;
            padding: 0.5rem;
          }

          .nav-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-secondary);
            transition: var(--transition);
            border-radius: 2px;
          }

          .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .nav-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }

          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            padding: 8rem 0 4rem;
            overflow: hidden;
          }

          .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          .hero-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
          }

          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          .hero-container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(14, 165, 233, 0.1);
            border: 1px solid var(--primary-blue);
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--primary-blue);
            margin-bottom: 2rem;
          }

          .hero-title {
            margin-bottom: 1.5rem;
            line-height: 1.1;
          }

          .highlight {
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2.5rem;
            color: var(--text-muted);
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: var(--transition);
            cursor: pointer;
            border: none;
          }

          .btn-primary {
            background: var(--gradient-primary);
            color: white;
            box-shadow: var(--shadow-md);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
          }

          .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 2px solid var(--primary-blue);
          }

          .btn-secondary:hover {
            background: var(--primary-blue);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-glow);
          }

          .hero-stats {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .stat {
            text-align: center;
          }

          .stat-number {
            display: block;
            font-size: 2rem;
            font-weight: 800;
            color: var(--primary-blue);
            line-height: 1;
          }

          .stat-label {
            font-size: 0.875rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .hero-visual {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 500px;
            position: relative;
          }

          .ai-animation {
            position: relative;
            width: 300px;
            height: 300px;
          }

          .ai-circle {
            position: absolute;
            border: 2px solid var(--primary-blue);
            border-radius: 50%;
            opacity: 0.3;
          }

          .ai-circle-1 {
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease-in-out infinite;
          }

          .ai-circle-2 {
            width: 200px;
            height: 200px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease-in-out infinite 0.5s;
          }

          .ai-circle-3 {
            width: 300px;
            height: 300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease-in-out infinite 1s;
          }

          .ai-brain {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: var(--primary-blue);
            animation: glow 2s ease-in-out infinite alternate;
          }

          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
          }

          @keyframes glow {
            0% { text-shadow: 0 0 20px var(--primary-blue); }
            100% { text-shadow: 0 0 30px var(--primary-blue), 0 0 40px var(--primary-blue); }
          }

          section {
            padding: var(--section-padding);
            position: relative;
          }

          .about {
            background: var(--secondary-bg);
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .section-tag {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: var(--gradient-primary);
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-radius: 50px;
            margin-bottom: 1rem;
          }

          .section-title {
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--blue-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-subtitle {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto;
          }

          .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .about-card {
            padding: var(--card-padding);
            background: var(--tertiary-bg);
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            transition: var(--transition);
            text-align: center;
          }

          .about-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary-blue);
            box-shadow: var(--shadow-glow);
          }

          .about-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
          }

          .services {
            background: var(--primary-bg);
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .service-card {
            padding: var(--card-padding);
            background: var(--secondary-bg);
            border-radius: var(--border-radius-lg);
            border: 1px solid var(--border-color);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--gradient-primary);
          }

          .service-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary-blue);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
          }

          .service-card-featured {
            border: 2px solid var(--primary-blue);
            box-shadow: var(--shadow-glow);
          }

          .service-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1.5rem;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-primary);
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
          }

          .service-badge {
            background: var(--gradient-primary);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
          }

          .service-features {
            list-style: none;
            margin-bottom: 2rem;
          }

          .service-features li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 0;
            color: var(--text-secondary);
          }

          .service-features i {
            color: var(--primary-blue);
            font-size: 0.875rem;
          }

          .btn-outline {
            background: transparent;
            color: var(--primary-blue);
            border: 1px solid var(--primary-blue);
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }

          .btn-outline:hover {
            background: var(--primary-blue);
            color: white;
          }

          .cta {
            background: var(--gradient-secondary);
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .cta-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta h2 {
            margin-bottom: 1rem;
            color: white;
          }

          .cta p {
            margin-bottom: 2rem;
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.25rem;
          }

          .btn-large {
            padding: 1.25rem 2.5rem;
            font-size: 1.1rem;
          }

          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 100%;
              height: 100vh;
              background: rgba(10, 15, 28, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 3rem;
              transition: var(--transition);
              z-index: 999;
            }

            .nav-menu.active {
              right: 0;
            }

            .nav-menu .nav-link {
              font-size: 1.25rem;
              font-weight: 600;
            }

            .nav-toggle {
              display: flex;
              z-index: 1001;
            }

            .hero-container {
              grid-template-columns: 1fr;
              gap: 2rem;
              text-align: center;
              padding-top: 2rem;
            }
            
            .hero-visual {
              height: 300px;
            }
            
            .ai-animation {
              width: 200px;
              height: 200px;
            }
            
            .ai-brain {
              font-size: 2rem;
            }
            
            .hero-buttons {
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
            
            .hero-stats {
              justify-content: center;
            }

            .nav-container {
              padding: 0 1rem;
            }

            .about-grid {
              grid-template-columns: 1fr;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .container {
              padding: 0 1rem;
            }

            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
            
            .hero-subtitle {
              font-size: 1.1rem;
            }

            .section-subtitle {
              font-size: 1.1rem;
            }

            .btn {
              width: 100%;
              max-width: 300px;
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .nav-container {
              padding: 0 0.5rem;
            }

            .logo img {
              height: 60px;
            }

            h1 { font-size: 2rem; }
            
            .hero-buttons {
              gap: 0.5rem;
            }

            .hero-stats {
              gap: 1rem;
            }

            .stat-number {
              font-size: 1.5rem;
            }
          }
        `
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("nav", { className: "navbar", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "nav-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("img", { src: "/logo_raiseup.png", alt: "RaiseUp Logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { className: "nav-menu", id: "nav-menu", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "#home", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "In\xEDcio" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "#about", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Sobre" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "#services", className: "nav-link", onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("nav-menu")) == null ? void 0 : _a2.classList.remove("active");
        }, children: "Servi\xE7os" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "/blog", className: "nav-link", children: "Blog" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "/contato", className: "nav-link", children: "Contato" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "nav-toggle", id: "nav-toggle", onClick: () => {
        let navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle");
        navMenu == null || navMenu.classList.toggle("active"), navToggle == null || navToggle.classList.toggle("active");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", {})
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { id: "home", className: "hero", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "hero-background", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "hero-grid" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "hero-container", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "hero-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "hero-badge", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-robot" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Automa\xE7\xF5es com IA Humanizada" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h1", { className: "hero-title", children: [
              "Transforma\xE7\xE3o Digital que ",
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "highlight", children: "Eleva Pessoas" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "hero-subtitle", children: "Liberamos sua equipe de tarefas repetitivas atrav\xE9s de automa\xE7\xF5es inteligentes, preservando o que h\xE1 de mais valioso: a criatividade, empatia e o cuidado humano." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "hero-buttons", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("a", { href: "/contato", className: "btn btn-primary", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-rocket" }),
                "Transformar Meu Neg\xF3cio"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("a", { href: "#services", className: "btn btn-secondary", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-play" }),
                "Ver Solu\xE7\xF5es"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "hero-stats", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "stat", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "stat-number", children: "3" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "stat-label", children: "Frentes de Atua\xE7\xE3o" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "stat", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "stat-number", children: "100%" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "stat-label", children: "Foco no Humano" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "stat", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "stat-number", children: "\u221E" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "stat-label", children: "Possibilidades" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "hero-visual", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "ai-animation", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "ai-circle ai-circle-1" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "ai-circle ai-circle-2" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "ai-circle ai-circle-3" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "ai-brain", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-brain" }) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { id: "about", className: "about", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "section-tag", children: "Sobre a RaiseUp" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "section-title", children: "IA para Liberar o Potencial Humano" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "section-subtitle", children: "Acreditamos que a tecnologia deve servir \xE0s pessoas, n\xE3o substitu\xED-las. Nossa miss\xE3o \xE9 acelerar o desenvolvimento intelectual coletivo atrav\xE9s de automa\xE7\xF5es que preservam a ess\xEAncia humana." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "about-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "about-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "about-icon", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-heart" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { children: "Nossa Filosofia" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: "IA para liberar pessoas de tarefas repetitivas, focando na empatia, criatividade e cuidado humano em cada solu\xE7\xE3o desenvolvida." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "about-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "about-icon", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-bullseye" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { children: "Nossa Miss\xE3o" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: "Realizar transforma\xE7\xF5es digitais que elevam a produtividade sem perder o toque humano, acelerando o desenvolvimento intelectual coletivo." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "about-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "about-icon", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-lightbulb" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { children: "Nossa Vis\xE3o" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: "Um futuro onde tecnologia e humanidade trabalham em perfeita harmonia, potencializando o que cada pessoa tem de melhor." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { id: "services", className: "services", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "section-tag", children: "Nossas Solu\xE7\xF5es" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "section-title", children: "3 Frentes de Atua\xE7\xE3o Estrat\xE9gicas" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "section-subtitle", children: "Cobrimos todas as necessidades de automa\xE7\xE3o da sua empresa com foco na experi\xEAncia humana" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "services-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "service-card service-card-featured", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "service-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "service-icon", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-comments" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "service-badge", children: "Mais Popular" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { children: "Agentes Conversacionais" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: "Atendimento automatizado 24/7 que mant\xE9m a empatia e personaliza\xE7\xE3o no relacionamento com seus clientes." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { className: "service-features", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Chatbots inteligentes"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Atendimento multicanal"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Integra\xE7\xE3o com CRM"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " An\xE1lise de sentimentos"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "/agentes-conversacionais", className: "btn btn-outline", children: "Saiba Mais" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "service-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "service-header", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "service-icon", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-share-alt" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { children: "Agentes para M\xEDdias Sociais" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: "Automa\xE7\xE3o estrat\xE9gica das suas redes sociais mantendo autenticidade e engajamento genu\xEDno." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { className: "service-features", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Gest\xE3o automatizada de posts"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Resposta inteligente a coment\xE1rios"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " An\xE1lise de performance"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Cria\xE7\xE3o de conte\xFAdo"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "/agentes-midias-sociais", className: "btn btn-outline", children: "Saiba Mais" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "service-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "service-header", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "service-icon", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-cogs" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { children: "Agentes de Produtividade" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: "Automa\xE7\xE3o de processos internos e integra\xE7\xE3o de sistemas para m\xE1xima efici\xEAncia operacional." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { className: "service-features", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Automa\xE7\xE3o de workflows"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Integra\xE7\xE3o de sistemas"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Relat\xF3rios automatizados"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-check" }),
                " Gest\xE3o de tarefas"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { href: "/agentes-produtividade", className: "btn btn-outline", children: "Saiba Mais" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { className: "cta", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "cta-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { children: "Pronto para Elevar Sua Empresa?" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: "Descubra como nossas automa\xE7\xF5es com IA podem transformar seu neg\xF3cio mantendo o toque humano" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("a", { href: "/contato", className: "btn btn-primary btn-large", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { className: "fas fa-calendar-alt" }),
          "Agendar Consultoria Gratuita"
        ] })
      ] }) }) })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-S6AC2M4Y.js", imports: ["/build/_shared/chunk-FENSR62J.js", "/build/_shared/chunk-YZEJYO2E.js", "/build/_shared/chunk-W5DRAD4K.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JL4BM2O3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_index-D7ESGCUM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin._index": { id: "routes/admin._index", parentId: "root", path: "admin/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/admin._index-BYNMXMC6.js", imports: ["/build/_shared/chunk-R57UI2QJ.js", "/build/_shared/chunk-ZLDMJ43X.js", "/build/_shared/chunk-2IEABCNB.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.analytics._index": { id: "routes/admin.analytics._index", parentId: "root", path: "admin/analytics/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.analytics._index-BQSSKKHZ.js", imports: ["/build/_shared/chunk-ZLDMJ43X.js", "/build/_shared/chunk-2IEABCNB.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.artigos._index": { id: "routes/admin.artigos._index", parentId: "root", path: "admin/artigos/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.artigos._index-AEBQNHAY.js", imports: ["/build/_shared/chunk-C557W3JZ.js", "/build/_shared/chunk-ZLDMJ43X.js", "/build/_shared/chunk-2IEABCNB.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.artigos.novo": { id: "routes/admin.artigos.novo", parentId: "root", path: "admin/artigos/novo", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.artigos.novo-DNZK3O4Q.js", imports: ["/build/_shared/chunk-R57UI2QJ.js", "/build/_shared/chunk-2IEABCNB.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.contatos._index": { id: "routes/admin.contatos._index", parentId: "root", path: "admin/contatos/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.contatos._index-WNT3CEYL.js", imports: ["/build/_shared/chunk-R57UI2QJ.js", "/build/_shared/chunk-ZLDMJ43X.js", "/build/_shared/chunk-2IEABCNB.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.login": { id: "routes/admin.login", parentId: "root", path: "admin/login", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.login-CMCP32RY.js", imports: ["/build/_shared/chunk-2IEABCNB.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.logout": { id: "routes/admin.logout", parentId: "root", path: "admin/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.logout-DU3LUP6N.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/agentes-conversacionais": { id: "routes/agentes-conversacionais", parentId: "root", path: "agentes-conversacionais", index: void 0, caseSensitive: void 0, module: "/build/routes/agentes-conversacionais-QAR73Z2L.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/agentes-midias-sociais": { id: "routes/agentes-midias-sociais", parentId: "root", path: "agentes-midias-sociais", index: void 0, caseSensitive: void 0, module: "/build/routes/agentes-midias-sociais-A32BZYPQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/agentes-produtividade": { id: "routes/agentes-produtividade", parentId: "root", path: "agentes-produtividade", index: void 0, caseSensitive: void 0, module: "/build/routes/agentes-produtividade-YBQOEWKH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.contato": { id: "routes/api.contato", parentId: "root", path: "api/contato", index: void 0, caseSensitive: void 0, module: "/build/routes/api.contato-XEBMQ2VN.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog.$slug": { id: "routes/blog.$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$slug-A2LET5IC.js", imports: ["/build/_shared/chunk-MLJUR7KJ.js", "/build/_shared/chunk-C557W3JZ.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog._index": { id: "routes/blog._index", parentId: "root", path: "blog/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/blog._index-THGKV2DI.js", imports: ["/build/_shared/chunk-MLJUR7KJ.js", "/build/_shared/chunk-C557W3JZ.js", "/build/_shared/chunk-74OT6ATM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contato": { id: "routes/contato", parentId: "root", path: "contato", index: void 0, caseSensitive: void 0, module: "/build/routes/contato-E2HWN6NR.js", imports: ["/build/_shared/chunk-74OT6ATM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "828ae4f3", hmr: void 0, url: "/build/manifest-828AE4F3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/agentes-conversacionais": {
    id: "routes/agentes-conversacionais",
    parentId: "root",
    path: "agentes-conversacionais",
    index: void 0,
    caseSensitive: void 0,
    module: agentes_conversacionais_exports
  },
  "routes/admin.analytics._index": {
    id: "routes/admin.analytics._index",
    parentId: "root",
    path: "admin/analytics/_index",
    index: void 0,
    caseSensitive: void 0,
    module: admin_analytics_index_exports
  },
  "routes/agentes-midias-sociais": {
    id: "routes/agentes-midias-sociais",
    parentId: "root",
    path: "agentes-midias-sociais",
    index: void 0,
    caseSensitive: void 0,
    module: agentes_midias_sociais_exports
  },
  "routes/admin.contatos._index": {
    id: "routes/admin.contatos._index",
    parentId: "root",
    path: "admin/contatos/_index",
    index: void 0,
    caseSensitive: void 0,
    module: admin_contatos_index_exports
  },
  "routes/agentes-produtividade": {
    id: "routes/agentes-produtividade",
    parentId: "root",
    path: "agentes-produtividade",
    index: void 0,
    caseSensitive: void 0,
    module: agentes_produtividade_exports
  },
  "routes/admin.artigos._index": {
    id: "routes/admin.artigos._index",
    parentId: "root",
    path: "admin/artigos/_index",
    index: void 0,
    caseSensitive: void 0,
    module: admin_artigos_index_exports
  },
  "routes/admin.artigos.novo": {
    id: "routes/admin.artigos.novo",
    parentId: "root",
    path: "admin/artigos/novo",
    index: void 0,
    caseSensitive: void 0,
    module: admin_artigos_novo_exports
  },
  "routes/admin._index": {
    id: "routes/admin._index",
    parentId: "root",
    path: "admin/_index",
    index: void 0,
    caseSensitive: void 0,
    module: admin_index_exports
  },
  "routes/admin.logout": {
    id: "routes/admin.logout",
    parentId: "root",
    path: "admin/logout",
    index: void 0,
    caseSensitive: void 0,
    module: admin_logout_exports
  },
  "routes/admin.login": {
    id: "routes/admin.login",
    parentId: "root",
    path: "admin/login",
    index: void 0,
    caseSensitive: void 0,
    module: admin_login_exports
  },
  "routes/api.contato": {
    id: "routes/api.contato",
    parentId: "root",
    path: "api/contato",
    index: void 0,
    caseSensitive: void 0,
    module: api_contato_exports
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "root",
    path: "blog/_index",
    index: void 0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/contato": {
    id: "routes/contato",
    parentId: "root",
    path: "contato",
    index: void 0,
    caseSensitive: void 0,
    module: contato_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
