export type Value = string;

export type CellRef = { positionX: string; positionY: string };

export type Sentence = {
  operator: string;
  operands: CellRef[];
  value: string | null;
  error: { hasError: boolean; errorMessage: string | null };
};
