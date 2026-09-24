# MASTER FRONTEND DEVELOPMENT REQUIREMENT

## Digital Darbar — Premium Digital Media Agency Website

---

## 1. PROJECT OVERVIEW

Build a production-quality, premium, responsive frontend website for **Digital Darbar**, a modern digital media and creative agency.

The website should communicate:

* Luxury
* Premium branding
* Creative excellence
* Digital transformation
* High-end visual storytelling
* Social-media expertise
* Professionalism
* Trust
* Exclusivity

The website should feel like a **premium creative agency / luxury digital studio**, not like a generic business website.

The supplied ZIP template:

`stitch_digital_media_agency_template.zip`

is the primary visual/reference source.

Study the supplied template carefully before implementing the website.

The ZIP contains:

* `home_showcase_light_mode/code.html`
* `services_packages_light_mode/code.html`
* `portfolio_reel_gallery_light_mode/code.html`
* `book_strategy_call_light_mode/code.html`
* `royal_ivory_editorial/DESIGN.md`

Use these files as the visual and UX reference.

Do NOT simply copy the static HTML.

Rebuild the experience as a clean, reusable, maintainable React application.

---

# 2. PRIMARY DESIGN SYSTEM

## Theme Name

**Royal Ivory Editorial**

## Visual Style

**High-Contrast Editorial Luxury**

The visual identity should combine:

* Warm royal ivory
* Champagne / antique gold
* Obsidian black
* Editorial typography
* Large dramatic headings
* Generous whitespace
* Thin champagne borders
* Asymmetric editorial layouts
* Premium photography
* Minimal but sophisticated UI
* Architectural spacing
* Subtle depth
* Refined micro-interactions

The website should feel:

> Exclusive, editorial, sophisticated, architectural, premium, modern and culturally powerful.

Avoid:

* Generic SaaS design
* Excessive gradients
* Excessive rounded cards
* Cartoonish UI
* Excessive shadows
* Neon colors
* Cheap-looking animations
* Overly dense layouts
* Template-like appearance

---

# 3. TECHNOLOGY STACK

Use the following frontend stack.

## Core

* React.js
* Vite
* JavaScript / JSX
* HTML5
* CSS3

## Styling

Use:

* Tailwind CSS
* CSS variables for the design tokens
* Custom CSS only where necessary

Do NOT depend on Tailwind CDN.

Install and configure Tailwind properly within the Vite project.

## Routing

Use:

* React Router DOM

Required routes:

```text
/
 /services
 /portfolio
 /book-call
```

## Icons

Use:

* Lucide React

Do not use random Unicode symbols as icons when a proper icon is available.

## Animations

Use:

* Framer Motion

Animations should be subtle and premium.

## Forms

Use controlled React forms.

Prepare the architecture so forms can later be connected to:

* Email service
* Backend API
* CRM
* WhatsApp
* Booking system

For the current frontend version, functionality can be mocked where backend integration is not available.

---

# 4. TYPOGRAPHY

Use Google Fonts:

### Heading Font

**Syne**

Use Syne for:

* Hero headings
* Section headings
* Navigation labels where appropriate
* Category labels
* Buttons
* Large statistics
* Editorial typography

### Body Font

**Plus Jakarta Sans**

Use Plus Jakarta Sans for:

* Paragraphs
* Descriptions
* Forms
* Supporting information
* Service descriptions
* Footer content

Optional metric/support font:

**Space Grotesk**

Use only where appropriate for numerical metrics or compact labels.

Typography should have strong hierarchy.

Large headings should feel editorial and confident.

---

# 5. COLOR SYSTEM

Use CSS variables / Tailwind tokens based on the supplied DESIGN.md.

Primary colors:

```text
Royal Ivory:
#FBF9F5

Muted Alabaster:
#F5F2EB

Elevated White:
#FFFFFF

Obsidian:
#141419

Deep Onyx:
#282830

Muted Text:
#767267

Champagne Gold:
#C5902B

Dark Gold:
#B37D1D

Light Gold:
#F7F0E2

Champagne Border:
#E7E1D4

Champagne Focus:
#C5902B
```

Additional supplied design tokens may be used where appropriate.

Do not randomly introduce unrelated colors.

The visual palette must remain consistent throughout the website.

---

# 6. DESIGN GRID

Follow an editorial responsive grid.

## Desktop

1280px+

* 12-column grid
* Approximately 40px gutters
* Approximately 80px outer margins
* Maximum content width around 1440px

