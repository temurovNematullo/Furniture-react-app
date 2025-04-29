import { RootState } from "./../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reviews } from "../../types/Reviews";
import { userAPI } from "../../api/API";
import { ApiThunkConfig } from "../../types/ThunkType";

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
          state.reviews = action.payload; // ✅ TS уже знает, что это Reviews[] но на всякий случай указал еще раз обычно так ненадо наверное )
        }
      )
      .addCase(fetchUserReviews.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload ?? "Unknown error";
      });
  },
});

type FetchUserReviewsThunk = ApiThunkConfig<Reviews[]>; ///fix Для общего типа 'ApiThunkConfig' требуется от 1 до 3 аргументов типа.

export const fetchUserReviews = createAsyncThunk<
  FetchUserReviewsThunk["fulfilled"],
  FetchUserReviewsThunk["arg"],
  {
    rejectValue: FetchUserReviewsThunk["rejected"];
    state: FetchUserReviewsThunk["state"];
  }
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
