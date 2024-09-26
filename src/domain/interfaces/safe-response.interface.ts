import { type UnwrapPromise } from './helper.interfaces';

export type SafeResponse<Data = unknown> =
  | {
      data: UnwrapPromise<Data> | undefined;
      error?: undefined;
    }
  | {
      data?: undefined;
      error: unknown;
    };
