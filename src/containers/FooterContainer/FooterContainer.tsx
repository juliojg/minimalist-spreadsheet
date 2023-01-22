import { Footer } from "../../components/Footer/Footer";
import { useGetCurrentCell } from "../../hooks/useGetCurrentCell"
import { useGetTable } from "../../hooks/useGetTable";

export const FooterContainer : React.FC = () => {

  const currentCell = useGetCurrentCell();
  const [, byId] = useGetTable();

  return(
    <Footer currentCell={currentCell} currentCellSentence={byId[currentCell]} />
  )
} 