## Tablet

768px–1279px

* 8-column grid
* 24px gutters
* Approximately 48px outer margins

## Mobile

320px–767px

* 4-column grid
* 16px gutters
* Approximately 24px outer margins

Use generous vertical spacing.

Major sections should generally have:

```text
96px–144px
```

vertical spacing on desktop where appropriate.

Do not overcrowd content.

---

# 7. BORDER RADIUS

Use a restrained architectural shape language.

Default:

```text
4px
```

Cards:

```text
8px
```

Large dialogs:

```text
12px
```

Small badges may use fully rounded shapes.

Avoid excessive pill-shaped UI.

---

# 8. GLOBAL NAVIGATION

Create one reusable navigation component:

```text
Navbar.jsx
```

The navigation should be shared across all pages.

Reference navigation from the supplied templates:

```text
Home
Services
Portfolio
Book Call
```

Brand:

```text
DARBAR
```

Use the Digital Darbar branding/logo supplied by the project assets if available.

Navigation requirements:

* Fixed/sticky header
* Warm ivory translucent background
* Backdrop blur
* Thin champagne border
* Premium spacing
* Desktop navigation
* Mobile menu
* Active route indicator
* Smooth navigation
* CTA for Book Call

The header should visually match the supplied template.

---

# 9. GLOBAL FOOTER

Create:

```text
Footer.jsx
```

Footer should include:

* Digital Darbar branding
* Short agency description
* Navigation links
* Services
* Portfolio
* Contact / Book Call
* Social media links
* Copyright
* Optional newsletter/contact CTA

Maintain the Royal Ivory Editorial visual language.

---

# 10. HOME PAGE

Route:

```text
/
```

Reference:

`home_showcase_light_mode/code.html`

The homepage should be the strongest visual experience.

## Hero

Use the supplied template concept:

> We Turn Brands Into Cultural Icons.

Hero should contain:

* Small editorial kicker
* Large Syne headline
* Supporting description
* Primary CTA
* Secondary/showreel CTA
* Premium visual/media area
* Editorial composition
* Subtle entrance animations

Primary CTA:

```text
Explore Packages
```

Secondary CTA:

```text
Showreel
```

The hero should immediately communicate:

> Digital Darbar is a premium creative and digital media agency.

Do not make the hero look like a generic SaaS landing page.

---

# 11. HOME — SIGNATURE SERVICES

Create a section titled:

```text
Signature Services
```

Reference the supplied template.

Services:

### Editorial & Commercial Shoots

Premium photography and commercial visual production.

### Viral Reels & 9:16 Video

Short-form video content designed for social platforms.

### Social Media Management

Strategy, content planning, publishing and brand growth.

### Influencer & Performance Ads

Influencer collaborations and performance-driven campaigns.

Use an editorial grid rather than ordinary SaaS cards.

Each service should have:

* Number/category
* Title
* Short description
* Visual/icon
* Hover interaction
* Link to Services page

---

# 12. HOME — VIRAL REELS GALLERY

Create:

```text
Viral Reels Gallery
```

Display premium portfolio media.

Use:

* Large editorial media
* Mixed aspect ratios
* Video/reel thumbnails
* Hover animations
* Play buttons
* Category labels
* View project links

The layout should resemble a creative agency reel gallery.

Avoid a generic 3-column card grid.

---

# 13. HOME — TESTIMONIALS

Create:

```text
Founders Speak
```

Display selected client testimonials.

Each testimonial can contain:

* Quote
* Founder/client name
* Company
* Industry
* Optional company logo

Use restrained typography and whitespace.

---

# 14. HOME — LEAD GENERATION CTA

Create a premium CTA section:

```text
Claim Your Free Royal Social Audit
```

CTA:

```text
Get 7-Day Growth Blueprint
```

Use gold/obsidian contrast.

The section should feel like a premium invitation rather than a sales popup.

---

# 15. SERVICES PAGE

Route:

```text
/services
```

Reference:

`services_packages_light_mode/code.html`

Page title:

```text
Agency Services & Packages
```

Create package selection UI.

Include:

### Reel Growth Sprint

Short-form content package.

CTA:

```text
Book This Pack
```

### The Royal Darbar 360°

Premium recurring agency package.

CTA:

```text
Claim Retainer Slot
```

Display availability indicator such as:

```text
2 Left
```

### Enterprise Brand Takeover

Large-scale custom campaign.

CTA:

```text
Request Custom Proposal
```

---

