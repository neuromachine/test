'use client';

import type { JSX } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'moment/locale/ru.js';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type { PickerValidDate } from '@mui/x-date-pickers/models';
import type { Moment } from 'moment/moment';
import type { ThemeProviderProps } from '../../interfaces/providers/theme-provider';

function InternalThemeProvider<
  TDate extends PickerValidDate = Moment,
  TLocale extends string = string,
>({
  children,
  theme,
  globalStyles,
  defaultColorMode,
  disableColorMode,
}: Pick<
  ThemeProviderProps<TDate, TLocale>,
  | 'children'
  | 'theme'
  | 'globalStyles'
  | 'defaultColorMode'
  | 'disableColorMode'
>): JSX.Element {
  return (
    <CssVarsProvider theme={theme} defaultMode={defaultColorMode}>
      <CssBaseline enableColorScheme={!disableColorMode} />
      <GlobalStyles styles={globalStyles} />
      {children}
    </CssVarsProvider>
  );
}

export function ThemeProvider({
  children,
  theme,
  globalStyles,
  localizationProviderOptions,
  cacheOptions,
  defaultColorMode = 'light',
  disableColorMode,
}: ThemeProviderProps<Moment, 'ru'>): JSX.Element {
  return (
    <AppRouterCacheProvider options={cacheOptions}>
      <LocalizationProvider<Moment, string>
        adapterLocale="ru"
        dateAdapter={AdapterMoment}
        {...localizationProviderOptions}
      >
        <InternalThemeProvider
          globalStyles={globalStyles}
          theme={theme}
          defaultColorMode={defaultColorMode}
          disableColorMode={disableColorMode}
        >
          {!disableColorMode
            ? getInitColorSchemeScript({
                defaultMode: defaultColorMode,
              })
            : null}
          {children}
        </InternalThemeProvider>
      </LocalizationProvider>
    </AppRouterCacheProvider>
  );
}
