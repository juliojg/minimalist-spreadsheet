import { Footer } from "../../components/Footer/Footer";
import {
  selectCellById,
  selectCurrentCell,
  selectEvaluatedCell
} from "../../store/selectors";
import { useSelector } from "react-redux";

export const FooterContainer: React.FC = () => {
  const currentCell = useSelector(selectCurrentCell);
  const currentCellValue = useSelector(selectCellById(currentCell));

  const evaluatedCell = useSelector(selectEvaluatedCell(currentCell ?? ""));

  return (
    <Footer
      currentCell={currentCell ?? "-"}
      currentCellSentence={currentCellValue}
      currentCellValue={evaluatedCell.toString()}
    />
  );
};
