import StorySlot from '../StorySlot.astro'
import Media from './Media.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Media,
  src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
  alt: 'Mountain landscape',
}

export const Default = {
  args: {
    ...baseArgs,
  },
}

export const Square = {
  args: {
    ...baseArgs,
    ratio: '1:1',
  },
}

export const Wide = {
  args: {
    ...baseArgs,
    ratio: '21:9',
  },
}