# 16. SERVICES — PACKAGE TOGGLE

Implement an interactive toggle similar to the supplied template:

```text
Monthly Retainers
One-Off Shoots
```

Switching between categories should update the displayed package content.

Use React state.

Add smooth transitions.

---

# 17. SERVICES — ADD-ONS

Create:

```text
Service Add-Ons
```

Include:

* E-commerce Catalog Shoot
* Model & Location Casting
* Drone Cinematography
* UGC Creator Batch

Each item should support an:

```text
Add +
```

interaction.

Selected add-ons should visually update.

Maintain state using React.

---

# 18. SERVICES — FAQ

Create an accordion:

```text
Frequently Asked Questions
```

Questions should include the concepts from the supplied template:

* Who provides models and locations?
* What is the turnaround time for edited reels?
* Do you provide raw footage?

Accordion behavior must be functional.

Only the appropriate item should expand/collapse.

---

# 19. SERVICES — FINAL CTA

Create:

```text
Need a Bespoke Campaign?
```

CTA:

```text
Book Strategy Call
```

Link to:

```text
/book-call
```

---

# 20. PORTFOLIO PAGE

Route:

```text
/portfolio
```

Reference:

`portfolio_reel_gallery_light_mode/code.html`

Hero heading:

```text
Our Masterpieces
```

Create a premium portfolio/reel gallery.

---

# 21. PORTFOLIO FILTERS

Implement interactive filters:

```text
All Work
Fashion & Apparel
F&B / Cafes
Jewelry & Luxury
Tech & D2C
Fitness
```

Filtering must work using React state.

Do not reload the page.

Animate filtered items using Framer Motion.

---

# 22. PORTFOLIO PROJECTS

Use the template's project concepts:

### Saffron & Silk

Category:

Fashion & Apparel

CTA:

```text
View Reel Breakdown
```

### The Imperial Lounge

Category:

F&B / Cafes

Include:

```text
Watch Full Agency Reel
```

### Zaveri & Co

Category:

Jewelry & Luxury

CTA:

```text
View Analytics
```

### Glow Botanics

Category:

Beauty / D2C

Create visually rich project presentation.

Use placeholder images/assets if real assets are unavailable.

Do not hotlink random unreliable images.

Create a centralized data structure for projects.

Example:

```javascript
const projects = [
  {
    title: "Saffron & Silk",
    category: "Fashion & Apparel",
    image: "...",
    description: "...",
    result: "...",
  }
];
```

---

# 23. PORTFOLIO CTA

Create:

```text
Want reels that actually sell?
```

CTA:

```text
Claim Strategic Slot
```

Link to:

```text
/book-call
```

---

# 24. BOOK STRATEGY CALL PAGE

Route:

```text
/book-call
```

Reference:

`book_strategy_call_light_mode/code.html`

Hero heading:

```text
Ignite Your Brand
```

Build a premium multi-step booking interface.

---

# 25. BUDGET SELECTION

Create selectable tiers:

```text
Tier I
₹30k – ₹50k

Tier II
₹50k – ₹1L

Tier III
₹1L – ₹3L

Enterprise
₹3L+
```

Selected tier must visually change.

---

# 26. DATE SELECTION

Create selectable dates.

Reference the supplied template's interaction:

```text
Today
Tomorrow
Fri
Sat
```

Do not hard-code outdated dates in the final production implementation.

Generate dates dynamically based on the current date.

---

# 27. TIME SELECTION

Create selectable time slots such as:

```text
11:00 AM
02:30 PM
05:00 PM
07:30 PM
```

The UI should make the selected slot obvious.

---

# 28. CONFIRMATION

Primary CTA:

```text
Confirm Strategy Session
```

On submit:

1. Validate selection.
2. Show loading state.
3. Show success state.
4. Display selected package/date/time.
5. Provide a clear next step.

Backend/API integration can initially be mocked.

Keep the code structured so an API can be connected later.

---

# 29. REUSABLE COMPONENT ARCHITECTURE

Do NOT build every page as one huge component.

Create reusable components.

Suggested structure:

