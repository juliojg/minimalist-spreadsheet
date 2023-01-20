import { useContext } from "react";
import { Table } from "../../components/Table/Table";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";

export const TableContainer = () => {
  const [state] = useContext(SpreadSheetContext);

  return <Table content={state.table} />;
};
