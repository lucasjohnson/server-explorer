export interface Credentials {
  username: string;
  password: string;
};

export interface Server {
  name: string;
  distance: number;
};

export interface Response {
  message?: string;
  token?: string;
}
