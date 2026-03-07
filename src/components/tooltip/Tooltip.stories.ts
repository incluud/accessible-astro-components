import StorySlot from '../StorySlot.astro'
import Tooltip from './Tooltip.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Tooltip,
  slot: 'Click me to see the tooltip',
  tooltipSlot: 'This is a tooltip',
}

export const Default = {
  args: {
    ...baseArgs,
    id: 'tooltip-default',
  },
}

export const Position = {
  args: {
    ...baseArgs,
    id: 'tooltip-position',
    position: 'bottom',
  },
}
