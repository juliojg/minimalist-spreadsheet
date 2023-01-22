import { useContext, useMemo } from "react";
import { SpreadSheetContext } from "../context/SpreadSheetContext";

export const useGetTable = () => {
  const [state] = useContext(SpreadSheetContext);
  const allIds = useMemo(() => state.allIds, [state]);
  const byId = useMemo(() => state.byId, [state]);

  return [allIds, byId];
}