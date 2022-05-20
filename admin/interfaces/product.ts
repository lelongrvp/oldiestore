export interface IProduct {
  _id: number,
  img: string,
  title: string,
  desc: string,
  cat: string[],
  version: number,
  method: string[],
  price: number,
  inStock: boolean,
}
