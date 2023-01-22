
export const useEvalSentence = () => (sentence: string, byId: {[cellId: string]: string}) => {

  const evalSentence = (expression: string, notAllowedCellsIds: string[] = []
  ) => {
    
    const filterFoundCells = notAllowedCellsIds.filter((cellId) =>
    expression.includes(cellId)
    );
    
    if (filterFoundCells.length) {
      return "!ERROR";
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
            value = evalSentence(value.slice(1), notAllowedCellsIds);
          }
        } catch { }
        
        return {
          cellId,
          value
        };
      });
      
      const evaluatedExpression = cellValues.reduce(
        (finalExpression, cellValue) =>
        finalExpression.replaceAll(
          cellValue.cellId,
          cellValue.value
          ),
          expression
          );
          
    return `(${evaluatedExpression})`;
  };

  return evalSentence(sentence);
};
