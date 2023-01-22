import "./Cell.css";

type CellProps = {
  header?: boolean;
  currentSentence: string;
  currentValue: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  focused: boolean;
};

export const Cell: React.FC<CellProps> = ({
  onChange,
  onClick,
  focused,
  currentSentence,
  currentValue
}) => {

  return focused ? (
    <input
      className="cell-container-focused"
      type="text"
      value={currentSentence}
      onChange={onChange}
    />
  ) : (
    <input
      type="text"
      readOnly
      value={currentValue}
      onChange={onChange}
      className={currentValue.toString().includes("!ERROR") ? "cell-container-error" : "cell-container"}
      onClick={onClick}
    ></input>
  );
};
