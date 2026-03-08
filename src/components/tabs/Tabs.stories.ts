import StorySlot from '../StorySlot.astro'
import Tabs from './Tabs.astro'
import TabsList from './TabsList.astro'
import TabsTab from './TabsTab.astro'
import TabsPanel from './TabsPanel.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Tabs,
  children: [
    {
      Component: TabsList,
      children: [
        {
          Component: TabsTab,
          props: { id: 'tab-overview', controls: 'panel-overview', selected: true },
          slot: 'Overview',
        },
        {
          Component: TabsTab,
          props: { id: 'tab-details', controls: 'panel-details' },
          slot: 'Details',
        },
        {
          Component: TabsTab,
          props: { id: 'tab-settings', controls: 'panel-settings' },
          slot: 'Settings',
        },
      ],
    },
    {
      Component: TabsPanel,
      props: { id: 'panel-overview', labelledby: 'tab-overview', selected: true },
      slot: 'Overview content goes here.',
    },
    {
      Component: TabsPanel,
      props: { id: 'panel-details', labelledby: 'tab-details' },
      slot: 'Details content goes here.',
    },
    {
      Component: TabsPanel,
      props: { id: 'panel-settings', labelledby: 'tab-settings' },
      slot: 'Settings content goes here.',
    },
  ],
}

export const Default = {
  args: {
    ...baseArgs,
  },
}
