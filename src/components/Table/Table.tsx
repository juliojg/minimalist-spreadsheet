import { genList } from "../../utils/utils";
import { Row } from "./Row/Row";
import "./Table.css";

type TableProps = {
  maxRows: number,
  maxColumns: number,
};

export const Table: React.FC<TableProps> = ({ maxRows, maxColumns }) => {
  
  return (
    <div className={"table-container"}>
      <div className={"content-container"}>
        {genList(maxRows).map((_, index) => (
          <Row key={index} maxColumns={maxColumns} positionY={index.toString()} />
        ))}
      </div>
    </div>
  );
};
