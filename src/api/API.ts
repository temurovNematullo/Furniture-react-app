import axios from "axios";
import { Product } from "../types/Product";
import { Reviews } from "../types/Reviews";
import { LoginFormInputs } from "../types/Auth";

const instance = axios.create({
  baseURL: "https://67ee6253c11d5ff4bf79633a.mockapi.io/",
});
const instance1 = axios.create({
  baseURL: "https://67e53b7418194932a5852bae.mockapi.io/",
});
const instance2 = axios.create({
  baseURL: "https://67d7fa0c9d5e3a10152cd996.mockapi.io/",
});

export const productsAPI = {
  getProducts(page: number, limit: number) {
    return instance
      .get<Product[]>("/products", {
        params: {
          page: page,
          limit: limit,
        },
      })
      .then((res) => res.data);
  },
  getAllProduct(sortBy?: string, groupValue?: string) {
    if (sortBy === "" && groupValue === "") {
      return instance.get<Product[]>("/products").then((res) => res.data);
    }
    return instance
      .get<Product[]>(`/products?${sortBy}=${groupValue}`)
      .then((response) => response.data);
  },
};

export const userAPI = {
  getUserReviews(limit: number, page: number) {
    return instance1
      .get<Reviews[]>("/reviews", {
        params: {
          limit: limit,
          page: page,
        },
      })
      .then((res) => res.data);
  },
  authUser(data: LoginFormInputs) {
    return instance2
      .post<{ fakeToken: string }>("/usersAuth", {
        ...data,
        fakeToken: "some-fake-token-" + Date.now(),
      })
      .then((res) => res.data.fakeToken);
  },
};

export const searchAPI = {
  searchFurniture(value: string) {
    return instance
      .get<Product[]>(`/products?title=${value}`)
      .then((res) => res.data);
  },
};
