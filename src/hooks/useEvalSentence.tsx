import { Sentence } from "../types/spreadSheetTypes";
import { parseSentence } from "../utils/parser";
import { useGetTable } from "./useGetTable";

export const useEvalSentence = (positionY: string, positionX: string) => {
  const table = useGetTable();

  const inputSentence = table[positionY][positionX];
  const parsedSentence = parseSentence(inputSentence);

  const evalSentence: (sentence: Sentence) => string = (sentence: Sentence) => {

    if (sentence === undefined) {
      return '2';
    }
    if (sentence.error.hasError) {
      return sentence.error.errorMessage!;
    }
    if (sentence.operator === "NUMBER") {
      if (sentence.value) {
        return sentence.value;
      }
    }
    if (sentence.operator === "SUM") {
      return sentence.operands.reduce(
        (acc, current) => {
          return acc + Number(evalSentence(parseSentence(table[current.positionY][current.positionX])))
        },
        0
      ).toString();
    }
    if (sentence.operator === "SUB") {
      return sentence.operands.reduce(
        (acc, current) =>
          acc - Number(evalSentence(parseSentence(table[current.positionY][current.positionX]))),
        0
      ).toString();
    } else return "toEval";
  }

  return evalSentence(parsedSentence);
}