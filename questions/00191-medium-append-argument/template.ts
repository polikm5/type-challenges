type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer K
) => infer R
  ? (...args: [...K, x: A]) => R
  : never;
