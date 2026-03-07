import StorySlot from '../StorySlot.astro'
import Input from './Input.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Input,
}

export const Text = {
  args: {
    ...baseArgs,
    name: 'first-name',
    label: 'First name',
    required: true,
    'data-validation': 'Please enter your first name',
  },
}

export const Email = {
  args: {
    ...baseArgs,
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    autocomplete: 'email',
    'data-validation': 'Please provide a valid email address',
  },
}

export const Password = {
  args: {
    ...baseArgs,
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    'data-validation': 'Password must be at least 8 characters long',
  },
}

export const Disabled = {
  args: {
    ...baseArgs,
    name: 'company',
    label: 'Company',
    value: 'Incluud',
    disabled: true,
    'data-validation': 'This field is required',
  },
}
