import StorySlot from '../StorySlot.astro'
import Badge from './Badge.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Badge,
}

export const Default = {
  args: {
    ...baseArgs,
    slot: 'Default',
  },
}

export const Info = {
  args: {
    ...baseArgs,
    type: 'info',
    slot: 'Info',
  },
}

export const Success = {
  args: {
    ...baseArgs,
    type: 'success',
    slot: 'Success',
  },
}

export const Warning = {
  args: {
    ...baseArgs,
    type: 'warning',
    slot: 'Warning',
  },
}

export const Error = {
  args: {
    ...baseArgs,
    type: 'error',
    slot: 'Error',
  },
}

export const Small = {
  args: {
    ...baseArgs,
    size: 'sm',
    slot: 'Small',
  },
}

export const Medium = {
  args: {
    ...baseArgs,
    size: 'md',
    slot: 'Medium',
  },
}

export const Large = {
  args: {
    ...baseArgs,
    size: 'lg',
    slot: 'Large',
  },
}

export const Pill = {
  args: {
    ...baseArgs,
    isPill: true,
    slot: 'Pill',
  },
}

export const Circular = {
  args: {
    ...baseArgs,
    label: '3 new notifications',
    isCircular: true,
    slot: '3',
  },
}

export const Button = {
  args: {
    ...baseArgs,
    isButton: true,
    slot: 'Filter',
  },
}

export const ButtonAnimated = {
  args: {
    ...baseArgs,
    isButton: true,
    animateOnHover: true,
    animationType: 'boop',
    slot: 'Animate',
  },
}

export const Pulse = {
  args: {
    ...baseArgs,
    pulse: true,
    slot: 'Pulse',
  },
}
