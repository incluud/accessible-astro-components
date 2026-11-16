---
name: Accessible Astro Components
description: Zero-dependency, WCAG 2.2 AA Astro components whose visual states are as explicit as their ARIA states.
colors:
  primary-border: 'light-dark(hsl(288 100% 38.2%), hsl(300 100% 80%))'
  primary-bg: 'light-dark(hsl(300 100% 80%), hsl(288 100% 38.2%))'
  primary-text: 'light-dark(hsl(214.3 30.4% 4.5%), hsl(0 0% 100%))'
  secondary-border: 'light-dark(hsl(169.8 100% 24.1%), hsl(170.1 96.4% 66.9%))'
  secondary-bg: 'light-dark(hsl(170.1 96.4% 66.9%), hsl(169.8 100% 24.1%))'
  secondary-text: 'light-dark(hsl(214.3 30.4% 4.5%), hsl(0 0% 100%))'
  default-border: 'light-dark(hsl(204 8% 55%), hsl(215 15% 45%))'
  default-bg: 'light-dark(hsl(200 20% 97%), hsl(215 25% 13%))'
  default-text: 'light-dark(hsl(204 8% 14%), hsl(0 0% 100%))'
  info-border: 'light-dark(hsl(200 78% 46%), hsl(234 100% 60%))'
  info-bg: 'light-dark(hsl(198 100% 94%), hsl(234 54% 20%))'
  info-text: 'light-dark(hsl(200 96% 27%), hsl(0 0% 100%))'
  success-border: 'light-dark(hsl(160 61% 41%), hsl(101 82% 63%))'
  success-bg: 'light-dark(hsl(160 71% 96%), hsl(101 39% 22%))'
  success-text: 'light-dark(hsl(170 96% 15%), hsl(0 0% 100%))'
  warning-border: 'light-dark(hsl(35 75% 49%), hsl(41 82% 63%))'
  warning-bg: 'light-dark(hsl(48 100% 96%), hsl(41 39% 22%))'
  warning-text: 'light-dark(hsl(15 85% 30%), hsl(0 0% 100%))'
  error-border: 'light-dark(hsl(355 73% 51%), hsl(339 82% 63%))'
  error-bg: 'light-dark(hsl(0 100% 94%), hsl(339 39% 22%))'
  error-text: 'light-dark(hsl(350 94% 19%), hsl(0 0% 100%))'
typography:
  heading-1:
    fontFamily: 'inherit'
    fontSize: 'clamp(2.9863rem, 2.5323rem + 2.2696vw, 4.2913rem)'
    fontWeight: 600
  heading-2:
    fontFamily: 'inherit'
    fontSize: 'clamp(2.4881rem, 2.1594rem + 1.6435vw, 3.4331rem)'
    fontWeight: 600
  heading-3:
    fontFamily: 'inherit'
    fontSize: 'clamp(2.0738rem, 1.8396rem + 1.1707vw, 2.7469rem)'
    fontWeight: 500
  heading-6:
    fontFamily: 'inherit'
    fontSize: 'clamp(1.2rem, 1.1283rem + 0.3587vw, 1.4063rem)'
    fontWeight: 500
  body:
    fontFamily: 'inherit'
    fontSize: 'clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem)'
  label:
    fontFamily: 'inherit'
    fontSize: 'clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem)'
    fontWeight: 700
  small:
    fontFamily: 'inherit'
    fontSize: 'clamp(0.8331rem, 0.8099rem + 0.1163vw, 0.9rem)'
rounded:
  xs: '0.125rem'
  s: '0.25rem'
  m: '0.5rem'
  l: '0.75rem'
  h: '1rem'
