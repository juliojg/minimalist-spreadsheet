import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SpreadSheetStateType = {
  maxRows: number;
  maxColumns: number;
  byId: { [cellId: string]: string };
  currentCell: string | null;
};

const initialState: SpreadSheetStateType = {
  maxRows: 90,
  maxColumns: 90,
  byId: {},
  currentCell: null
};

export const spreadSheetSlice = createSlice({
  name: "spreadSheet",
  initialState,
  reducers: {
    updateCell: (
      state,
      action: PayloadAction<{ cellId: string; inputValue: string }>
    ) => {
      state.byId = {
        ...state.byId,
        [action.payload.cellId]: action.payload.inputValue
      };
    },
    setCurrentCell: (state, action: PayloadAction<string>) => {
      state.currentCell = action.payload;
    }
  }
});

export const { updateCell, setCurrentCell } = spreadSheetSlice.actions;

export default spreadSheetSlice.reducer;
