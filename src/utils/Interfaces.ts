export interface Product {
    productId:string,
    image: string;        // URL or path to the product image
    name: string;         // Name of the product
    company: string;      // Company or brand name
    price: number;        // Price of the product (assuming it's a number)
    description: string;  // Product description
  }