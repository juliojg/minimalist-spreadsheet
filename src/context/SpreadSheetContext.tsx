import React from "react";

export type SpreadSheetStateType = {
  number: number;
};

type Props = {
  children: JSX.Element;
};

export const SpreadSheetContext = React.createContext(1);

export const SpreadSheetContextProvider: React.FC<Props> = (props) => {
  const spreadSheetState = 1;

  return (
    <SpreadSheetContext.Provider value={spreadSheetState}>
      {props.children}
    </SpreadSheetContext.Provider>
  );
};
