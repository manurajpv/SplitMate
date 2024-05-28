export type booleanFn_void = {
  showLoginCard: (value: boolean) => void;
}

export type zodError = {
  code: string,
  message: string
  path: [string],
  validation: string,
}