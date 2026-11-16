# Handoff: design system baseline + consistency audit

> Working note for picking this up later. **Drop this file before opening a PR**: it's a
> local status note, not project documentation. It sits in its own commit so that's easy.

Last updated: 2026-11-16 · Branch: `korea-bay` (local only, not pushed)

## Done

- **`DESIGN.md`** (repo root): Impeccable design system baseline, "The Clear Signal". Derived
  from `src/styles/*.css` plus the newer token-based components (Button, Link, Input, Toast,
  Tooltip, Drawer).
- **`.impeccable/design.json`**: Impeccable sidecar (tonal ramps, shadows, motion tokens,
  component snippets, narrative). Regenerate it whenever `DESIGN.md` changes.
- **SkipLink z-index hook**: `src/components/skiplink/SkipLink.astro` now uses
  `z-index: var(--skip-link-z-index, 9999)`. Default unchanged; patch-level.
- **Docs PR**: https://github.com/incluud/accessible-astro-docs/pull/12 documents
  `--skip-link-z-index`. **On hold** until a components release ships the hook. Docs worktree:
  `/Users/peter/development/astro/worktrees/accessible-astro-docs/skip-link-z-index/`.

## Baseline decisions (made by Peter, recorded in DESIGN.md)

1. **Borders:** neutral borders use `--color-default-border` (mid gray). The hard-coded
   near-black `light-dark(hsl(0 0% 10%), hsl(0 0% 90%))` borders are deviations.
2. **Hover/focus:** a `0 0 0 0.25rem` currentColor ring for containers and chrome controls,
   lift + underline for Button and Link. Tabs use the inverted fill only for the selected tab.
3. **Radius:** `--radius-m` (8px) for surfaces, `--radius-s` (4px) for controls.
4. **North Star:** "The Clear Signal". Every state is as visible as it is announced.
5. **SkipLink** is the deliberate exception to the `--z-index-*` scale. Not a bug.

## Open: bugs (patch, no visual change)

- [ ] **Pulse on primary/secondary buttons is black.** Button and Link (`Link.astro:315`) read
      `--color-pulse-primary`, `--color-pulse-secondary` and `--color-pulse-ghost`, none of
      which `colors.css` defines. Add them to `src/styles/colors.css`.
- [ ] **DataTable reads starter-only tokens.** It uses `--cubic-bezier` and
      `--animation-speed-instant`; outside the starter it falls back to `ease-out 0.1s`.
      Switch to `--animation-timing` and a 0.1–0.2s duration.
- [ ] **Notification accent variant breaks in RTL.** It uses physical `border-left` and
      `border-top-left-radius`; switch to `border-inline-start` and
      `border-start-start-radius`. (Impeccable's detector also flags the 6px side stripe, but
      it's a public variant, so removal would be breaking. Leave it.)

## Open: token drift (replace literals with tokens)

| Component                           | Drift                                                                                                                                 | Severity |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Tabs (TabsTab/Panel/List)           | Ink borders, literal 0.5/1/1.5/2rem, 1.125rem font, hover/focus invert fill (should be ring)                                          | High     |
| Modal                               | Ink border, own bg `hsl(204 20% 94%)` ≠ `default-bg`, literal 2rem/1.5rem, own easing; diverges from Drawer                           | High     |
| Card                                | Ink border, literal 0.5rem radius + spacing, fixed 250px image                                                                        | High     |
| Pagination                          | Ink border, 2.5rem targets vs DataTablePagination's 2.75rem + 3px outline                                                             | High     |
| AccordionItem                       | Ink border + hover color literals, 1.25rem title, 2.2rem off-scale padding                                                            | Medium   |
| Input/Textarea/Fieldset             | Same literal error text color ×3. Needs a new token (an "error text on canvas" color); `--color-error-text` is for text on `error-bg` | Medium   |
| SkipLink                            | Hard-coded colors, 3.25rem padding (z-index now resolved)                                                                             | Medium   |
| Notification                        | `oklch(from #b9bec4 …)` icon bg, literal spacing (plus the RTL bug above)                                                             | Medium   |
| DarkMode/HighContrast/ReducedMotion | Literal 0.5rem radius + padding, own easing; near-identical copies, could share styles                                                | Low      |
| Badge                               | Literal 0.5rem radius + sizing, own easing                                                                                            | Low      |
| Avatar, Breadcrumbs, Media, Form    | A few literal radius/gap values                                                                                                       | Low      |

**Across the library:** `cubic-bezier(0.165, 0.84, 0.44, 1)` is redeclared as a local
`--transition-easing` in 10 components (AccordionItem, Badge, Card, DarkMode, HighContrast,
ReducedMotion, Modal, Pagination, TabsTab, Tooltip). Replace with `--animation-timing`.

## Suggested order

1. The three bugs above, then a patch release that also ships the SkipLink hook. After that,
   merge docs PR #12.
2. Replace literals with tokens wherever the result looks identical.
3. Move the ink borders to the gray token (Card, Modal, Tabs, Pagination, Accordion).
   Consumers will see lighter borders, so release it as a **minor** with a migration note in
   the docs.

## Notes

- Before opening a PR, run Prettier in a worktree with `node_modules`; this worktree has none.
- Re-run the audit: `impeccable detect --json src/components`. The token-usage matrix came from
  a grep of `<style>` blocks for `var(--…)` vs literal values.
- `origin/main` is public: commit locally, ask before pushing.
