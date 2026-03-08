import StorySlot from '../StorySlot.astro'
import Checkbox from './Checkbox.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Checkbox,
}

export const Unchecked = {
  args: {
    ...baseArgs,
    name: 'updates',
    label: 'Product updates',
    value: 'product',
  },
}

export const Checked = {
  args: {
    ...baseArgs,
    name: 'updates',
    label: 'Security alerts',
    value: 'security',
    checked: true,
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    name: 'updates',
    label: 'Weekly summary',
    value: 'summary',
    disabled: true,
  },
}
