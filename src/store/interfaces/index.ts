export interface NewUser {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  is_admin: number;
  token: string | null;
  token_created_at: string | null;
  picture: string | null;
}

export interface Token {
  type: string;
  token: string;
  expires_at: string;
}

export interface IBet {
  id: number;
  type: string;
  color: string;
  price: number;
  bet: number[];
  date: Date;
}

export interface IGameRole {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

export interface ILotteryRoles {
  min_cart_value: number
  types: IGameRole[]
}

export interface IRequestInfo<T, D> {
  loading: boolean;
  data: T;
  error: D,
  success: boolean
}

export interface IApiPostGames {
  id: number;
  numbers: number[]
}

export interface IApiResponseData {
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: string;
  updated_at: string;
  id: number;
}

export interface ILoginInfo {
  email: string;
  password: string
}