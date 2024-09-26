export type BaseListRequest<
  Data extends NonNullable<unknown> | undefined = undefined,
> = {
  _limit?: number;
} & (Data extends undefined ? NonNullable<unknown> : Data);
