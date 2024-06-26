import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export type TabType = "tab1" | "tab2" | "tab3" | "tab4";

export interface SavingsTabsState {
  value: TabType;
}

const initialState = {
  value: "tab1",
} as SavingsTabsState;

export const savingsTabSlice = createSlice({
  name: "savings-tabs",
  initialState,
  reducers: {
    setSavingsTabs: (state, action: PayloadAction<TabType>) => {
      state.value = action.payload;
    },
  },
});

export const { setSavingsTabs } = savingsTabSlice.actions;

export const selectSavingsTabs = (state: RootState) => state["savings-tabs"].value;

export default savingsTabSlice.reducer;
