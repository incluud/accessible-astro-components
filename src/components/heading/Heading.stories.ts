import StorySlot from '../StorySlot.astro'
import Heading from './Heading.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Heading,
  slot: 'Accessible Astro heading',
}

export const H1 = {
  args: {
    ...baseArgs,
    level: 'h1',
  },
}

export const H2 = {
  args: {
    ...baseArgs,
    level: 'h2',
  },
}

export const H3 = {
  args: {
    ...baseArgs,
    level: 'h3',
  },
}

export const H4 = {
  args: {
    ...baseArgs,
    level: 'h4',
  },
}

export const H5 = {
  args: {
    ...baseArgs,
    level: 'h5',
  },
}

export const H6 = {
  args: {
    ...baseArgs,
    level: 'h6',
  },
}

export const CustomSize = {
  args: {
    ...baseArgs,
    level: 'h2',
    size: 'h4',
    slot: 'H2 level with H4 size',
  },
}
