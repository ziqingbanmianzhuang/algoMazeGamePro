import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "../Types/interfaces";

const initialState: AppState = {
  isLogin: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = appSlice.actions;
export default appSlice.reducer;
