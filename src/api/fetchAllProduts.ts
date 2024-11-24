import { api } from "./api";

const fetchAllProducts = async (accessToken: string | null) => {
  try {
    const { data } = await api.get(`/api/userProducts`, {
      headers: {
        Authorization: accessToken,
      },
    });
    console.log(data);
    return data.data;
  } catch (err: any) {
    if (err?.response.status === 500) {
      return new Error(err.response.message || "Internal Server Error");
    }

    return new Error(err.response.message || "Unexpected Error");
  }
};

export { fetchAllProducts };
