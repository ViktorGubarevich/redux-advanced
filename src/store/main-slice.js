import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCartVisible: false };

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export default mainSlice.reducer;
export const mainActions = mainSlice.actions;
