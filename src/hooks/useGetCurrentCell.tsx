import { useContext, useMemo } from "react";
import { SpreadSheetContext } from "../context/SpreadSheetContext";

export const useGetCurrentCell = () => {
  const [state] = useContext(SpreadSheetContext);

  const currentCell: string = useMemo(
    () => state.currentCell,
    [
      state.currentCell,
    ]
  );

  return currentCell;
};
