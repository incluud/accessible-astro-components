import StorySlot from '../StorySlot.astro'
import Textarea from './Textarea.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Textarea,
}

export const Default = {
  args: {
    ...baseArgs,
    name: 'notes',
    label: 'Notes',
    placeholder: 'Add any extra details...',
    'data-validation': 'This field is required',
  },
}

export const Required = {
  args: {
    ...baseArgs,
    name: 'message',
    label: 'Message',
    required: true,
    rows: 5,
    placeholder: 'Tell us more...',
    'data-validation': 'Please add a short message',
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    name: 'disabled',
    label: 'Disabled field',
    value: 'This field is disabled',
    disabled: true,
    'data-validation': 'This field is required',
  },
}
