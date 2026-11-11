# Skills Used and Compliance Matrix

This document outlines the design, architectural, and quality skills integrated into **Webhook Arcade**, the rules they enforce, and how they are applied across the codebase and user interface.

---

## 1. apple-design (Primary UI/UX Authority)

- **Source**: `.agents/skills/apple-design` (cloned from `https://github.com/dickwu/apple-design-skill.git`)
- **Authority**: Primary authority for overall user experience, information architecture, visual polish, and layout structure.
- **Key Principles Applied**:
  - **Simplicity & Purpose**: Every element on screen has a specific job. No decorative filler cards or unnecessary container nesting.
  - **Layout & Spacing**: 3-pane split view for the Webhook Inbox (Sidebar / List / Detail Inspector) mimicking macOS developer utilities. Spacing follows consistent 8pt/16pt/24pt grid.
  - **Typography**: Inter for system UI with a strict hierarchy (Title 1, Title 2, Headline, Body, Subheadline, Footnote). JetBrains Mono / SF Mono for JSON payloads, cURL snippets, and header tables.
  - **Subtle Depth & Calm Surfaces**: Avoidance of gaudy glow effects. Restrained dark surfaces (`#0a0d14` canvas, `#101522` sidebar, `#161c2e` surface cards) with subtle 1px borders (`#232d48`).
  - **Purposeful Motion**: Fluid transitions for list insertions, panel sliding, and test run progress bars. Full compliance with `prefers-reduced-motion`.
  - **Hit Targets & Ergonomics**: Desktop and mobile click/touch targets are sized to at least 40px/44px with comfortable padding.

---

## 2. material-design-3-ui (Secondary UI & Design System Authority)

- **Source**: `~/.gemini/config/skills/material-design-3-ui`
- **Authority**: Secondary authority governing component interaction states, accessibility, semantic design tokens, and responsive elevation.
- **Key Principles Applied**:
  - **Semantic Design Tokens**: Colors defined by semantic roles rather than raw hex values (e.g. `--color-surface`, `--color-surface-container`, `--color-primary`, `--color-on-primary`, `--color-error`, `--color-outline`).
  - **Comprehensive Component States**: Every interactive element defines distinct visual feedback for default, hover, pressed/active, focus-visible (2px high-contrast ring), and disabled states.
  - **WCAG AA Accessibility**: All text satisfies a minimum 4.5:1 contrast ratio against its background; interactive icons and boundaries maintain at least 3:1 contrast. Color is never the sole indicator of status (always paired with iconography or text labels).
  - **Responsive Breakpoints & Drawers**: On compact viewports (<768px), desktop multi-pane splits transition to full-screen drawers or bottom sheets with clear back-navigation.

---

## 3. anti-slop (Quality Gate & Content Filter)

- **Source**: `~/.gemini/config/plugins/antislop`
- **Mode**: Active `during` (session override).
- **Authority**: Zero-tolerance filter against generic AI hallmarks, filler content, and broken interactions.
- **Key Principles Applied**:
  - **No Non-Functional Elements**: Every button, dropdown, tab, filter, and input is wired to real application logic. No placeholder alerts or empty `onClick={() => {}}` handlers.
  - **No Fake Data or AI Fluff**: No fabricated customer testimonials, fake "99.999% uptime" badges, or hollow marketing buzzwords. Realistic, domain-accurate demo data is clearly marked as demo.
  - **No Trend-Stacking**: Avoidance of gratuitous mesh gradients, excessive glassmorphism blur, neon glow borders, or generic blueprint grids.
  - **Copywriting Hygiene**: Clear, active developer prose without artificial em-dashes (`—`) in landing copy or generic "Get Started" CTAs where specific actions like "Open Playground" or "Generate Endpoint" are appropriate.
  - **Delivery Gate Reviews**: Run at the end of each development phase to verify code and UI cleanliness.

