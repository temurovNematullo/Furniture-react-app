import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import { userReviewsReducer } from "./slices/reviewsSlice";
import userAuthReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: userReviewsReducer,
    userAuthData: userAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
