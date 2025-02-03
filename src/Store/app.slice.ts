import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { AppState, Theme, UserInfo } from "../Types/interfaces";

const initialState: AppState = {
  userInfo: null,
  theme: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      document.documentElement.setAttribute("data-theme", action.payload);
    },
  },
});

export const { setUserInfo, setTheme } = appSlice.actions;
export default appSlice.reducer;
