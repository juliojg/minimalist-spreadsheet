import React, { useReducer } from "react";
import { genList, zip } from "../utils/utils";

export type SpreadSheetStateType = {
  maxRows: number;
  maxColumns: number;
  byId: { [cellId: string]: string };
  allIds: string[];
  currentCell: string | null;
};

type Props = {
  children: JSX.Element;
};

export const SpreadSheetContext = React.createContext([] as any);

export const SpreadSheetContextProvider: React.FC<Props> = (props) => {
  const initialState: SpreadSheetStateType = {
    maxRows: 25,
    maxColumns: 10,
    byId: {},
    allIds: [],
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
          byId: zip(
            genList(action.payload.maxColumns).map(x => String.fromCharCode(65 + x - 1)),
            genList(action.payload.maxRows)
          ).reduce(
            (acc, current) => ({
              ...acc,
              [current[0].toString() + current[1].toString()]: ""
            }),
            {}
          ),
          allIds: zip(
            genList(action.payload.maxColumns).map(x => String.fromCharCode(65 + x - 1)),
            genList(action.payload.maxRows)
          ).map(x => x[0].toString() + x[1].toString())
        };
      case "updateCell":
        return {
          ...state,
          byId: {
            ...state.byId,
            [action.payload.cellId]: action.payload.inputValue
          }
        };
      case "setCurrentCell":
        return {
          ...state,
          currentCell: action.payload.cellId
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
