// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Override<T1, T2> = T2 extends any ? Omit<T1, keyof T2> & T2 : never;

export type UnwrapPromise<T> = T extends Promise<infer V> ? V : T;
