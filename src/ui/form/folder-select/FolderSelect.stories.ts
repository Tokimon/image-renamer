import type { StoryConfig } from '@/types/stories.d';
import detailedAction from '@/story-helpers/detailedAction';

import FolderSelect from './FolderSelect.template.svelte';



export default {
  title: 'Form/FolderSelect'
};

export const Default = (): StoryConfig => ({
  Component: FolderSelect,
  on: {
    change: detailedAction('Folder changed')
  }
});