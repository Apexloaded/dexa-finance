import { configureStore } from "@reduxjs/toolkit";
import switchChainReducer from "./slices/account/switch-chain.slice";
import authReducer from "./slices/account/auth.slice";
import hideBalanceReducer from "./slices/account/hide-balance.slice";
import sidebarReducer from "./slices/sidebar/sidebar.slice";
import savingsTabsReducer from "./slices/savings/active-tab.slice";

export const store = configureStore({
  reducer: {
    "switch-chain": switchChainReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
    "hide-balance": hideBalanceReducer,
    "savings-tabs": savingsTabsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
