import { useContext, useMemo } from "react";
import { Table } from "../../components/Table/Table";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";

export const TableContainer = () => {
  
  const [state] = useContext(SpreadSheetContext);
  const [maxRows, maxColumns] = useMemo(() => {
    return [state.maxRows, state.maxColumns];
  }, [state.maxRows, state.maxColumns]);

  return <Table maxRows={maxRows} maxColumns={maxColumns} />;
};
