import StorySlot from '../StorySlot.astro'
import Button from './Button.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Button,
}

export const Default = {
  args: {
    ...baseArgs,
    slot: 'Default',
    type: 'default',
  },
}

export const Primary = {
  args: {
    ...baseArgs,
    slot: 'Primary',
    type: 'primary',
  },
}

export const Secondary = {
  args: {
    ...baseArgs,
    slot: 'Secondary',
    type: 'secondary',
  },
}

export const Info = {
  args: {
    ...baseArgs,
    slot: 'Info',
    type: 'info',
  },
}

export const Success = {
  args: {
    ...baseArgs,
    slot: 'Success',
    type: 'success',
  },
}

export const Warning = {
  args: {
    ...baseArgs,
    slot: 'Warning',
    type: 'warning',
  },
}

export const Error = {
  args: {
    ...baseArgs,
    slot: 'Error',
    type: 'error',
  },
}

export const Outlined = {
  args: {
    ...baseArgs,
    slot: 'Outlined',
    variant: 'outlined',
  },
}

export const Small = {
  args: {
    ...baseArgs,
    slot: 'Small',
    size: 'sm',
  },
}

export const Large = {
  args: {
    ...baseArgs,
    slot: 'Large',
    size: 'lg',
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    slot: 'Disabled',
    disabled: true,
  },
}