spacing:
  4xs: 'clamp(0.125rem, 0.1131rem + 0.1087vw, 0.1563rem)'
  3xs: 'clamp(0.25rem, 0.2283rem + 0.1087vw, 0.3125rem)'
  2xs: 'clamp(0.5rem, 0.4783rem + 0.1087vw, 0.5625rem)'
  xs: 'clamp(0.75rem, 0.7065rem + 0.2174vw, 0.875rem)'
  s: 'clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem)'
  m: 'clamp(1.5rem, 1.4348rem + 0.3261vw, 1.6875rem)'
  l: 'clamp(2rem, 1.913rem + 0.4348vw, 2.25rem)'
  xl: 'clamp(3rem, 2.8696rem + 0.6522vw, 3.375rem)'
components:
  button-default:
    backgroundColor: '{colors.default-bg}'
    textColor: '{colors.default-text}'
    typography: '{typography.label}'
    rounded: '{rounded.s}'
    padding: '{spacing.xs} {spacing.s}'
  button-primary:
    backgroundColor: '{colors.primary-bg}'
    textColor: '{colors.primary-text}'
    typography: '{typography.label}'
    rounded: '{rounded.s}'
    padding: '{spacing.xs} {spacing.s}'
  button-sm:
    typography: '{typography.small}'
    padding: '{spacing.2xs} {spacing.xs}'
  input:
    rounded: '{rounded.s}'
    padding: '{spacing.2xs}'
  tooltip:
    backgroundColor: '{colors.default-bg}'
    textColor: '{colors.default-text}'
    rounded: '{rounded.s}'
    padding: '{spacing.3xs} {spacing.xs}'
  toast:
    backgroundColor: '{colors.default-bg}'
    textColor: '{colors.default-text}'
    typography: '{typography.small}'
    rounded: '{rounded.m}'
    padding: '{spacing.2xs}'
  notification:
    backgroundColor: '{colors.default-bg}'
    textColor: '{colors.default-text}'
    rounded: '{rounded.m}'
    padding: '{spacing.s}'
  card:
    rounded: '{rounded.m}'
    padding: '{spacing.s}'
---

# Design System: Accessible Astro Components

## Overview

**Creative North Star: "The Clear Signal"**

The library makes every state as easy to see as it is for assistive technology to announce. If a screen reader hears "selected", "invalid", "expanded" or "focused", a sighted user sees it too, without relying on colour alone. State changes show up as thick borders, a solid ring, a lift or an underline, never as a faint tint. This is a component library rather than a brand: it inherits the host's fonts, takes the host's palette through `--color-primary-*`, `--color-secondary-*` and `--color-neutral-*` ramps, and adds a small set of strong defaults that look right in the Accessible Astro Starter and stay neutral anywhere else.

Density is moderate and touch-friendly. Interactive targets stay at or above 2.75rem (44px) where the layout allows. Spacing and type both use fluid `clamp()` scales, so components grow with the viewport and need no breakpoint overrides. Light and dark themes come from `light-dark()` on every color token. Components never branch on a `.darkmode` class for color.

Styles are written to be overridden. Every component selector is wrapped in `:where()` for zero specificity, so a consumer's single class beats the library. Motion is decorative and opt-in. Anything that moves sits behind `prefers-reduced-motion: no-preference`, and the reduced-motion fallback stays visible but still.

**Key Characteristics:**

- Explicit states: border, ring, lift or underline. A state is never shown by color alone.
- Bordered rather than shadowed: 2px borders define surfaces, and shadows are reserved for floating layers.
- Semantic color triplets (`border` / `bg` / `text`) for default, info, success, warning, error, primary and secondary.
- Fluid tokens for space and type. No hard-coded rem values inside components.
- Zero-specificity styles with `:where()`, so consumers can theme without fighting the library.
- Logical properties throughout (`inline-size`, `padding-block`, `inset-inline-start`).

## Colors

The palette is functional, not decorative. Each meaning gets one triplet of border, background and text color, and each color is defined for both themes with `light-dark()`.

### Primary

- **Signal Magenta** (`primary-*`): A saturated magenta border on a pale orchid fill (inverted in dark mode). It is the brand voice for the main call to action. Consumers re-tint it by setting `--color-primary-100` and `--color-primary-500`; the values in the frontmatter are the library's fallbacks.

