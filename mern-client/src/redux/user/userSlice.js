import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUSer: null,
  error: null,
  loading: false,
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      (state.loading = true), (state.error = null);
    },
    signInSuccess: (state, action) => {
      (state.currentUSer = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    signInFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlicer.actions;
export default userSlicer.reducer;
