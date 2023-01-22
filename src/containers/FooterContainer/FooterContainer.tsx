import { Footer } from "../../components/Footer/Footer";
import { useEvalCell } from "../../hooks/useEvalCell";
import { useGetCurrentCell } from "../../hooks/useGetCurrentCell";
import { useGetTable } from "../../hooks/useGetTable";

export const FooterContainer: React.FC = () => {
  const currentCell = useGetCurrentCell();
  const [, byId] = useGetTable();
  const evaluatedCell = useEvalCell(currentCell);

  return (
    <Footer
      currentCell={currentCell}
      currentCellSentence={byId[currentCell]}
      currentCellValue={evaluatedCell.toString()}
    />
  );
};
