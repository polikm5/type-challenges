type Flatten<
  T extends any[],
  R extends any[] = []
> = T extends [infer X, ...infer Y]
  ? X extends any[]
    ? Flatten<[...X,...Y],[...R]>
    : Flatten<[...Y],[...R,X]>
  : R;
