export const enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface UserInfo {
  name: string;
  pwd: string;
}

export interface AppState {
  theme: null | Theme;
  userInfo: null | UserInfo;
}
