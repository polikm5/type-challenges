type ReturnFalse = '' | 0 | null | undefined | false | Record<string, never> | []
type AnyOf<T extends readonly any[]> = T extends [infer K, ...infer R]
  ? K extends ReturnFalse
    ? AnyOf<R>
    : true
  : false
