import type { StoryConfig } from '~/types/stories.d';

import ColorsTemplate from './Colors.template.svelte';
import FontTemplate from './font.template.svelte';


interface FontExampleProps {
  type: string;
}


export default {
  title: 'Theme',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'headline']
      }
    }
  }
};

export const Colors = (): StoryConfig => ({ Component: ColorsTemplate });

export const Font = (props: FontExampleProps): StoryConfig => ({
  Component: FontTemplate,
  props
});

Font.args = {
  type: 'text'
};
