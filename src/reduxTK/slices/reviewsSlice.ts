import { RootState } from "./../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reviews } from "../../types/Reviews";
import { userAPI } from "../../api/API";

interface ReviewsState {
  reviews: Reviews[];
  status: "idle" | "loading" | "succeeded" | "error";
  limit: number;
  page: number;
  error: string;
}

const initialState: ReviewsState = {
  reviews: [],
  status: "idle",
  error: "",
  limit: 2,
  page: 1,
};

export const userReviewsSlice = createSlice({
  name: "userReviews",
  initialState,
  reducers: {
    setUserReviews(state, action: PayloadAction<Reviews[]>) {
      state.reviews = action.payload;
    },
    updatePage(state, action: PayloadAction<"increment" | "decrement">) {
      if (action.payload === "increment") {
        if (state.limit === state.reviews.length) {
          state.page += 1;
        }
      } else if (action.payload === "decrement") {
        if (state.page > 1) {
          state.page -= 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserReviews.fulfilled,
        (state, action: PayloadAction<Reviews[]>) => {
          state.status = "succeeded";
          state.reviews = action.payload;
        }
      )
      .addCase(fetchUserReviews.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as string;
      });
  },
});

export const fetchUserReviews = createAsyncThunk<
  Reviews[],
  void,
  { rejectValue: string; state: RootState }
>("userReviews/fetchUserReviews", async (_, { rejectWithValue, getState }) => {
  try {
    const { limit, page } = getState().reviews;
    const response = await userAPI.getUserReviews(limit, page);
    return response; // передаём результат в extraReducers
  } catch (error) {
    return rejectWithValue("Failed to fetch user reviews");
  }
});

export const { setUserReviews, updatePage } = userReviewsSlice.actions;
export const userReviewsReducer = userReviewsSlice.reducer;
