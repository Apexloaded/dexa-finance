import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export interface ModalTypes {
  withdrawModal: boolean;
  depositModal: boolean;
}

const initialState = {
  withdrawModal: false,
  depositModal: false,
} as ModalTypes;

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setDepositModal: (state, action: PayloadAction<boolean>) => {
      state.depositModal = action.payload;
    },
    setWithdrawModal: (state, action: PayloadAction<boolean>) => {
      state.withdrawModal = action.payload;
    },
  },
});

export const { setDepositModal, setWithdrawModal } = modalSlice.actions;

export const selectDepositModal = (state: RootState) => state["modals"].depositModal;
export const selectWithdrawModal = (state: RootState) => state["modals"].withdrawModal;

export default modalSlice.reducer;
