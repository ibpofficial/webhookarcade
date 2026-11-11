# Webhook Arcade - Design System Specification

Webhook Arcade’s visual design combines **Apple Human Interface Guidelines (HIG)** desktop ergonomics with **Material Design 3 (M3)** semantic token and state rigor.

---

## 1. Hierarchy of Authority

1. **apple-design (Primary)**: Layout geometry, information density, 3-pane split views, calm contrasts, typography scale, and navigation flow.
2. **material-design-3-ui (Secondary)**: Interactive component states (hover, active, pressed, focus-visible), semantic token architecture, and WCAG AA accessibility compliance.
3. **anti-slop (Quality Gate)**: Strict rejection of generic AI templates, purposeless gradients, non-functional controls, and filler copy.

---

## 2. Color Palette & Semantic Tokens

| Token Role | Hex Code | Purpose |
|---|---|---|
| `--color-canvas` | `#0a0d14` | Primary deep navy canvas |
| `--color-canvas-subtle` | `#0e121d` | Header and secondary panels |
| `--color-sidebar` | `#101522` | Navigation sidebar background |
| `--color-surface` | `#161c2e` | Base card and table container |
| `--color-surface-elevated` | `#1c243b` | Floating modals and dropdowns |
| `--color-border` | `#232d48` | Container boundaries and dividers |
| `--color-border-subtle` | `#1a2238` | Internal table row dividers |
| `--color-primary` | `#8b5cf6` | Electric violet primary actions |
| `--color-accent` | `#06b6d4` | Electric cyan highlights & badges |
| `--color-success` | `#10b981` | 2xx status codes & passed assertions |
| `--color-error` | `#ef4444` | 4xx/5xx status codes & test failures |
| `--color-warning` | `#f59e0b` | Redacted fields & duplicate alerts |

---

## 3. Typography & Spacing Rhythm

- **Primary UI Face**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Monospace Code Face**: `JetBrains Mono`, `SFMono-Regular`, `Consolas`, `monospace`

| Type Role | Font Size | Weight | Tracking |
|---|---|---|---|
| Large Title | 24px / 1.5rem | Bold (700) | -0.025em |
| Section Headline | 18px / 1.125rem | Semi-Bold (600) | -0.015em |
| Body UI | 13px / 0.8125rem | Regular / Medium | normal |
| Small Footnote | 11px / 0.6875rem | Medium (500) | +0.01em |
| Code Snippet | 12px / 0.75rem | Regular (400) | normal |

---

## 4. Interaction States & Accessibility

- **Focus Visible**: All interactive elements display a 2px solid `--color-primary` ring with a 2px offset (`focus-visible:ring-2 focus-visible:ring-offset-2`).
- **Touch & Click Targets**: Buttons and list items maintain a minimum 40px height for desktop and 44px for mobile viewport targets.
- **Contrast**: All text satisfies a minimum 4.5:1 contrast ratio against dark surfaces; badges maintain at least 3:1 contrast.
- **Reduced Motion**: All animations and transitions respect `prefers-reduced-motion: reduce`.
