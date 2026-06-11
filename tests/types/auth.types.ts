export type AuthUser = {
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    gender: string;
  };
  token: string;
};
