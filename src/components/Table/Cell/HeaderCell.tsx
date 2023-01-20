import "./Cell.css";

type HeaderCellProps = {
  index: number | string;
};

export const HeaderCell: React.FC<HeaderCellProps> = ({ index }) => {
  return (
    <input className="header-cell-container" value={index} readOnly></input>
  );
};
