import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginFormInputs } from "../../types/Auth";
import { userAPI } from "../../api/API";

interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersData.pending, (state, action) => {
      console.log("Fetching users data...");
      state.status = "loading";
    });

    builder.addCase(
      fetchUsersData.fulfilled,
      (state, action: PayloadAction<{ fakeToken: string }>) => {
        localStorage.setItem("fakeToken", action.payload.fakeToken);
        state.token = action.payload.fakeToken;

        state.status = "success";
      }
    );
    builder.addCase(fetchUsersData.rejected, (state, action) => {
      console.error("Failed to fetch users data:", action.error.message);
      state.error = "нету у него токена ";
    });
  },
});

export const fetchUsersData = createAsyncThunk<
  { fakeToken: string },
  LoginFormInputs,
  { rejectValue: string }
>("auth/fetchUsersData", async (data, { rejectWithValue }) => {
  try {
    const fakeToken = await userAPI.authUser(data);

    console.log(fakeToken);
    return { fakeToken: fakeToken }; // обязательно оборачиваем в объект, чтобы payload был всегда структурированный
  } catch (error) {
    return rejectWithValue("An error occurred while fetching the token");
  }
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
