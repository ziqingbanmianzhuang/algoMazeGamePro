import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./app.slice";

export const store = configureStore({
  reducer: {
    app: persistReducer<ReturnType<typeof appReducer>>(
      {
        key: "app",
        storage,
      },
      appReducer
    ),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
