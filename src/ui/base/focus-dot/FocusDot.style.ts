import { css } from '@emotion/css';

import { text } from '~/ui/theme/text';
import colors from '~/ui/theme/colors';



export const container = css`
  ${text}
  font-size: 10px;
  border-radius: 8px;
  height: 16px;
  min-width: 16px;
  line-height: 1;
  padding: 0 4px;
  color: white;
  background: ${colors.secondary};
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;