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

export interface IRequestStatus {
  loading: boolean;
  data: any;
  error: string
}