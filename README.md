# Accessible Astro Components

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

![accessible-astro-components](https://github.com/user-attachments/assets/ba773cb6-ee7e-421d-8228-6f9fd3e13575)

A comprehensive library of accessible, easy-to-use UI Components for [Astro](https://astro.build). Each component is built with accessibility in mind, following WCAG guidelines and ARIA best practices, providing a solid foundation for building inclusive web applications. The components are designed to be customizable, performant, and developer-friendly, with full TypeScript support.

[![LIVE DEMO](https://img.shields.io/badge/LIVE_DEMO-4ECCA3?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro.netlify.app/accessible-components/) &nbsp;
[![DOCUMENTATION](https://img.shields.io/badge/DOCUMENTATION-A682FF?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro.incluud.dev/) &nbsp;
[![NPM Version](https://img.shields.io/npm/v/accessible-astro-components?style=for-the-badge&logo=npm&logoColor=black&color=A682FF)](https://www.npmjs.com/package/accessible-astro-components) &nbsp;
[![NPM Downloads](https://img.shields.io/npm/dt/accessible-astro-components?style=for-the-badge&color=4ECCA3&logo=npm&logoColor=black)](https://www.npmjs.com/package/accessible-astro-components) &nbsp;

[![Follow on X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/incluud) &nbsp;
[![Follow on BlueSky](https://img.shields.io/badge/BlueSky-0285FF?style=for-the-badge&logo=bluesky&logoColor=white)](https://bsky.app/profile/incluud.dev) &nbsp;
[![Sponsor on Open Collective](https://img.shields.io/badge/Open%20Collective-7FADF2?style=for-the-badge&logo=opencollective&logoColor=white)](https://opencollective.com/incluud) &nbsp;
[![Sponsor on GitHub](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=EA4AAA)](https://github.com/sponsors/incluud)

## Our mission

> Provide developers with accessible, easy-to-use components that make building inclusive web applications simpler and faster, without compromising on customization or performance.

## Component features

- **Accessible by default**: Built following WCAG guidelines and ARIA best practices
- **Modern CSS**: Using logical properties and modern selectors
- **Performance**: Optimized for Core Web Vitals
- **Responsive**: Mobile-first and touch-friendly design
- **i18n ready**: Built with internationalization in mind
- **Dark mode**: Supports light and dark themes with `light-dark()`
- **Keyboard navigation**: Full keyboard support with focus management
- **Screen readers**: Proper ARIA labels and semantic HTML
- **Customizable**: Easy to style and adapt to your needs
- **Zero dependencies**: Pure Astro components
- **TypeScript**: Full type support and documentation
- **Modern**: Uses latest web standards and best practices

## Available components

The Accessible Astro Components library provides a collection of pre-built, accessible components that you can easily integrate into your Astro projects:

- **Accordion**: Expandable/collapsible sections for progressive disclosure
- **Breadcrumbs**: Navigation aid showing the current page's location
- **Card**: Content container with flexible layout options
- **DarkMode**: Theme toggle with system preference support
- **Media**: Responsive image component
- **Modal**: Accessible dialog windows
- **Notification**: Info and alert messages
- **Pagination**: Navigation for paginated content
- **SkipLinks**: Keyboard navigation aid for screen readers
- **Tabs**: Content organization with tabbed interfaces
- **Video**: YouTube embed component

## Getting started

```bash
# npm
npm install accessible-astro-components

# pnpm
pnpm add accessible-astro-components

# yarn
yarn add accessible-astro-components
```

## Quick Start

```astro
---
import { Accordion, Card, Modal } from 'accessible-astro-components'
---

<Accordion>
  <AccordionItem title="Getting Started">Content for the first item...</AccordionItem>
</Accordion>
```

## Accessible Astro projects

- [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter): A fully accessible boilerplate for kickstarting Astro projects, with Tailwind CSS support.
- [Accessible Astro Components](https://github.com/incluud/accessible-astro-components/): A library of reusable, accessible components designed for Astro, build in TypeScript.
- [Accessible Astro Dashboard](https://github.com/incluud/accessible-astro-dashboard/): A user-friendly dashboard interface with a login screen, built with accessibility in mind.
- [Accessible Astro Docs](https://github.com/incluud/accessible-astro-docs): Comprehensive documentation for all Accessible Astro projects, built with Astro's Starlight theme.

Check out our [roadmap](https://github.com/orgs/incluud/projects/4) to see what's coming next!

## Contributing

We welcome contributions to improve the documentation! You can help by:

1. [Filing an issue](https://github.com/incluud/accessible-astro-components/issues)
2. [Submitting a pull request](https://github.com/incluud/accessible-astro-components/pulls)
3. [Starting a discussion](https://github.com/incluud/accessible-astro-components/discussions)
4. [Supporting on Open Collective](https://opencollective.com/incluud)

## Support this project

Your support helps us cover basic costs and continue building accessible solutions for the Astro ecosystem. By becoming a sponsor, you're not just supporting code – you're helping create a more inclusive web for everyone. Every contribution, big or small, helps maintain and improve these accessibility-focused tools.

[![Sponsor on Open Collective](https://img.shields.io/badge/Open%20Collective-7FADF2?style=for-the-badge&logo=opencollective&logoColor=white)](https://opencollective.com/incluud)

## Together we make a difference

We want to express our heartfelt gratitude to everyone who contributes to making the web more accessible:

<a href="https://github.com/incluud/accessible-astro-components/graphs/contributors">
<img src="https://contrib.rocks/image?repo=incluud/accessible-astro-components" />
</a>

- **The Astro team** for creating an amazing static site generator and the wonderful Starlight theme
- **Our contributors** who dedicate their time and expertise to improve these tools
- **Our sponsors** who help make this project sustainable
- **The web community** for embracing and promoting web accessibility
- **You, the developer** for choosing to make your projects more accessible

Together, we're not just building documentation or components – we're creating a more inclusive and accessible web for everyone. Every contribution, whether it's code, documentation, bug reports, or feedback, helps move us closer to this goal. ✨

Remember: Accessibility is not a feature, it's a fundamental right. Thank you for being part of this journey!

## The story behind Accessible Astro

Accessible Astro started as a personal project by [Mark Teekman](https://github.com/markteekman) in 2021 when Astro was in its early stages, born from a passion for web accessibility and the Astro framework. What began as a single starter template grew into a family of accessible solutions, leading to the creation of [Incluud](https://github.com/incluud), an initiative with [Peter Padberg](https://github.com/peterpadberg) to make the web more inclusive. Today, these projects continue to grow and evolve with the help of our amazing community, staying true to their original purpose: making web accessibility easier for developers and better for everyone.
