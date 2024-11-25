export interface Product {
  id: string;
  imageUrls: string[];
  title: string;
  manufacturer: string;
  price: number;
  description: string;
  currencyCode: string;
  productType: string;
}
export interface Role {
  authority: string;
}

export interface DecodedJWT {
  jti: string;
  sub: string;
  roles: Role[];
  iat: number;
  exp: number;
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

export interface ContactInterface {
  name: string;
  email: string;
  message: string;
}
