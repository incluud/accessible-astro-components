import StorySlot from '../StorySlot.astro'
import Form from './Form.astro'
import Input from './Input.astro'
import Textarea from './Textarea.astro'
import Fieldset from './Fieldset.astro'
import Checkbox from './Checkbox.astro'
import Radio from './Radio.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Form,
}

export const Basic = {
  args: {
    ...baseArgs,
    children: [
      {
        Component: Input,
        props: {
          name: 'full-name',
          label: 'Full name',
          required: true,
          'data-validation': 'Please enter your full name',
        },
      },
      {
        Component: Input,
        props: {
          name: 'email',
          label: 'Email address',
          type: 'email',
          required: true,
          autocomplete: 'email',
          'data-validation': 'Please provide a valid email address',
        },
      },
      {
        Component: Textarea,
        props: {
          name: 'message',
          label: 'Message',
          required: true,
          rows: 4,
          placeholder: 'Tell us a little about your project...',
          'data-validation': 'Please add a short message',
        },
      },
      {
        Component: Fieldset,
        props: {
          name: 'updates',
          legend: 'Email preferences',
          required: true,
          'data-validation': 'Please select at least one option',
        },
        children: [
          {
            Component: Checkbox,
            props: {
              name: 'updates',
              label: 'Product updates',
              value: 'product',
            },
          },
          {
            Component: Checkbox,
            props: {
              name: 'updates',
              label: 'Security alerts',
              value: 'security',
            },
          },
        ],
      },
      {
        Component: Fieldset,
        props: {
          name: 'plan',
          legend: 'Plan type',
          required: true,
          variant: 'minimal',
          'data-validation': 'Please choose a plan',
        },
        children: [
          {
            Component: Radio,
            props: {
              name: 'plan',
              label: 'Starter',
              value: 'starter',
            },
          },
          {
            Component: Radio,
            props: {
              name: 'plan',
              label: 'Team',
              value: 'team',
            },
          },
        ],
      },
    ],
    afterIsHtml: true,
    after: '<button type="submit">Send message</button>',
  },
}
