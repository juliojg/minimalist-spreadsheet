import { Table } from "../../components/Table/Table";
import { selectTableConfig } from "../../store/selectors";
import { useSelector } from "react-redux";

export const TableContainer = () => {
  
  const tableConfig = useSelector(selectTableConfig);

  return <Table maxRows={tableConfig.maxRows} maxColumns={tableConfig.maxColumns} />;
};
