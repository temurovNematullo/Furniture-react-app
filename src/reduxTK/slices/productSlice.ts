import { RootState } from "../store";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { productsAPI, searchAPI } from "../../api/API"; // Adjust the path as needed

interface ProductsState {
  products: Product[];
  page: number;
  limit: number;
  totalCount: number;
  status: "idle" | "loading" | "succeeded" | "error";
}

const initialState: ProductsState = {
  products: [],
  page: 1,
  limit: 8,
  totalCount: 0,
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>("products/fetchProducts", async (_, { dispatch, getState }) => {
  try {
    const { page, limit } = getState().products; // Получаем текущие значения page и limit из состояния
    const data = await productsAPI.getProducts(page, limit); // Передаем их в API
    if (!data) {
      throw new Error("Failed to fetch products");
    }
    dispatch(setProducts(data));
    return data; // Убедитесь, что функция возвращает полученные данные
  } catch (error) {
    throw error;
  }
});

export const fetchAllProducts = createAsyncThunk<
  Product[],
  { sortBy: string; groupValue: string }
>("products/fetchAllProducts", async ({ sortBy, groupValue }, { dispatch }) => {
  try {
    const data = await productsAPI.getAllProduct(sortBy, groupValue);

    if (!data) {
      throw new Error("Failed to fetch products");
    }
    dispatch(setProducts(data));
    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchSearchResults = createAsyncThunk<
  Product[],
  string,
  { rejectValue: string }
>(
  "products/fetchSearchResults",
  async (value: string, { rejectWithValue, dispatch }) => {
    try {
      const searchData = await searchAPI.searchFurniture(value);
      dispatch(setProducts(searchData)); // Dispatch the action to set the products in the state
      console.log(searchData);
      if (!searchData) {
        return rejectWithValue("No search results found");
      }
      return searchData;
    } catch (error) {
      console.error("error", error);
      return rejectWithValue("Failed to fetch search results");
    }
  }
);

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
