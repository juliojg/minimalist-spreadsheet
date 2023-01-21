import { useCallback } from "react";
import { Sentence } from "../types/spreadSheetTypes";
import { parseSentence } from "../utils/utils";
import { useGetTable } from "./useGetTable";

export const useGetEvalFn = () => {
  const table = useGetTable();

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
        (acc, current) =>{ 
      console.log(table[current.positionY][current.positionX]);
          
          return acc + Number(evalSentence(parseSentence(table[current.positionY][current.positionX])))},
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

  return evalSentence;
}