'use client';

import type { GlobalStylesProps } from '@mui/material/GlobalStyles';

export const defaultGlobalStyles: GlobalStylesProps['styles'] = {
  body: {
    overflow: 'hidden',
    minWidth: '375px',
  },
  'h1, h2, h3, h4, h5, h6, p': {
    margin: 0,
  },
  a: {
    textDecoration: 'none',
  },
};
