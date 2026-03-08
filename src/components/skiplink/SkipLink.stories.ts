import StorySlot from '../StorySlot.astro'
import SkipLink from './SkipLink.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: SkipLink,
}

export const Default = {
  args: {
    ...baseArgs,
  },
}

export const CustomTarget = {
  args: {
    ...baseArgs,
    target: '#main',
    text: 'Skip to content',
  },
}
