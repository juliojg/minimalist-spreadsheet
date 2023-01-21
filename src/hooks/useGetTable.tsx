import { useContext, useMemo } from "react";
import { SpreadSheetContext } from "../context/SpreadSheetContext";

export const useGetTable = () => {
  const [state] = useContext(SpreadSheetContext);

  const table = useMemo(() => state.table, [state]);

  return table;
}