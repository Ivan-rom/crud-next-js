export enum Mode {
  'Tranfer Bank' = 'Tranfer Bank',
  'Cash on Delivery' = 'Cash on Delivery',
}

export enum Status {
  'delivered' = 'delivered',
  'process' = 'process',
  'canceled' = 'canceled',
}

export interface IProduct {
  [key: string]: any
  id?: number
  title: string
  customer: string
  date: string
  mode: string
  status: string
  price: string
  image: string
}