### Secondary

- **Signal Teal** (`secondary-*`): A deep teal border on an aqua fill. Use it for the second call to action next to a primary one. Re-tint it with `--color-secondary-100` and `--color-secondary-500`.

### Tertiary (status)

- **Info Blue**, **Success Green**, **Warning Amber**, **Error Red** (`info-*`, `success-*`, `warning-*`, `error-*`): Status triplets shared by Button, Badge, Notification, Toast and Avatar. In light mode the fill is a pale tint and the text is a deep shade of the same hue. In dark mode the fill is a dark, desaturated tone and the text is white.

### Neutral

- **Slate Rule** (`default-border`): A cool mid-gray. It is the border for every neutral surface and control: cards, tabs, dialogs, inputs, tables and pagination. It keeps at least 3:1 non-text contrast against `default-bg` in both themes.
- **Paper Mist** (`default-bg`): A near-white cool background (a deep navy in dark mode) for neutral surfaces such as dialogs, toasts, tooltips and default buttons.
- **Ink Slate** (`default-text`): Body text on neutral surfaces.
- **Host ramp** (`--color-neutral-100` … `--color-neutral-900`): An optional consumer-provided ramp used for table surfaces and dividers. Always read it with a fallback value.

### Named Rules

**The Triplet Rule.** A colored component sets all three colors of a single triplet (`--color-X-border`, `--color-X-bg`, `--color-X-text`). Never mix the border from one meaning with the background from another, and never hard-code an `hsl()` that duplicates a token.

**The Token-or-Fallback Rule.** Components read color only through `var(--color-…)`. A component that needs a value the system lacks reads a consumer ramp with an inline fallback (`var(--color-neutral-200, hsl(…))`). It never defines a bare literal.

**The Not-Color-Alone Rule.** Every color-coded state also has a non-color signal: an icon, border weight, underline, ring or text.

## Typography

**Display Font:** inherited from the host
**Body Font:** inherited from the host

**Character:** The library ships no font families. It controls size, weight and rhythm, and leaves the voice to the host site. Sizes come from a fluid minor-third (1.2) scale, `--font-size--2` to `--font-size-8`.

### Hierarchy

- **Heading 1–2** (600, `--font-size-6` / `--font-size-5`, line-height set to the next step up): Page and section titles from `Heading`. `text-wrap: balance`.
- **Heading 3–6** (500, `--font-size-4` → `--font-size-1`): Subsection and component titles (Card, Accordion, Modal). Size is decoupled from level: the `size` prop chooses the look and `level` chooses the semantics.
- **Body** (inherited weight, `--font-size-0`): Running text and descriptions.
- **Label** (700, `--font-size-0`): Button, Link-as-button and Tab labels.
- **Small** (`--font-size--1`): Toasts, small buttons, hints and validation messages.

### Named Rules

**The Scale-Only Rule.** Font sizes inside components come from `--font-size-*`. A literal `1.25rem` or `0.875rem` is a deviation.

**The Underline-Is-Interactive Rule.** Underlines mean "this is actionable". Hover and focus move the underline closer (`text-underline-offset` 4px → 2px) instead of adding or removing it.

## Layout

Components are layout-agnostic. They size themselves to content (`inline-size: fit-content`, `field-sizing: content`) and let the host place them. Internal rhythm comes from the fluid space scale `--space-5xs` to `--space-5xl`. Most components use `3xs`–`m` for internal gaps and padding, and `l`/`xl` only for dialog padding.

Stacking uses the `--z-index-*` scale (0–100 in steps of 10). Floating layers expose their own override hook (`--toast-z-index`) that falls back to the scale. SkipLink is the deliberate exception: it must clear any host header, so it sits above the scale at `var(--skip-link-z-index, 9999)`.

