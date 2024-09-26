export interface PageProps<
  Params extends Record<string, string | string[]> = Record<string, string>,
  SearchParams extends Record<string, string | string[] | undefined> = Record<
    string,
    string | string[] | undefined
  >,
> {
  params: Params;
  searchParams: SearchParams;
}
