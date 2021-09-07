export interface Credentials {
  username: string;
  password: string;
};

export interface Errors {
  username: boolean;
  password: boolean;
};

export interface Server {
  name: string;
  distance: number;
};
