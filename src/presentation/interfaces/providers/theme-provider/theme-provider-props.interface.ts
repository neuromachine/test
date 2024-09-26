import type { GlobalStylesProps } from '@mui/material/GlobalStyles';
import type { LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
import type { AppRouterCacheProviderProps } from '@mui/material-nextjs/v14-appRouter';
import type { PickerValidDate } from '@mui/x-date-pickers/models';
// eslint-disable-next-line no-restricted-imports
import { type Theme } from '@mui/material/styles/createTheme';
// eslint-disable-next-line no-restricted-imports
import { type CssVarsTheme } from '@mui/material/styles/experimental_extendTheme';
import type { BaseProviderProps } from '../../common';

export interface ThemeProviderProps<TDate extends PickerValidDate, TLocale>
  extends BaseProviderProps {
  globalStyles?: GlobalStylesProps['styles'];
  theme: Omit<Theme, 'palette' | 'applyStyles'> & CssVarsTheme;
  localizationProviderOptions?: LocalizationProviderProps<TDate, TLocale>;
  cacheOptions?: AppRouterCacheProviderProps['options'];
  defaultColorMode?: 'light' | 'dark' | 'system' | undefined;
  disableColorMode?: boolean | undefined;
}
