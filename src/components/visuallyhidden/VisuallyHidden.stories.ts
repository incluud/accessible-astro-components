import StorySlot from '../StorySlot.astro'
import VisuallyHidden from './VisuallyHidden.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: VisuallyHidden,
}

export const Default = {
  args: {
    ...baseArgs,
    before: 'Read more',
    slot: ' about accessible components',
  },
}

export const Focusable = {
  args: {
    ...baseArgs,
    focusable: true,
    slot: '<a href="#main-content">Skip to main content</a>',
    slotIsHtml: true,
  },
}
