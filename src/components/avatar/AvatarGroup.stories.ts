import StorySlot from '../StorySlot.astro'
import AvatarGroup from './AvatarGroup.astro'
import Avatar from './Avatar.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: AvatarGroup,
  children: [
    {
      Component: Avatar,
      props: { initials: 'SL', title: 'Sam Lee', subtitle: 'Developer' },
    },
    {
      Component: Avatar,
      props: { initials: 'JW', title: 'Jamie Wu', subtitle: 'Designer' },
    },
    {
      Component: Avatar,
      props: { initials: 'RT', title: 'Ria Taylor', subtitle: 'Marketing' },
    },
    {
      Component: Avatar,
      props: { label: 'User avatar' },
    },
  ],
}

export const Condensed = {
  args: {
    ...baseArgs,
    display: 'condensed',
  },
}

export const Grid = {
  args: {
    ...baseArgs,
    display: 'grid',
    gridItemsSize: '160px',
    gridGap: '1rem',
  },
}
