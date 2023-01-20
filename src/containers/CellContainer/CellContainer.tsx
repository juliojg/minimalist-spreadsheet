import { useContext } from "react";
import { Cell } from "../../components/Table/Cell/Cell";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { Sentence } from "../../types/spreadSheetTypes";

type CellContainerProps = {
  positionX: number;
  positionY: number;
};

export const CellContainer: React.FC<CellContainerProps> = ({
  positionX,
  positionY
}) => {
  const [state, dispatch] = useContext(SpreadSheetContext);

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

  const evalSentence = (sentence: Sentence) => {
    if (typeof sentence === "string") {
      return sentence;
    }

    if (sentence.operation === "SUM") {
      return sentence.refs.reduce(
        (acc, current) =>
          acc + Number(state.table[current.valueY][current.valueX]),
        0
      );
    }
    if (sentence.operation === "SUB") {
      return sentence.refs.reduce(
        (acc, current) =>
          acc - Number(state.table[current.valueY][current.valueX]),
        0
      );
    } else return "toEval";
  };

  return (
    <Cell
      positionX={positionX}
      positionY={positionY}
      onChange={handleOnChange}
      onClick={handleOnClick}
      currentValue={state.table[positionY][positionX]}
      evalSentence={evalSentence}
      focused={
        state.currentCell?.positionX === positionX &&
        state.currentCell?.positionY === positionY
      }
    />
  );
};
