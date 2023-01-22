export const genList = (n: number) => {
  const list = [];
  for (var i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

export function zip<T, U>(arr1: T[], arr2: U[]): Array<[T, U]> {
  const result: Array<[T, U]> = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

export const evalSentence = (
  sentence: string,
  byId: { [cellId: string]: string }
) => {
  const evalFn = (expression: string, notAllowedCellsIds: string[] = []) => {
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
