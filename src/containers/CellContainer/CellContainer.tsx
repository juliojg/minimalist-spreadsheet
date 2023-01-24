import { Cell } from "../../components/Table/Cell/Cell";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCellById,
  selectEvaluatedCell
} from "../../store/selectors";
import { setCurrentCell, updateCell } from "../../store/slices";
import { useState } from "react";

type CellContainerProps = {
  cellId: string;
};

export const CellContainer: React.FC<CellContainerProps> = ({ cellId }) => {
  const dispatch = useDispatch();

  const currentSentence = useSelector(selectCellById(cellId));
  const evaluatedCell = useSelector(selectEvaluatedCell(cellId));

  const [isEditMode, setIsEditMode] = useState(false);

  const toggleToInput = () => setIsEditMode(true);
  const toggleToSentence = () => setIsEditMode(false);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) =>
    dispatch(
      updateCell({
        cellId: cellId,
        inputValue: e.currentTarget.value.toUpperCase()
      })
    );

  const handleOnClick: React.MouseEventHandler<HTMLInputElement> = () =>
    dispatch(setCurrentCell(cellId));

  return (
    <Cell
      onChange={handleOnChange}
      onClick={handleOnClick}
      currentSentence={currentSentence}
      currentValue={evaluatedCell}
      isEditMode={isEditMode}
      toggleToInput={toggleToInput}
      toggleToSentence={toggleToSentence}
    />
  );
};
