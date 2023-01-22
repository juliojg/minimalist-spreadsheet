import { useCallback, useContext } from "react";
import { Cell } from "../../components/Table/Cell/Cell";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { useGetCurrentCell } from "../../hooks/useGetCurrentCell";
import { useGetTable } from "../../hooks/useGetTable";
import { useEvalCell } from "../../hooks/useEvalCell";

type CellContainerProps = {
  cellId: string;
};

export const CellContainer: React.FC<CellContainerProps> = ({
  cellId
}) => {
  const [, dispatch] = useContext(SpreadSheetContext);
  const evaluatedCell = useEvalCell(cellId);

  const [, byId] = useGetTable();
  const currentCell = useGetCurrentCell();

  const currentSentence = byId[cellId];

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateCell",
      payload: {
        cellId: cellId,
        inputValue: e.currentTarget.value
      }
    });
  };

  const handleOnClick: React.MouseEventHandler<HTMLInputElement> = useCallback(() => {
    dispatch({
      type: "setCurrentCell",
      payload: {
        cellId: cellId
      }
    });
  }, [cellId, dispatch]);

  return (
    <Cell
      onChange={handleOnChange}
      onClick={handleOnClick}
      currentSentence={currentSentence}
      currentValue={evaluatedCell}
      focused={currentCell === cellId}
    />
  );
};