```text
src/
│
├── assets/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── SectionHeader.jsx
│   ├── EditorialLabel.jsx
│   ├── ServiceCard.jsx
│   ├── PackageCard.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectGrid.jsx
│   ├── TestimonialCard.jsx
│   ├── FAQAccordion.jsx
│   ├── BookingTier.jsx
│   ├── DateSelector.jsx
│   ├── TimeSelector.jsx
│   ├── CTASection.jsx
│   └── PageTransition.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   └── BookCall.jsx
│
├── data/
│   ├── services.js
│   ├── packages.js
│   ├── projects.js
│   ├── testimonials.js
│   └── faq.js
│
├── hooks/
│
├── layouts/
│   └── MainLayout.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

Adjust this structure if a better architecture is justified.

---

# 30. DATA-DRIVEN UI

Do not hard-code repeated UI unnecessarily.

Services, projects, packages, testimonials and FAQs should come from data arrays.

Example:

```javascript
const services = [...]
const packages = [...]
const projects = [...]
const testimonials = [...]
const faqs = [...]
```

Map these into reusable components.

This makes future CMS/API integration easier.

---

# 31. ANIMATION SYSTEM

Use Framer Motion.

Animations should communicate premium quality.

Use:

### Page entrance

* Fade
* Slight vertical movement

### Hero

* Staggered text reveal
* Image/media reveal

### Cards

* Subtle translate
* Image scale
* Border/accent transition

### Portfolio

* Filter transitions
* Layout animation

### Navigation

* Mobile menu animation

### Buttons

* Subtle hover movement
* Gold transition

Avoid excessive animation.

Do not make the website feel like a gaming website.

---

# 32. SCROLL EXPERIENCE

Use smooth scrolling where appropriate.

Sections should reveal naturally.

Possible effects:

* Fade-up
* Image reveal
* Editorial parallax
* Horizontal reel movement
* Subtle image scaling

Do not overuse parallax.

Performance must remain high.

---

# 33. RESPONSIVE DESIGN

The website must be fully responsive.

Test at:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Mobile should NOT simply be a compressed desktop layout.

Create intentional mobile layouts.

Navigation should become a mobile menu.

Editorial grids should intelligently collapse.

Typography must scale according to the design system.

---

# 34. ACCESSIBILITY

Implement:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Accessible form labels
* Keyboard navigation
* Visible focus states
* Alt text for images
* Sufficient color contrast
* ARIA attributes where required

Do not sacrifice accessibility for visual effects.

---

# 35. PERFORMANCE

Optimize for:

* Fast initial load
* Lazy-loaded images
* Optimized media
* Code splitting where useful
* Minimal unnecessary dependencies
* Efficient React rendering
* No unnecessary re-renders
* Responsive image sizing

Avoid huge unoptimized video/image files.

---

# 36. SEO FOUNDATION

Implement:

* Page titles
* Meta descriptions
* Semantic headings
* Open Graph metadata where appropriate
* Descriptive image alt text
* Clean URLs

Example:

```text
/
 /services
 /portfolio
 /book-call
