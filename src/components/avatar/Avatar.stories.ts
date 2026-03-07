import Avatar from './Avatar.astro'

export default {
  component: Avatar,
}

export const Image = {
  args: {
    img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&w=200&h=200&q=80',
    title: 'Alex Morgan',
    subtitle: 'Product Designer',
  },
}

export const Initials = {
  args: {
    initials: 'AM',
    title: 'Alex Morgan',
    subtitle: 'Product Designer',
  },
}

export const IconOnly = {
  args: {
    label: 'User avatar',
  },
}

export const Square = {
  args: {
    initials: 'LS',
    title: 'Lee Santos',
    subtitle: 'Frontend Engineer',
    shape: 'square',
  },
}

export const Sizes = {
  args: {
    initials: 'RS',
    title: 'Riley Stone',
    subtitle: 'Research Lead',
    size: 'lg',
  },
}

export const Types = {
  args: {
    initials: 'MK',
    title: 'Morgan King',
    subtitle: 'Support',
    type: 'success',
  },
}
