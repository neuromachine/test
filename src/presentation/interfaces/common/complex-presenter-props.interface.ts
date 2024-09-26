import { type Override } from '../../../domain/interfaces';
import type { PresenterUseCases } from './presenter-use-cases.interface';

export type ComplexPresenterProps<
  PresenterProps extends object | undefined = undefined,
  UseCases extends PresenterUseCases | undefined = undefined,
> = Override<
  PresenterProps,
  UseCases extends undefined
    ? NonNullable<unknown>
    : {
        useCases: UseCases;
      }
>;
