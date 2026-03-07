import DarkMode from './DarkMode.astro'

export default {
  component: DarkMode,
}

export const Default = {
  args: {},
}

export const InitialAuto = {
  args: {
    initialMode: 'auto',
  },
}

export const InitialLight = {
  args: {
    initialMode: 'light',
  },
}

export const InitialDark = {
  args: {
    initialMode: 'dark',
  },
}

export const CustomLabel = {
  args: {
    label: 'Toggle theme',
  },
}
