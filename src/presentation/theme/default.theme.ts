'use client';

import {
  alpha,
  type Breakpoints,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import { ruRU as dataGridRuRu } from '@mui/x-data-grid/locales';
import { ruRU as coreRuRU } from '@mui/material/locale';
import { ruRU } from '@mui/x-date-pickers/locales';
import { interFont } from './inter.font';

const breakpointsValues: Breakpoints['values'] = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1440,
};

export const defaultTheme = extendTheme(
  {
    cssVarPrefix: '',
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#00D385',
            light: alpha('#00D385', 0.5),
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#0A0661',
          },
          error: {
            main: '#D51A1A',
            light: '#EB5757',
            contrastText: '#FFFFFF',
          },
          warning: {
            main: '#FF9500',
            contrastText: '#FFFFFF',
          },
          info: {
            main: '#2164F3',
            contrastText: '#FFFFFF',
          },
          text: {
            primary: '#282B33',
            secondary: '#585E73',
            disabled: '#7982A5',
          },
          divider: '#CDCEE4',
          action: {
            hoverOpacity: 0.2,
            activatedOpacity: 0.12,
            disabledOpacity: 0.38,
            focusOpacity: 0.12,
            selectedOpacity: 0.08,
            active: alpha('#0A0661', 0.54),
            disabled: alpha('#0A0661', 0.26),
            focus: alpha('#0A0661', 0.12),
            hover: alpha('#0A0661', 0.04),
            selected: alpha('#0A0661', 0.08),
            disabledBackground: alpha('#0A0661', 0.12),
          },
          TableCell: {
            border: '#E0E2E4',
          },
        },
      },
    },
    typography: {
      fontFamily: interFont.style.fontFamily,
    },
    breakpoints: {
      values: breakpointsValues,
    },
    components: {
      MuiGrid2: {
        defaultProps: {
          columns: 24,
        },
      },
    },
  },
  ruRU,
  dataGridRuRu,
  coreRuRU,
);
