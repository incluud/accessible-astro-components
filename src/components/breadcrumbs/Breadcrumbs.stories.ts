import StorySlot from '../StorySlot.astro'
import Breadcrumbs from './Breadcrumbs.astro'
import BreadcrumbsItem from './BreadcrumbsItem.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Breadcrumbs,
}

export const Default = {
  args: {
    ...baseArgs,
    children: [
      { Component: BreadcrumbsItem, props: { label: 'Home', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Library', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Details', currentPage: true } },
    ],
  },
}

export const WithIcons = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: BreadcrumbsItem,
        props: { label: 'Home', href: '#', hasIcon: true },
        slotIsHtml: true,
        slot: `
          <svg slot="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7" />
            <path d="M9 22V12h6v10" />
          </svg>
        `,
      },
      { Component: BreadcrumbsItem, props: { label: 'Library', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Details', currentPage: true } },
    ],
  },
}

export const CustomSeparator = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: BreadcrumbsItem,
        props: { label: 'Home', href: '#' },
        slotIsHtml: true,
        slot: '<span slot="separator" class="separator" aria-hidden="true">→</span>',
      },
      {
        Component: BreadcrumbsItem,
        props: { label: 'Library', href: '#' },
        slotIsHtml: true,
        slot: '<span slot="separator" class="separator" aria-hidden="true">→</span>',
      },
      { Component: BreadcrumbsItem, props: { label: 'Details', currentPage: true } },
    ],
  },
}

export const LongTrail = {
  args: {
    ...baseArgs,
    children: [
      { Component: BreadcrumbsItem, props: { label: 'Home', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Library', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Collections', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Details', currentPage: true } },
    ],
  },
}

export const LongTrailWithIcons = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: BreadcrumbsItem,
        props: { label: 'Home', href: '#', hasIcon: true },
        slotIsHtml: true,
        slot: `
          <svg slot="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7" />
            <path d="M9 22V12h6v10" />
          </svg>
        `,
      },
      { Component: BreadcrumbsItem, props: { label: 'Library', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Collections', href: '#' } },
      { Component: BreadcrumbsItem, props: { label: 'Details', currentPage: true } },
    ],
  },
}

export const LongTrailCustomSeparator = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: BreadcrumbsItem,
        props: { label: 'Home', href: '#' },
        slotIsHtml: true,
        slot: '<span slot="separator" class="separator" aria-hidden="true">→</span>',
      },
      {
        Component: BreadcrumbsItem,
        props: { label: 'Library', href: '#' },
        slotIsHtml: true,
        slot: '<span slot="separator" class="separator" aria-hidden="true">→</span>',
      },
      {
        Component: BreadcrumbsItem,
        props: { label: 'Collections', href: '#' },
        slotIsHtml: true,
        slot: '<span slot="separator" class="separator" aria-hidden="true">→</span>',
      },
      { Component: BreadcrumbsItem, props: { label: 'Details', currentPage: true } },
    ],
  },
}
