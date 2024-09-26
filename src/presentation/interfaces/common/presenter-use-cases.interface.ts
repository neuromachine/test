export type PresenterUseCases = Record<
  string,
  (...args: unknown[]) => Promise<unknown>
>;
