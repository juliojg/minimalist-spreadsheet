import "./Cell.css";

type CellProps = {
  header?: boolean;
  currentSentence: string;
  currentValue: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  isEditMode: boolean;
  toggleToInput: any;
  toggleToSentence: any;
};

export const Cell: React.FC<CellProps> = ({
  onChange,
  onClick,
  currentSentence,
  currentValue,
  isEditMode,
  toggleToInput,
  toggleToSentence
}) => {
  return isEditMode ? (
    <input
      className="cell-container-focused"
      type="text"
      value={currentSentence}
      onChange={onChange}
      onBlur={toggleToSentence}
    />
  ) : (
    <input
      type="text"
      readOnly
      value={
        currentValue.toString().includes("!ERROR") ? "ERROR " : currentValue
      }
      onChange={onChange}
      className={
        currentValue.toString().includes("!ERROR")
          ? "cell-container-error"
          : "cell-container"
      }
      onClick={(e) => {
        onClick(e);
        toggleToInput();
      }}
    ></input>
  );
};
