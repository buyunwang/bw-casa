# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Buyun Wang's personal portfolio website built with Astro and deployed to GitHub Pages at https://buyunwang.github.io. The site showcases professional work, blog posts, case studies, and legacy graphics projects.

## Technology Stack

- **Framework**: Astro 5.x (Static Site Generator)
- **Styling**: TailwindCSS 4.x via Vite plugin
- **Language**: TypeScript with strict configuration
- **Deployment**: GitHub Actions → GitHub Pages
- **Legacy Content**: Three.js graphics projects (A2/A3 from UBC coursework)

## Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server at localhost:4321
npm run build       # Build for production (outputs to ./dist/)
npm run preview     # Preview production build locally
npm run astro       # Access Astro CLI commands
```

### Testing Build Locally
```bash
npm run build && npm run preview
```

## Architecture & Structure

### Site Architecture
- **Static Generation**: Astro builds to static HTML/CSS/JS
- **Component-Based**: Astro components (.astro) with embedded TypeScript
- **File-Based Routing**: Pages in `src/pages/` automatically become routes
- **Deployment**: Automated via GitHub Actions on push to master branch

### Key Directories
- `src/components/` - Reusable Astro components (Hero, Navigation, Footer, etc.)
- `src/layouts/` - Base layout template with meta tags and global styles
- `src/pages/` - Route pages including blog posts and case studies
- `src/styles/` - TailwindCSS imports and global styles
- `public/` - Static assets including images, PDFs, and legacy graphics projects
- `public/graphics/a2/` & `public/graphics/a3/` - Legacy Three.js projects with custom shaders

### Content Structure
- **Blog Posts**: Individual .astro files in `src/pages/blog/` with hardcoded metadata arrays
- **Case Studies**: Located in `src/pages/case-studies/` showcasing professional work
- **Projects**: Academic and personal projects in `src/pages/projects/`
- **Static Assets**: Images, resume PDF, and legacy content in `public/`

### Styling Approach
- TailwindCSS for utility-first styling
- Custom CSS variables and animations in Layout.astro
- Inter font family loaded from Google Fonts
- Gradient backgrounds and smooth animations throughout

### Legacy Graphics Projects
The `public/graphics/` directory contains Three.js projects from UBC CPSC 314:
- **A2**: 3D character modeling with hierarchical transformations
- **A3**: Advanced shading with custom GLSL shaders (Gouraud, Phong, Blinn-Phong, texture mapping, normal mapping)
- Both use Three.js with OrbitControls and custom shader loading

## Development Notes

### Adding New Blog Posts
1. Create new .astro file in `src/pages/blog/`
2. Update the `allPosts` array in `src/pages/blog.astro` with metadata
3. Follow existing post structure with Layout, Navigation, and Footer components

### Asset Management
- Images go in `public/images/` (organized by type/project)
- Use relative paths from public root (e.g., `/images/filename.jpg`)
- Resume and static files in `public/` root

### Deployment
- Automatic deployment on push to master branch
- GitHub Actions builds with Node 20 and deploys to GitHub Pages
- Build artifacts from `./dist/` directory
- Custom domain configured via CNAME file

### SEO & Meta
- Meta descriptions and titles configured in Layout.astro
- Favicon set with multiple sizes for different devices
- Google Fonts preconnected for performance