```

---

# 37. IMAGE / MEDIA HANDLING

Use project assets wherever supplied.

If assets are missing:

* Use appropriate local placeholders
* Create an `assets` directory
* Keep image paths centralized
* Do not permanently depend on random external URLs

The final project should be deployable independently.

---

# 38. INTERACTION REQUIREMENTS

The following must be functional:

### Navigation

* All routes work.
* Active route is highlighted.
* Mobile menu opens/closes.

### Services

* Package toggle works.
* Add-ons can be selected.
* FAQ accordion works.

### Portfolio

* Category filtering works.
* Project cards animate.

### Booking

* Tier selection works.
* Date selection works.
* Time selection works.
* Form validation works.
* Confirmation state works.

### Buttons

All major CTAs must perform meaningful actions.

No dead buttons.

---

# 39. VISUAL QUALITY REQUIREMENT

The most important requirement is:

> The final website must preserve the visual character of the supplied Royal Ivory Editorial design system.

Do not convert the design into a generic Tailwind website.

Maintain:

* Warm ivory canvas
* Champagne gold accents
* Obsidian typography
* Syne editorial headings
* Plus Jakarta Sans body copy
* Thin borders
* Generous whitespace
* Strong typography
* Asymmetric compositions
* Premium media presentation
* Restrained corner radius
* Editorial hierarchy

---

# 40. REFERENCE TEMPLATE RULE

Treat the supplied ZIP as the visual source of truth.

Study:

```text
home_showcase_light_mode
services_packages_light_mode
portfolio_reel_gallery_light_mode
book_strategy_call_light_mode
royal_ivory_editorial/DESIGN.md
```

Extract from the template:

* Layout ideas
* Typography
* Color tokens
* Spacing
* Component behavior
* Navigation
* CTA hierarchy
* Portfolio presentation
* Booking flow
* Services presentation
* Responsive behavior

However:

**DO NOT simply duplicate the generated HTML.**

Reimplement the design using the React component architecture defined in this requirement.

---

# 41. DESIGN SYSTEM IMPLEMENTATION

Create centralized design tokens.

Prefer CSS variables such as:

```css
:root {
  --color-surface-base: #FBF9F5;
  --color-surface-subtle: #F5F2EB;
  --color-surface-elevated: #FFFFFF;
  --color-text-primary: #141419;
  --color-text-secondary: #282830;
  --color-text-muted: #767267;
  --color-accent-gold: #C5902B;
  --color-accent-gold-hover: #B37D1D;
  --color-accent-gold-light: #F7F0E2;
  --color-border-champagne: #E7E1D4;
}
```

Use these consistently.

---

# 42. COMPONENT DESIGN RULES

Components should be:

* Reusable
* Small
* Focused
* Accessible
* Easy to modify
* Data-driven

Avoid:

```text
Huge 1000+ line components
```

Prefer:

```text
Small reusable components
```

---

# 43. CODE QUALITY

Follow:

* Clean React patterns
* Functional components
* React hooks
* Meaningful variable names
* No duplicated code
* No unnecessary state
* No console errors
* No broken imports
* No unused imports
* No hard-coded repeated content
* Proper component separation

Do not use class components unless absolutely necessary.

---

# 44. ERROR / EMPTY STATES

Handle:

* Empty portfolio
* Invalid booking selection
* Form errors
* Loading state
* Submission failure
* Missing images

The UI should remain premium even during error states.

---

# 45. DEVELOPMENT PROCESS

Follow this order:

### Step 1

Inspect the supplied ZIP and DESIGN.md.

### Step 2

Create the React + Vite project.

### Step 3

Configure Tailwind CSS.

### Step 4

Configure fonts and design tokens.

### Step 5

Build global layout:

```text
Navbar
Footer
MainLayout
```

### Step 6

Build reusable UI components.

### Step 7

Build Home page.

### Step 8

Build Services page.

### Step 9

Build Portfolio page.

### Step 10

Build Book Strategy Call page.

### Step 11

Add Framer Motion animations.

### Step 12

Add responsive behavior.

### Step 13

Run lint/build checks.

### Step 14

Fix all console errors and visual issues.

### Step 15

Test all routes and interactions.

---

# 46. REQUIRED TESTING

Before considering the project complete, verify:

```text
npm run dev
npm run build
```

Ensure production build succeeds.

Test:

* `/`
* `/services`
* `/portfolio`
* `/book-call`

Verify:

* Navigation
* Mobile navigation
* Buttons
* Filters
* Accordions
* Package selection
* Add-ons
* Booking flow
* Form validation
* Responsive layouts
* Animations
* Images
* No console errors

---

# 47. FINAL ACCEPTANCE CRITERIA

The project is complete only when:

1. All four routes work.
2. Website is responsive.
3. Royal Ivory Editorial theme is preserved.
4. Template visual hierarchy is reproduced faithfully.
5. React component architecture is clean.
6. Tailwind CSS is properly configured.
7. Framer Motion interactions are implemented.
8. Portfolio filtering works.
9. Service package selection works.
10. FAQ accordion works.
11. Booking selection works.
12. Forms have validation.
13. No major console errors exist.
14. Production build succeeds.
15. UI looks premium on desktop and mobile.
16. No placeholder/dead interactions remain unless explicitly marked as future backend functionality.

---

# 48. IMPORTANT DEVELOPMENT PRINCIPLE

Do not optimize only for technical completion.

The primary goal is to create a website that makes a visitor immediately think:

> "This is a premium creative agency."

Every design decision should support that perception.

Prioritize:

```text
Visual hierarchy
Typography
Spacing
Photography
Editorial composition
Interaction quality
Brand consistency
Responsive experience
Performance
Accessibility
```

The result should feel like a **bespoke luxury digital agency website**, not an AI-generated template.

---

# 49. START DEVELOPMENT

After understanding this requirement and inspecting the supplied reference ZIP:

1. Initialize the project.
2. Install the required dependencies.
3. Build the design system.
4. Build reusable components.
5. Implement all four pages.
6. Implement responsive layouts.
7. Implement interactions.
8. Test the entire application.
9. Fix errors.
10. Run the production build.

Do not stop at creating a visual mockup.

Build a complete, functional frontend application ready for deployment.
