import { useCallback } from "react";
import { Sentence } from "../types/spreadSheetTypes";
import { parseSentence } from "../utils/utils";
import { useGetTable } from "./useGetTable";

export const useGetEvalFn = () => {
  const table = useGetTable();

  const evalSentence: (sentence: Sentence) => string = useCallback((sentence: Sentence) => {
    if (typeof sentence === "string") {
      return sentence;
    }

    if (sentence.operation === "SUM") {
      return sentence.refs.reduce(
        (acc, current) =>
          acc + Number(evalSentence(parseSentence(table[current.positionY][current.positionX]))),
        0
      ).toString();
    }
    if (sentence.operation === "SUB") {
      return sentence.refs.reduce(
        (acc, current) =>
          acc - Number(evalSentence(parseSentence(table[current.positionY][current.positionX]))),
        0
      ).toString();
    } else return "toEval";
  }, [table]);

  return evalSentence;
}