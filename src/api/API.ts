import axios from "axios";
import { Product } from "../types/Product";

const instance = axios.create({
  baseURL: "https://67ee6253c11d5ff4bf79633a.mockapi.io/",
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
