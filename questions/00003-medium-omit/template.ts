type MyOmit<T, K extends keyof T> = {
  [Y in keyof T as Y  extends K ? never : Y]: T[Y];
};
