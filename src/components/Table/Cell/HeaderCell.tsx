import "./Cell.css";

type HeaderCellProps = {
  index: number | string;
};

export const HeaderCell: React.FC<HeaderCellProps> = ({ index }) => {
  return (
    <input className={/^\d+$/.test(index.toString()) || /@/.test(index.toString()) ? "header-left-cell-container" : "header-cell-container"} value={index} readOnly></input>
  );
};
