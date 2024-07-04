type LengthOfString2<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString2<R,[...T, F]>
  : T['length']
