'use client';

import type { RootLayoutViewProps } from '../../../interfaces/views/layouts';

export function RootLayoutView({
  children,
  className,
}: RootLayoutViewProps): JSX.Element {
  return (
    <html className={className} dir="ltr" lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
