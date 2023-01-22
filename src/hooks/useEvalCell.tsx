import { evaluate } from "mathjs";
import { evalSentence } from "../utils/utils";
import { useGetTable } from "./useGetTable";

export const useEvalCell = (cellId: string) => {
  const [, byId] = useGetTable();
  
  const value = byId[cellId];
  if (!value) {
    return ''
  }

  if (value.startsWith("=")) {
    try {
      const evalutedExpression = evalSentence(value, byId);
      if (evalutedExpression.includes("ERROR: Depends from own/recursive cell")) {
        return '!ERROR: Redundant cell';
      }
      return evaluate(evalutedExpression.replace('=', ''));
    } catch {
      return value;
    }
  }

  return value;
};
