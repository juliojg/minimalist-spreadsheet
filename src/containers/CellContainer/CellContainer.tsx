import { useContext } from "react";
import { Cell } from "../../components/Table/Cell/Cell";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { useGetCurrentCell } from "../../hooks/useGetCurrentCell";
import { useEvalSentence } from "../../hooks/useEvalSentence";
import { useGetTable } from "../../hooks/useGetTable";

type CellContainerProps = {
  positionX: string;
  positionY: string;
  cellId: string;
};

export const CellContainer: React.FC<CellContainerProps> = ({
  positionX,
  positionY,
  cellId
}) => {
  const [, dispatch] = useContext(SpreadSheetContext);
  const evaluatedSentence = useEvalSentence(cellId);
  const [, byId] = useGetTable();
  const currentCell = useGetCurrentCell();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateCell",
      payload: {
        cellId: cellId,
        inputValue: e.currentTarget.value
      }
    });
  };

  const handleOnClick: React.MouseEventHandler<HTMLInputElement> = () => {
    dispatch({
      type: "setCurrentCell",
      payload: {
        cellId: cellId
      }
    });
  };

  return (
    <Cell
      onChange={handleOnChange}
      onClick={handleOnClick}
      currentSentence={byId[cellId]}
      currentValue={evaluatedSentence}
      focused={currentCell === cellId}
    />
  );
};
