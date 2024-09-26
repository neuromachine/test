import type { ComponentType } from 'react';
import { type Override } from '../../../domain/interfaces';
import type { PresenterUseCases } from './presenter-use-cases.interface';

export type BasePresenterProps<
  ViewProps extends object,
  PresenterProps extends object | undefined = undefined,
  UseCases extends PresenterUseCases | undefined = undefined,
> = Override<
  PresenterProps,
  UseCases extends undefined
    ? {
        View: ComponentType<ViewProps>;
      }
    : {
        View: ComponentType<ViewProps>;
        useCases: UseCases;
      }
>;
