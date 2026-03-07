import StorySlot from '../StorySlot.astro'
import ReducedMotion from './ReducedMotion.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: ReducedMotion,
}

export const Default = {
  args: {
    ...baseArgs,
  },
}

export const InitialAuto = {
  args: {
    ...baseArgs,
    initialMode: 'auto',
  },
}

export const InitialOn = {
  args: {
    ...baseArgs,
    initialMode: 'on',
  },
}

export const InitialOff = {
  args: {
    ...baseArgs,
    initialMode: 'off',
  },
}
