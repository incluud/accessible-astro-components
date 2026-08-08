import StorySlot from '../StorySlot.astro'
import Switch from './Switch.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Switch,
}

export const Off = {
  args: {
    ...baseArgs,
    name: 'notifications',
    label: 'Enable notifications',
  },
}

export const On = {
  args: {
    ...baseArgs,
    name: 'notifications',
    label: 'Enable notifications',
    checked: true,
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    name: 'notifications',
    label: 'Enable notifications',
    disabled: true,
  },
}
