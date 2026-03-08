import StorySlot from '../StorySlot.astro'
import Card from './Card.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Card,
  slotIsHtml: true,
}

export const Default = {
  args: {
    ...baseArgs,
    slot: 'A quick overview of this card content to demonstrate the default layout.',
  },
}

export const WithMeta = {
  args: {
    ...baseArgs,
    slot: `
      <span slot="meta">Updated 2 days ago</span>
      A quick overview of this card content to demonstrate the default layout.
    `,
  },
}

export const WithFooter = {
  args: {
    ...baseArgs,
    footer: 'Read time: 4 min',
    slot: 'A card example with footer text aligned to the bottom.',
  },
}

export const FullHeight = {
  args: {
    ...baseArgs,
    fullHeight: true,
    slot: 'A full-height card that fills the available grid space.',
  },
}

export const CustomImage = {
  args: {
    ...baseArgs,
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Forest at sunset',
    slot: 'A card with a custom image and descriptive alternative text.',
  },
}

export const LongTitle = {
  args: {
    ...baseArgs,
    title: 'A longer card title to demonstrate wrapping across multiple lines',
    slot: 'The description stays readable as the title wraps.',
  },
}

export const HeadingSizes = {
  args: {
    ...baseArgs,
    title: 'Heading size h4',
    headingSize: 'h4',
    slot: 'This card uses a larger visual heading size.',
  },
}

export const HeadingLevel = {
  args: {
    ...baseArgs,
    title: 'Heading level h2',
    headingLevel: 'h2',
    headingSize: 'h5',
    slot: 'Semantic heading level set to h2 with smaller visual size.',
  },
}

export const ShortDescription = {
  args: {
    ...baseArgs,
    slot: 'Short description.',
  },
}
