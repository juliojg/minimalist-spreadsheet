import { useContext, useMemo } from "react";
import { SpreadSheetContext } from "../context/SpreadSheetContext";
import { CellRef } from "../types/spreadSheetTypes";

export const useGetCurrentCell = () => {
  const [state] = useContext(SpreadSheetContext);

  const currentCell: CellRef = useMemo(
    () => state.currentCell,
    [
      state.currentCell,
    ]
  );

  return currentCell;
};
