import StorySlot from '../StorySlot.astro'
import Accordion from './Accordion.astro'
import AccordionItem from './AccordionItem.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Accordion,
}

export const Default = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: AccordionItem,
        props: { title: 'What is Accessible Astro?', variant: 'default' },
        slot: 'Accessible Astro is a collection of WCAG-focused components.',
      },
      {
        Component: AccordionItem,
        props: { title: 'Is it production ready?', variant: 'default' },
        slot: 'Yes, these components are used across the starter and dashboard.',
      },
    ],
  },
}

export const Chevron = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: AccordionItem,
        props: { title: 'Chevron variant', variant: 'chevron' },
        slot: 'This uses the chevron style with a compact summary.',
      },
      {
        Component: AccordionItem,
        props: { title: 'Second item', variant: 'chevron' },
        slot: 'Another item to show spacing and dividers.',
      },
    ],
  },
}

export const FirstOpen = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: AccordionItem,
        props: { title: 'Open by default', variant: 'default', open: true },
        slot: 'This item starts expanded.',
      },
      {
        Component: AccordionItem,
        props: { title: 'Collapsed item', variant: 'default' },
        slot: 'This item starts collapsed.',
      },
    ],
  },
}
