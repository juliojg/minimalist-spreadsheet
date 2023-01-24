import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { evaluate } from "mathjs";

export const selectTableConfig = (state: RootState) => ({
  maxRows: state.spreadSheet.maxRows,
  maxColumns: state.spreadSheet.maxColumns
});

export const selectCellById = (cellId: string | null) => (state: RootState) =>
  !cellId ? "-" : state.spreadSheet.byId[cellId];
export const selectCurrentCell = (state: RootState) =>
  state.spreadSheet.currentCell;
export const selectCurrentCellValue = (state: RootState) =>
  state.spreadSheet.currentCell
    ? state.spreadSheet.byId[state.spreadSheet.currentCell]
    : "-";
export const selectTable = (state: RootState) => state.spreadSheet.byId;

export const selectEvaluatedCell = (cellId: string) =>
  createSelector(selectTable, (byId) => {
    const evalSentence = (
      sentence: string,
      byId: { [cellId: string]: string }
    ) => {
      const evalFn = (
        expression: string,
        notAllowedCellsIds: string[] = []
      ) => {
        const filterFoundCells = notAllowedCellsIds.filter((cellId) =>
          expression.includes(cellId)
        );

        if (filterFoundCells.length) {
          return "!ERROR: Depends from own/recursive cell";
        }

        const cellValues = [
          ...Array.from(expression?.matchAll(/[A-Z]+[0-9]+/gi) ?? [])
        ]
          .map((regrexOutput: any) => regrexOutput[0])
          .map((cellId: string) => {
            let value = "";

            try {
              value = byId[cellId] || "0";

              if (value.startsWith("=")) {
                notAllowedCellsIds.push(cellId);
                value = evalFn(value.slice(1), notAllowedCellsIds);
              }
            } catch {}

            return {
              cellId,
              value
            };
          });

        const evaluatedExpression = cellValues.reduce(
          (finalExpression, cellValue) =>
            finalExpression.replaceAll(cellValue.cellId, cellValue.value),
          expression
        );

        return `(${evaluatedExpression})`;
      };

      return evalFn(sentence);
    };

    const value = byId[cellId];
    if (!value) {
      return "";
    }

    if (value.startsWith("=")) {
      try {
        const evalutedExpression = evalSentence(value, byId);
        if (
          evalutedExpression.includes("ERROR: Depends from own/recursive cell")
        ) {
          return "!ERROR: Redundant cell";
        }
        return evaluate(evalutedExpression.replace("=", ""));
      } catch {
        return value;
      }
    } else if (!/^[0-9]*$/.test(value)) {
      return "!ERROR: Cell must start with = or be a number";
    }

    return value;
  });
