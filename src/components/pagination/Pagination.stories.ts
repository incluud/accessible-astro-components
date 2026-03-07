import StorySlot from '../StorySlot.astro'
import Pagination from './Pagination.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Pagination,
  currentPage: 2,
  totalPages: 6,
  firstPage: '#',
  previousPage: '#',
  nextPage: '#',
  lastPage: '#',
}

export const Default = {
  args: {
    ...baseArgs,
  },
}

export const Start = {
  args: {
    ...baseArgs,
    currentPage: 1,
    previousPage: null,
    firstPage: null,
  },
}

export const End = {
  args: {
    ...baseArgs,
    currentPage: 6,
    nextPage: null,
    lastPage: null,
  },
}
