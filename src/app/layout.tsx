import type { ReactNode } from 'react';
import { RootLayoutPresenter } from '../presentation/presenters/layouts/root-layout';
import { RootLayoutView } from '../presentation/views/layouts/root-layout';
import { defaultGlobalStyles } from '../presentation/theme/default-global.styles';
import { defaultTheme } from '../presentation/theme/default.theme';
import { interFont } from '../presentation/theme/inter.font';
import {
  DEFAULT_COLOR_MODE,
  DISABLE_COLOR_MODE,
} from '../domain/config/app.config';

export interface RootLayoutControllerProps {
  children: ReactNode;
}

export default function RootLayoutController({
  children,
}: RootLayoutControllerProps): JSX.Element {
  return (
    <RootLayoutPresenter
      View={RootLayoutView}
      className={interFont.className}
      globalStyles={defaultGlobalStyles}
      theme={defaultTheme}
      defaultColorMode={DEFAULT_COLOR_MODE}
      disableColorMode={DISABLE_COLOR_MODE}
    >
      {children}
    </RootLayoutPresenter>
  );
}
