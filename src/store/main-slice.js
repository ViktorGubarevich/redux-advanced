import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: false,
  statusMessage: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showStatusMessage(state, action) {
      state.statusMessage = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default mainSlice.reducer;
export const mainActions = mainSlice.actions;
