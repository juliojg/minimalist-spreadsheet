import { Row } from "./Row/Row";
import "./Table.css";

type TableProps = {
  content: string[][];
};

export const Table: React.FC<TableProps> = ({ content }) => {
  return (
    <div className={"table-container"}>
      <div className={"content-container"}>
        {content.map((row, index) => (
          <Row key={index} content={row} positionY={index.toString()} />
        ))}
      </div>
    </div>
  );
};
