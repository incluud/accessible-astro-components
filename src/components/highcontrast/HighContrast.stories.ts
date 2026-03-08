import StorySlot from '../StorySlot.astro'
import HighContrast from './HighContrast.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: HighContrast,
}

export const Default = {
  args: {
    ...baseArgs,
  },
}

export const CustomLabel = {
  args: {
    ...baseArgs,
    label: 'Toggle contrast mode',
  },
}
