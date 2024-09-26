'use client';

import { type Moment } from 'moment/moment';
import { type BasePresenterProps } from '../../../interfaces/common';
import { type RootLayoutViewProps } from '../../../interfaces/views/layouts';
import { type ThemeProviderProps } from '../../../interfaces/providers/theme-provider';
import { ThemeProvider } from '../../../providers/theme-provider';

export type RootLayoutPresenterProps = BasePresenterProps<
  RootLayoutViewProps,
  Pick<RootLayoutViewProps, 'children' | 'className'> &
    Omit<ThemeProviderProps<Moment, 'ru'>, 'children'>
>;

export function RootLayoutPresenter({
  View,
  className,
  children,

  globalStyles,
  theme,
  localizationProviderOptions,
  cacheOptions,
  defaultColorMode,
  disableColorMode,
}: RootLayoutPresenterProps): JSX.Element {
  return (
    <View className={className}>
      <ThemeProvider
        cacheOptions={cacheOptions}
        globalStyles={globalStyles}
        localizationProviderOptions={localizationProviderOptions}
        theme={theme}
        defaultColorMode={defaultColorMode}
        disableColorMode={disableColorMode}
      >
        {children}
      </ThemeProvider>
    </View>
  );
}
