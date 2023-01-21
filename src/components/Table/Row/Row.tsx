import { CellContainer } from "../../../containers/CellContainer/CellContainer";
import { HeaderCell } from "../Cell/HeaderCell";
import "./Row.css";

type RowProps = { content: string[]; positionY: string };

export const Row: React.FC<RowProps> = ({ content, positionY }) => {
  return (
    <div className="row-container">
      {positionY === '0'
        ? content.map((y, index) => (
            <HeaderCell
              key={index}
              index={String.fromCharCode(65 + index - 1)}
            />
          ))
        : content.map((col, index) =>
            index === 0 ? (
              <HeaderCell key={index} index={positionY} />
            ) : (
              <CellContainer
                key={index}
                positionX={index.toString()}
                positionY={positionY}
              />
            )
          )}
    </div>
  );
};
