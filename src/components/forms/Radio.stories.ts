import StorySlot from '../StorySlot.astro'
import Radio from './Radio.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Radio,
}

export const Starter = {
  args: {
    ...baseArgs,
    name: 'plan',
    label: 'Starter',
    value: 'starter',
    checked: true,
  },
}

export const Team = {
  args: {
    ...baseArgs,
    name: 'plan',
    label: 'Team',
    value: 'team',
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    name: 'plan',
    label: 'Enterprise',
    value: 'enterprise',
    disabled: true,
  },
}
