export type booleanFn_void = {
  showLoginCard: (value: boolean) => void;
};

export type zodError = {
  code: string;
  message: string;
  path: [string];
  validation: string;
};

export type loginForm = {
  emailId: string;
  password: string;
};

export type signupForm = {
  firstName: string;
  lastName: string | null;
  emailId: string;
  password: string;
};
