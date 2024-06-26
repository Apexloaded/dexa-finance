import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

type Connector = {
  id?: string;
  isConnected: boolean;
  wallet?: string;
  chainId?: number;
};

export interface AuthState {
  value: boolean;
  isConnected: boolean;
  connector: Connector;
}

const initialState = {
  value: false,
  isConnected: false,
  connector: { isConnected: false },
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setConnector: (state, action: PayloadAction<Connector>) => {
      state.connector = action.payload;
    },
  },
});

export const { setAuth, setIsConnected, setConnector } = authSlice.actions;

export const selectAuth = (state: RootState) => state["auth"].value;
export const selectIsConnected = (state: RootState) =>
  state["auth"].isConnected;
export const selectConnector = (state: RootState) => state["auth"].connector;

export default authSlice.reducer;
