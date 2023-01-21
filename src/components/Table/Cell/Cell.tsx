import { parseSentence } from "../../../utils/utils";
import "./Cell.css";

type CellProps = {
  header?: boolean;
  positionX: string;
  positionY: string;
  currentValue: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  focused: boolean;
  evalSentence: any;
};

export const Cell: React.FC<CellProps> = ({
  onChange,
  onClick,
  focused,
  currentValue,
  evalSentence
}) => {

  const a = parseSentence(currentValue);
  const b = evalSentence(a);
  
  return focused ? (
    <input
      className="cell-container-focused"
      type="text"
      value={currentValue}
      onChange={onChange}
    />
  ) : (
    <input
      type="text"
      readOnly
      value={b}
      onChange={onChange}
      className="cell-container"
      onClick={onClick}
    ></input>
  );
};
