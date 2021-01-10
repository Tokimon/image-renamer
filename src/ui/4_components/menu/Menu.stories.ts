import type { StoryConfig } from '~/types/stories.d';

import detailedAction from '~/ui/1_globals/story-helpers/detailedAction';

import Menu from './Menu.template.svelte';



export default {
  title: '4_components/Menu'
};

export const Default = (): StoryConfig => ({
  Component: Menu,
  on: {
    itemclick: detailedAction('Menu item clicked')
  }
});