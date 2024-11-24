export interface Product {
  productId: string;
  imageUrls: string[]; // URL or path to the product image
  name: string; // Name of the product
  manufacturer: string; // Company or brand name
  price: number; // Price of the product (assuming it's a number)
  description: string;
  currencyCode: string; // Product description
  productType: string;
}
export interface Role {
  authority: string;
}

export interface DecodedJWT {
  jti: string;
  sub: string; // Subject of the token (e.g., username or user identifier)
  roles: Role[]; // Array of roles, each containing an 'authority'
  iat: number; // Issued at time (Unix timestamp)
  exp: number; // Expiration time (Unix timestamp)
}
export interface loginInterface {
  username: string;
  password: string;
}
export interface UserInfo {
  username: string;
  email: string;
  password: string;
  name: string;
  companyName: string;
}
