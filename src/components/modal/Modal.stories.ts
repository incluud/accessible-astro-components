import StorySlot from '../StorySlot.astro'
import Modal from './Modal.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Modal,
  triggerId: 'modal-trigger',
  title: 'Confirm action',
  beforeIsHtml: true,
  before: '<button id="modal-trigger" type="button">Open modal</button>',
}

export const Default = {
  args: {
    ...baseArgs,
    slot: 'This action will update your settings.',
  },
}

export const CustomCloseText = {
  args: {
    ...baseArgs,
    closeText: 'Dismiss',
    slot: 'Modal with custom close label.',
  },
}

export const NoCloseIcon = {
  args: {
    ...baseArgs,
    closeIcon: false,
    slot: 'Modal without the close icon.',
  },
}
