import StorySlot from '../StorySlot.astro'
import Fieldset from './Fieldset.astro'
import Checkbox from './Checkbox.astro'
import Radio from './Radio.astro'

export default {
  component: StorySlot,
}

const checkboxGroup = [
  {
    Component: Checkbox,
    props: { name: 'topics', label: 'Accessibility', value: 'a11y' },
  },
  {
    Component: Checkbox,
    props: { name: 'topics', label: 'Performance', value: 'performance' },
  },
  {
    Component: Checkbox,
    props: { name: 'topics', label: 'Tooling', value: 'tooling' },
  },
]

const radioGroup = [
  {
    Component: Radio,
    props: { name: 'contact', label: 'Email', value: 'email', checked: true },
  },
  {
    Component: Radio,
    props: { name: 'contact', label: 'Phone', value: 'phone' },
  },
]

export const RequiredCheckboxGroup = {
  args: {
    Component: Fieldset,
    name: 'topics',
    legend: 'Topics of interest',
    required: true,
    'data-validation': 'Please select at least one topic',
    children: checkboxGroup,
  },
}

export const MinimalRadioGroup = {
  args: {
    Component: Fieldset,
    name: 'contact',
    legend: 'Preferred contact method',
    variant: 'minimal',
    required: true,
    'data-validation': 'Please choose a contact method',
    children: radioGroup,
  },
}
