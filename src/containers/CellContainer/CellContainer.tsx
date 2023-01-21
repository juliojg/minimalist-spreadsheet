import { useContext } from "react";
import { Cell } from "../../components/Table/Cell/Cell";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { useGetCurrentCell } from "../../hooks/useGetCurrentCell";
import { useEvalSentence } from "../../hooks/useEvalSentence";
import { useGetTable } from "../../hooks/useGetTable";

type CellContainerProps = {
  positionX: string;
  positionY: string;
};

export const CellContainer: React.FC<CellContainerProps> = ({
  positionX,
  positionY
}) => {
  const [, dispatch] = useContext(SpreadSheetContext);
  const evaluatedSentence = useEvalSentence(positionY, positionX);
  const table = useGetTable();
  const currentCell = useGetCurrentCell();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateCell",
      payload: {
        positionX: positionX,
        positionY: positionY,
        inputValue: e.currentTarget.value
      }
    });
  };

  const handleOnClick: React.MouseEventHandler<HTMLInputElement> = () => {
    dispatch({
      type: "setCurrentCell",
      payload: {
        currentCell: { positionX: positionX, positionY: positionY }
      }
    });
  };

  return (
    <Cell
      onChange={handleOnChange}
      onClick={handleOnClick}
      currentSentence={table[positionY][positionX]}
      currentValue={evaluatedSentence}
      focused={
        currentCell?.positionX === positionX &&
        currentCell?.positionY === positionY
      }
    />
  );
};
