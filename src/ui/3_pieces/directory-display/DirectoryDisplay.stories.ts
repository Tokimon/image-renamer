import type { StoryConfig } from '~/types/stories.d';

import DirectoryDisplay from './DirectoryDisplay.template.svelte';



interface ExampleProps {
  src: string;
  count: number;
  width: number;
}



export default {
  title: '3_pieces/DirectoryDisplay',
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 5,
        max: 100,
        step: 1
      }
    }
  }
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: DirectoryDisplay,
  props
});

Default.args = {
  path: 'some/directory/to/find/files/from',
  width: 100
};
