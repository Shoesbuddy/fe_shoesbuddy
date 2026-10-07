export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type CartLine = {
  productId: string;
  quantity: number;
};
