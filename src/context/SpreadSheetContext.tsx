import React, { useReducer } from "react";
import { CellRef } from "../types/spreadSheetTypes";

export type SpreadSheetStateType = {
  maxRows: number;
  maxColumns: number;
  table: string[][];
  currentCell: CellRef | null;
};

type Props = {
  children: JSX.Element;
};

export const SpreadSheetContext = React.createContext([] as any);

export const SpreadSheetContextProvider: React.FC<Props> = (props) => {
  const initialState: SpreadSheetStateType = {
    maxRows: 6,
    maxColumns: 6,
    table: [],
    currentCell: null
  };
  function reducer(
    state: SpreadSheetStateType,
    action: { type: string; payload?: any }
  ) {
    switch (action.type) {
      case "initializeTable":
        return {
          ...state,
          table: [...Array(action.payload.maxRows)].map(() =>
            [...Array(action.payload.maxColumns)].map(() => "")
          )
        };
      case "updateCell":
        let updatedTable = [...state.table];
        updatedTable[action.payload.positionY][action.payload.positionX] =
          action.payload.inputValue;
        return {
          ...state,
          table: updatedTable
        };
      case "setCurrentCell":
        return {
          ...state,
          currentCell: action.payload.currentCell
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SpreadSheetContext.Provider value={[state, dispatch]}>
      {props.children}
    </SpreadSheetContext.Provider>
  );
};
