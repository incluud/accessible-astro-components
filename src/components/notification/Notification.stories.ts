import StorySlot from '../StorySlot.astro'
import Notification from './Notification.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Notification,
}

export const Default = {
  args: {
    ...baseArgs,
    message: 'This is a notification!',
  },
}

export const InfoAccent = {
  args: {
    ...baseArgs,
    type: 'info',
    variant: 'accent',
    message: 'Informational notification.',
    role: 'status',
  },
}

export const Success = {
  args: {
    ...baseArgs,
    type: 'success',
    message: 'Your changes have been saved.',
    role: 'status',
  },
}

export const Warning = {
  args: {
    ...baseArgs,
    type: 'warning',
    message: 'Double-check your inputs.',
    role: 'alert',
  },
}

export const ErrorAccent = {
  args: {
    ...baseArgs,
    type: 'error',
    variant: 'accent',
    message: 'There was a problem with your request.',
    role: 'alert',
  },
}
