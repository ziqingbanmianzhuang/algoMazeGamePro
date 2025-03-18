import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import {
  AppState,
  Theme,
  UserInfo,
  GameNumber,
  Scene,
  Player,
  Algo,
} from "../Types/interfaces";

const initialState: AppState = {
  userInfo: null,
  theme: null,
  gameNumber: null,
  scene: null,
  player: null,
  algo: null,
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
    setGameNumber: (state, action: PayloadAction<GameNumber>) => {
      state.gameNumber = action.payload;
    },
    setScene: (state, action: PayloadAction<Scene>) => {
      state.scene = action.payload;
    },
    setPlayer: (state, action: PayloadAction<Player>) => {
      state.player = action.payload;
    },
    setAlgo: (state, action: PayloadAction<Algo>) => {
      state.algo = action.payload;
    },
  },
});

export const {
  setUserInfo,
  setTheme,
  setGameNumber,
  setScene,
  setPlayer,
  setAlgo,
} = appSlice.actions;
export default appSlice.reducer;
