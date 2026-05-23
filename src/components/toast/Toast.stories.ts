import StorySlot from '../StorySlot.astro'
import Toast from './Toast.astro'
import ToastProvider from './ToastProvider.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Toast,
}

export const Default = {
  args: {
    ...baseArgs,
    message: 'Notification',
  },
}

export const Success = {
  args: {
    ...baseArgs,
    type: 'success',
    message: 'Saved successfully.',
  },
}

export const Warning = {
  args: {
    ...baseArgs,
    type: 'warning',
    message: 'Something needs your attention.',
  },
}

export const Error = {
  args: {
    ...baseArgs,
    type: 'error',
    message: 'Something went wrong.',
  },
}

export const NonDismissible = {
  args: {
    ...baseArgs,
    message: 'Persistent notification.',
    dismissible: false,
  },
}

const playgroundMarkup = `
  <p>Use these buttons to test the ToastProvider API:</p><br />
  <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-block-end:1rem;">
    <button type="button" data-toast-story-action="success">Show success</button>
    <button type="button" data-toast-story-action="info">Show info</button>
    <button type="button" data-toast-story-action="warning">Show warning</button>
    <button type="button" data-toast-story-action="error">Show error</button>
    <button type="button" data-toast-story-action="persistent">Show persistent</button>
    <button type="button" data-toast-story-action="dismiss-all">Dismiss all</button>
  </div>
  <script>
    (() => {
      if (window.__aacToastStoryBound) return
      window.__aacToastStoryBound = true

      document.addEventListener('click', (event) => {
        const target = event.target
        if (!(target instanceof Element)) return

        const trigger = target.closest('[data-toast-story-action]')
        if (!(trigger instanceof HTMLElement)) return

        const action = trigger.dataset.toastStoryAction
        if (!action || !window.toast) return

        if (action === 'success') {
          window.toast.success('Saved successfully.')
          return
        }

        if (action === 'info') {
          window.toast.info('Heads up: a background task is running.')
          return
        }

        if (action === 'warning') {
          window.toast.warning('Storage is almost full.')
          return
        }

        if (action === 'error') {
          window.toast.error('Could not save your changes.')
          return
        }

        if (action === 'persistent') {
          window.toast.show({
            message: 'Background sync is running.',
            type: 'default',
            dismissible: true,
            duration: 0,
          })
          return
        }

        if (action === 'dismiss-all') {
          window.toast.dismissAll()
        }
      })
    })()
  </script>
`

export const Playground = {
  args: {
    Component: ToastProvider,
    beforeIsHtml: true,
    before: playgroundMarkup,
    position: 'bottom-right',
    duration: 5000,
    maxToasts: 5,
    ariaLabel: 'Storybook notifications',
  },
}
