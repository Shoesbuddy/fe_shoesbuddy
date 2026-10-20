export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  shopifyUrl?: string;
  amazonUrl?: string;
};

export type CartLine = {
  productId: string;
  quantity: number;
};
