import StorySlot from '../StorySlot.astro'
import Avatar from './Avatar.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Avatar,
}

export const Image = {
  args: {
    ...baseArgs,
    img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&w=200&h=200&q=80',
    title: 'Alex Morgan',
    subtitle: 'Product Designer',
  },
}

export const Initials = {
  args: {
    ...baseArgs,
    initials: 'AM',
    title: 'Alex Morgan',
    subtitle: 'Product Designer',
  },
}

export const IconOnly = {
  args: {
    ...baseArgs,
    label: 'User avatar',
  },
}

export const Square = {
  args: {
    ...baseArgs,
    initials: 'LS',
    title: 'Lee Santos',
    subtitle: 'Frontend Engineer',
    shape: 'square',
  },
}

export const Sizes = {
  args: {
    ...baseArgs,
    initials: 'RS',
    title: 'Riley Stone',
    subtitle: 'Research Lead',
    size: 'lg',
  },
}

export const Types = {
  args: {
    ...baseArgs,
    initials: 'MK',
    title: 'Morgan King',
    subtitle: 'Support',
    type: 'success',
  },
}
