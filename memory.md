# Digital Darbar — Developer Memory & Architecture Context

This document captures key technical decisions, architectural patterns, design system guidelines, and maintenance notes for the **Digital Darbar** web application.

---

## 1. Project Context & Repository Information
- **Repository URL**: `https://github.com/Nexify-tech-solutions/Digital-Darbar.git`
- **Main Branch**: `main`
- **Application Type**: Single Page Application (SPA) built with React 18, Vite, and Three.js.
- **Brand Identity**: Digital Royalty agency — luxury obsidian, royal metallic gold (`#d4af37`), deep crimson maroon (`#8b1a1a`), and glassmorphism.

---

## 2. Key Architectural Decisions

### 3.1 Three.js 3D WebGL Integration (`Hero3DCanvas.jsx`)
- Uses direct Three.js scene graph imperative manipulation inside a React `useEffect` hook.
- Render loop driven by `requestAnimationFrame` with smooth mouse coordinate interpolation (`lerp`).
- Fog enabled (`THREE.FogExp2(0x07070b, 0.0018)`) to seamlessly blend distant WebGL particles into the dark obsidian background.
- Canvas texture generated dynamically for additive particle glow blending without requiring external image assets.

### 3.2 3D Card Perspective Mechanics (`TiltCard.jsx`)
- Computes normalized cursor offset relative to element bounding rect: `xPct = mouseX / width`, `yPct = mouseY / height`.
- Rotates on 3D X & Y axes (`rotateX = (0.5 - yPct) * maxTilt`, `rotateY = (xPct - 0.5) * maxTilt`).
- Dynamically renders a specular spotlight overlay (`radial-gradient`) for natural reflection realism.

### 3.3 Audio Feedback System (`Navbar.jsx`)
- Utilizes the browser's native **Web Audio API** (`AudioContext`) to generate a subtle 528Hz (Solfeggio harmonic frequency) sine tone with an exponential decay envelope.
- Zero external audio assets required; avoids CORS or asset loading latency.

---

## 3. Directory Map & Component Responsibilities

```text
c:\Users\gupta\OneDrive\Desktop\DigitalDarbar\
├── project_requirements.md  # Comprehensive functional & technical specifications
├── memory.md                # Persistent architectural decisions and developer notes
├── package.json             # React, Vite, Three.js, Lucide-React, Tailwind dependencies
├── vite.config.js           # Vite server configuration (sourcemaps disabled for clean builds)
├── tailwind.config.js       # Theme extension (darbar gold, crimson, fonts, animations)
├── postcss.config.js        # PostCSS configuration with Tailwind and Autoprefixer
├── index.html               # Entry HTML shell loading Google Fonts (Cinzel, Montserrat, Playfair)
└── src/
    ├── main.jsx             # React DOM root render
    ├── index.css            # Custom CSS utilities, glassmorphism backdrop blur, scrollbars
    ├── App.jsx              # Main page assembly & scroll progress bar calculation
    └── components/
        ├── 3d/
        │   ├── Hero3DCanvas.jsx  # Interactive Three.js 3D WebGL background
        │   └── TiltCard.jsx      # Reusable 3D tilt perspective wrapper
        ├── Navbar.jsx            # Glassmorphic header with Solfeggio sound toggle
        ├── Hero.jsx              # Hero section with 3D typography & CTAs
        ├── Countdown.jsx         # Live 3D countdown timer towards grand launch
        ├── Services.jsx          # Interactive 3D service cards & modal drawer
        ├── RoyalPillars.jsx      # "The Royal Standard" 4-pillar value showcase
        ├── StatsSection.jsx      # Animated metric counter cards
        ├── EmailCapture.jsx      # VIP waitlist form with live validation
        ├── SocialConnect.jsx     # Interactive 3D social link cards
        └── Footer.jsx            # Luxury footer with quick links & back-to-top button
```

---

## 4. Maintenance & Developer Guidelines
1. **Adding New Icons**: Always import vector icons directly from `lucide-react`.
2. **WebGL Performance**: Keep particle counts around 700–1000 to preserve 60 FPS performance on mobile GPU devices.
3. **Build Cleanliness**: Ensure `npm run build` runs with zero warnings before pushing changes to GitHub.
