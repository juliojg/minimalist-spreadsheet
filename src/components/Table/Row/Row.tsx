import { CellContainer } from "../../../containers/CellContainer/CellContainer";
import { genList } from "../../../utils/utils";
import { HeaderCell } from "../Cell/HeaderCell";
import "./Row.css";

type RowProps = { maxColumns: number; positionY: string };

export const Row: React.FC<RowProps> = ({ maxColumns, positionY }) => {
  return (
    <div className="row-container">
      {positionY === "0"
        ? genList(maxColumns).map((_, index) => (
            <HeaderCell
              key={index}
              index={String.fromCharCode(65 + index - 1)}
            />
          ))
        : genList(maxColumns).map((_, index) =>
            index === 0 ? (
              <HeaderCell key={index} index={positionY} />
            ) : (
              <CellContainer
                key={index}
                cellId={String.fromCharCode(65 + index - 1) + positionY}
                positionX={index.toString()}
                positionY={positionY}
              />
            )
          )}
    </div>
  );
};
