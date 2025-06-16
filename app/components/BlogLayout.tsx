import { Link } from "@remix-run/react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="blog-layout">
      <style>
        {`
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
        `}
      </style>

      {/* Header */}
      <header className="blog-header">
        <nav className="blog-navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              <img src="/logo_raiseup.png" alt="RaiseUp Logo" />
            </Link>
            <ul className="nav-menu">
              <li><Link to="/" className="nav-link">Início</Link></li>
              <li><Link to="/#about" className="nav-link">Sobre</Link></li>
              <li><Link to="/#services" className="nav-link">Serviços</Link></li>
              <li><Link to="/blog" className="nav-link">Blog</Link></li>
              <li><Link to="/contato" className="nav-link">Contato</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}