Responsiveness comes from the fluid tokens, `min()` sizing (`min(400px, 90vw)`), `flex-wrap` and container-agnostic grids. The only fixed breakpoints in use are `31.25rem` (Tabs) and `40rem` (DataTable). Prefer intrinsic layout to adding a third.

### Named Rules

**The Space-Token Rule.** Padding, margin, gap and inset values inside components come from `--space-*`. Literal rem values are deviations, except geometric sizes such as icon boxes and 2.75rem touch targets.

## Elevation & Depth

The system is flat and bordered. A surface is defined by a 2px border, not a shadow. Shadows mean "floating above the page" and are used only for layers that detach from the flow: tooltips, toasts, drawers and the DataTable pagination popover. Dialogs and drawers add a blurred dimmed backdrop (`blur(5px)` over 50% black).

### Shadow Vocabulary

- **elevation-1** (`0 1px 3px rgba(0 0 0 / 0.12)`): Tooltips and small popovers.
- **elevation-2** (`0 3px 6px rgba(0 0 0 / 0.15)`): Toasts.
- **elevation-4** (`0 15px 25px rgba(0 0 0 / 0.15)`): Drawer panels.
- **Focus ring** (`box-shadow: 0 0 0 0.25rem currentColor`): Not an elevation. It is the interaction ring described under Components.

### Named Rules

**The Flat-Until-Floating Rule.** Inline surfaces (cards, tabs, notifications, inputs) never carry a resting shadow. Only detached layers use `--elevation-*`, and always through the token.

## Shapes

Corners are gently rounded, in two sizes:

- **Surfaces** (`--radius-m`, 8px): Card, Modal, Tabs (tab and panel), Notification, Badge, Media, Pagination items, Toast, Avatar (square variant aside), toggle buttons.
- **Controls** (`--radius-s`, 4px): Button, Link-as-button, Input, Textarea, Fieldset, Tooltip, Drawer close button, DataTable controls.
- **Full round** (`50%` / `9999px`): Avatars, Radio, Switch thumb, pill and dot Badges.

Borders are 2px on surfaces and inputs and 3px on buttons, which gives a call to action more visual weight than its container. Tooltip and table dividers use 1px. Tabs that join a panel square off their joining edge.

### Named Rules

**The Two-Radius Rule.** A surface uses `--radius-m` and a control inside it uses `--radius-s`. Never write `0.5rem` or `0.25rem` literally.

## Components

### Buttons (Button, Link with `isButton`)

Confident and tactile.

- **Shape:** Control radius (`--radius-s`) with a 3px border in the variant's border color.
- **Variants:** `default`, `primary`, `secondary`, `info`, `success`, `warning`, `error`. Each applies its color triplet. `outlined` keeps the border and makes the fill transparent.
- **Sizes:** `sm` (`2xs`/`xs` padding, `--font-size--1`), `md` (`xs`/`s`), `lg` (`s`/`l`, `--font-size-1`).
- **Hover / Focus:** **Lift + underline.** The button rises 3px (only when motion is allowed) and a transparent 2px underline turns `currentColor` while its offset tightens from 4px to 2px. Transition 0.2s on `--animation-timing`.
- **Disabled:** 60% opacity, `not-allowed` cursor.
- **Optional animations:** `boop`, `bouncing`, `nudge`, `rotate` and `pulse`, from `animations.css`. All of them are disabled under reduced motion.

### Cards / Containers (Card, Modal, Tabs panel, Notification)

Bordered, plain and readable.

- **Corner Style:** Surface radius (`--radius-m`).
- **Border:** 2px `--color-default-border`, or the status border for Notification.
- **Background:** Transparent for inline surfaces, `--color-default-bg` for dialogs and notifications.
- **Hover / Focus (interactive cards):** **The ring.** `box-shadow: 0 0 0 0.25rem currentColor` grows around the whole surface. The card's image scales to 1.05 when its link is hovered or focused.
- **Internal Padding:** `--space-s` for cards and notifications, `--space-l` for dialogs.

### Inputs / Fields (Input, Textarea, Fieldset, Checkbox, Radio, Switch)

