type MyExclude2<T,K> = T extends K ? never : T

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [k in K]: T[k]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}
