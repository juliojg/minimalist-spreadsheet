import { Sentence } from "../types/spreadSheetTypes";

export const genList = (n: number) => {
  const list = [];
  for (var i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

const parseLetter = (input: string, current: number) => {
  let result = "";
  while (current < input.length && /[A-Z]/.test(input[current])) {
    result += input[current++];
  }
  return { value: result, next: current };
};

const parseNumber = (input: string, current: number) => {
  let result = "";
  while (current < input.length && /[0-9]/.test(input[current])) {
    result += input[current++];
  }
  return { value: parseInt(result), next: current };
};

const parseCell = (input: string, current: number) => {
  let letter = parseLetter(input, current);
  let number = parseNumber(input, letter.next);
  let cell = { positionX: (letter.value.charCodeAt(0) - 65 + 1).toString(), positionY: number.value.toString() };
  current = number.next;
  return { value: cell, next: current };
};

const parseCells = (input: string, current: number) => {
  let currentIndex = current;
  let cells = [];
  if (input[currentIndex] !== "(") {
    return {
      operands: [],
      error: { hasError: true, errorMessage: "Expression must start with (" }
    };
  }
  currentIndex++;
  let res = parseCell(input, currentIndex);
  cells.push(res.value);
  currentIndex = res.next;
  while (input[currentIndex] === ",") {
    currentIndex++;
    res = parseCell(input, currentIndex);
    cells.push(res.value);
    currentIndex = res.next;
  }
  if (input[currentIndex] !== ")") {
    return {
      operands: [],
      error: { hasError: true, errorMessage: "Expression must end with )" }
    };
  }
  return { operands: cells, error: { hasError: false, errorMessage: null } };
};

export const parseSentence = (input: string): Sentence => {
  let current = 0;
  if (input === "" || input === undefined) {
    return {
      operator: "",
      operands: [],
      value: '0',
      error: { hasError: true, errorMessage: "" }
    };
  }
  if (input[current++] !== "=") {
    return {
      operator: "NUMBER",
      operands: [],
      value: input,
      error: { hasError: false, errorMessage: null }
    };
  }
  let operator = "";
  while (
    current < input.length &&
    /[A-Z]/.test(input[current])
    && operator.length <= 3
  ) {
    operator += input[current++];
  }
  if (!(operator === "SUM" || operator === "SUB")) {
    return {
      operator: "",
      operands: [],
      value: null,
      error: { hasError: true, errorMessage: "Operator must be SUM or SUB" }
    };
  }

  let operands = parseCells(input, current);

  if (operands.operands.length === 0) {
    return {
      operator: "",
      operands: [],
      value: null,
      error: { hasError: true, errorMessage: "Missing operands" }
    };
  }
  current++;
  return {
    operator,
    operands: operands.operands,
    value: null,
    error: { hasError: false, errorMessage: null }
  };
};
