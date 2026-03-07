import StorySlot from '../StorySlot.astro'
import Link from './Link.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Link,
  href: '#',
  slot: 'Learn more',
}

export const Default = {
  args: {
    ...baseArgs,
  },
}

export const External = {
  args: {
    ...baseArgs,
    href: 'https://incluud.dev',
    isExternal: true,
    slot: 'Visit Incluud',
  },
}

export const ButtonPrimary = {
  args: {
    ...baseArgs,
    isButton: true,
    type: 'primary',
    slot: 'Primary action',
  },
}

export const ButtonOutlined = {
  args: {
    ...baseArgs,
    isButton: true,
    variant: 'outlined',
    type: 'secondary',
    slot: 'Outlined',
  },
}
