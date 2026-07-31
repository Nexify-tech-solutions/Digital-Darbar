# Digital Darbar — Project Requirements & Technical Specifications

## Executive Overview
**Digital Darbar** is an elite, high-performance digital marketing, luxury branding, performance ads, and organic growth agency web application. The platform serves as a modern, interactive showcase designed to establish brand authority, engage visitors with stunning WebGL 3D graphics, capture early VIP access leads, and convert prospects into long-term clients.

---

## 1. Objectives & Key Results (OKRs)
- **Brand Positioning**: Establish Digital Darbar as a sovereign, premium digital partner ("Digital Royalty").
- **Visual Impact**: Deliver a state-of-the-art WebGL 3D user experience with interactive cursor physics, glowing glassmorphic UI elements, and ultra-fluid animations.
- **Conversion Rate**: Capture high-intent leads via an early VIP waitlist registration system with instant client feedback.
- **Performance**: Maintain 60 FPS WebGL 3D rendering and fast load times across all screen sizes.

---

## 2. Technical Stack & Architecture

### Core Frontend Framework
- **React 18**: Modular functional component hierarchy with hooks.
- **Vite 6**: Lightning-fast HMR dev server and optimized production bundling.

### 3D & Graphics Layer
- **Three.js**: Custom WebGL canvas rendering a 3D royal crown jewel mesh (Icosahedron + wireframe outer shell), orbital torus rings, mouse-reactive particle constellation starfield, and dynamic ambient point lighting.
- **Perspective 3D Tilt (`TiltCard`)**: Physics-based cursor tracking calculating `rotateX` / `rotateY` angles with specular glare reflections.

### Design System & Styling
- **Tailwind CSS**: Utility-first CSS extended with custom color tokens:
  - `darbar-bg`: `#07070b` (Obsidian Deep Night)
  - `darbar-gold`: `#d4af37` (Metallic Royal Gold)
  - `darbar-goldLight`: `#f3e5ab` (Soft Champagne)
  - `darbar-crimson`: `#8b1a1a` (Deep Regal Maroon)
  - `glass-card`: Translucent glassmorphism (`backdrop-filter: blur(16px)` + gold accent borders)
- **Typography**: Google Fonts (*Cinzel* for headlines, *Montserrat* for body UI, *Playfair Display* for callout accents).
- **Icons**: Lucide React high-DPI vector icons.

---

## 3. Core Component Requirements

### 3.1 3D Background Canvas (`Hero3DCanvas.jsx`)
- Interactive WebGL 3D scene using Three.js.
- Rotating central 3D royal geometry with inner emissive core and outer metallic wireframe.
- 700+ particle constellation starfield responding to cursor movement (`mouseX`, `mouseY` lerp interpolation).
- Automatic viewport resize handling and memory cleanup on unmount.

### 3.2 3D Interactive Tilt Card (`TiltCard.jsx`)
- Wraps target elements with 3D perspective transforms.
- Dynamically updates `rotateX` and `rotateY` based on mouse pointer coordinates.
- Overlays radial specular glare effect that shifts with cursor angle.

### 3.3 Navigation Header (`Navbar.jsx`)
- Floating glassmorphic bar with backdrop blur and responsive mobile drawer.
- Royal Crown logo with metallic gradient text.
- Web Audio Solfeggio sound frequency toggle button.
- Smooth scroll navigation links and VIP action button.

### 3.4 Hero Section (`Hero.jsx`)
- Dynamic 3D title text ("DIGITAL DARBAR'S WE ARE COMING SOON").
- Royal taglines ("To Build Brands That Rule" & "Your Royal Partner in Digital Growth").
- Dual primary action buttons and floating 3D feature preview badges.

### 3.5 Live Countdown Engine (`Countdown.jsx`)
- Real-time countdown timer calculating remaining time to launch.
- 4 3D tilt cards for Days, Hours, Minutes, and Seconds with glowing gold numbers.

### 3.6 Services Showcase & Modal Drawer (`Services.jsx`)
- 6 3D service cards (SMM, Performance Ads, Branding & Design, Technical SEO, 3D Web/Apps, Growth Funnels).
- Interactive modal drawer offering deep deliverable breakdowns and inquiry CTA.

### 3.7 The Royal Standard (`RoyalPillars.jsx`)
- 4 pillar feature cards detailing sovereign strategy, visual royalty, data dominance, and 24/7 concierge support.

### 3.8 Stats Metric Counters (`StatsSection.jsx`)
- Highlight revenue generated ($15M+), average ROAS (10.4x), client retention (99.4%), and brands scaled (250+).

### 3.9 Early VIP Email Waitlist (`EmailCapture.jsx`)
- Form validation with error messaging, loading state, and success toast confirmation.

### 3.10 Social Connect & Footer (`SocialConnect.jsx` & `Footer.jsx`)
- Social cards linking to Instagram, LinkedIn, X, and WhatsApp.
- Copyright declaration, quick links, and smooth back-to-top floating scroll button.

---

## 4. Setup & Deployment Instructions

### Prerequisites
- Node.js v18+
- npm v9+

### Commands
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production distribution
npm run build

# Preview production build locally
npm run preview
```
