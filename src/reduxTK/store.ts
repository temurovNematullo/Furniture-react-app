import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import { userReviewsReducer } from "./slices/reviewsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: userReviewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
