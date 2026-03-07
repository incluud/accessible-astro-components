import StorySlot from '../StorySlot.astro'
import Tooltip from './Tooltip.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Tooltip,
}

export const Default = {
  args: {
    ...baseArgs,
    id: 'tooltip-default',
    slot: 'Click me to see the tooltip',
    tooltipSlot: 'This is a tooltip',
  },
}

export const Position = {
  args: {
    ...baseArgs,
    id: 'tooltip-position',
    slot: 'Click me to see the tooltip',
    tooltipSlot: 'This is a tooltip',
    position: 'bottom',
  },
}
