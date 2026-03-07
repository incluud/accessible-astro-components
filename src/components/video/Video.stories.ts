import StorySlot from '../StorySlot.astro'
import Video from './Video.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Video,
  src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  title: 'Sample video',
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

export const FourThree = {
  args: {
    ...baseArgs,
    ratio: '4:3',
  },
}