- **Style:** 2px `--color-default-border`, `--radius-s`, `--space-2xs` padding, and a label above with a `3xs` gap.
- **Error:** Driven by `aria-invalid="true"` through `:has()`. The border switches to `--color-error-border`, the label and message switch to the error text color, and the message (with icon) is revealed.
- **Checkbox / Radio:** Native inputs sized `1em` with `accent-color`, so they stay native and follow the theme.
- **Switch:** A native checkbox with `role="switch"`. The track is 2.75em × 1.5em to meet the 44×24px minimum target, and the thumb slides with `--animation-timing`.

### Icon toggles and chrome controls (DarkMode, HighContrast, ReducedMotion, Pagination, Modal/Drawer close)

- **Shape:** Surface radius, a 2px `currentColor` border and a square `--space-2xs` hit area around a 1.5rem icon.
- **Hover / Focus:** **The ring** (`0 0 0 0.25rem currentColor`). It also serves as the focus indicator, which is why `outline` is removed on these controls.

### Tabs

- **Tab:** A 2px bordered surface-radius tab that squares off its bottom edge where it meets the panel.
- **Selected:** **Inverted fill.** The ink color becomes the background, and a 0.25rem translucent ring is added. Only the selected tab gets the full inversion. Hover and focus use the ring.

### Floating layers (Tooltip, Toast, Drawer)

- **Tooltip:** Popover API plus CSS Anchor Positioning, `--color-default-*` triplet, 1px border, `--radius-s`, `--elevation-1` and `--z-index-6`. Fades and slides from its anchor side.
- **Toast:** Status triplet, 2px border, `--radius-m` and `--elevation-2`. Enters with `@starting-style` and a 0.5rem slide.
- **Drawer:** A `<dialog>` that slides in from any edge. Panel size is `min(400px, 90vw)` and it uses `--elevation-4`.

### Data Table (signature)

A native `<table>` with sortable headers, a search field and pagination. It defines its own role variables (`--data-table-border`, `--data-table-divider`, `--data-table-surface`, `--data-table-focus`) from system tokens and the optional host ramp. Focus is a 3px outline. In forced colors it falls back to system colors (`CanvasText`, `Highlight`).

## Do's and Don'ts

### Do:

- **Do** wrap every component selector in `:where()` so consumer classes win without `!important`.
- **Do** read color only through `--color-{meaning}-{border|bg|text}`, and give fallbacks when reading the host's `--color-neutral-*` / `--color-primary-*` ramps.
- **Do** use `--space-*` for padding, gaps and offsets, and `--font-size-*` for type.
- **Do** use `--radius-m` on surfaces and `--radius-s` on controls.
- **Do** use `--animation-timing` for easing. Durations are 0.2s for state changes and 0.3s for disclosure and image transitions.
- **Do** put every transition and keyframe behind `@media (prefers-reduced-motion: no-preference)`.
- **Do** keep interactive targets at least 2.75rem (44px) in both dimensions where layout allows.
- **Do** use logical properties (`border-inline-start`, `border-start-start-radius`, `padding-block`).

### Don't:

- **Don't** hard-code `hsl()`, `rgb()` or hex values in a component when a token exists. In particular, don't use `light-dark(hsl(0 0% 10%), hsl(0 0% 90%))` for borders; use `--color-default-border`.
- **Don't** redeclare `--transition-easing: cubic-bezier(0.165, 0.84, 0.44, 1)` locally. That is `--animation-timing`.
- **Don't** read tokens the library doesn't define (`--cubic-bezier`, `--animation-speed-*`) without also defining them or giving a fallback that matches the library's own tokens.
- **Don't** add resting shadows to inline surfaces. Shadows are for floating layers.
- **Don't** remove `outline` on focus unless the ring replaces it with equal or greater visibility.
- **Don't** use physical properties (`border-left`, `border-top-left-radius`) in component CSS.
- **Don't** signal state by color alone.
