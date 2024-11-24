import { api } from "./api";

export const fetchProduct = async (
  accessToken: string | null,
  productId: string | undefined
) => {
  try {
    const { data } = await api.get(`/api/product/${productId}`, {
      headers: { Authorization: accessToken },
    });
    return data.data;
  } catch (error: any) {
    if (error?.response.status === 500) {
      return new Error(error.response.message || "Internal Server Error");
    }
    return new Error(error.response.message || "Unexpected Error");
  }
};
