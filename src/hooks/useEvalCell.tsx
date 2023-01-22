import { evaluate } from "mathjs";
import { useEvalSentence } from "./useEvalSentence";
import { useGetTable } from "./useGetTable";

export const useEvalCell = (cellId: string) => {
  const [, byId] = useGetTable();
  const evalSentence = useEvalSentence();

  const value = byId[cellId];
  if (!value) {
    return '0'
  }

  if (value.startsWith("=")) {
    try {
      const evalutedExpression = evalSentence(value, byId);
      if (evalutedExpression.includes("!ERROR")) {
        console.log(value);
        return "!ERROR";
      }
      return evaluate(evalutedExpression.replace('=', ''));
    } catch {
      return value;
    }
  }

  return value;
};
