export type Operation = 'SUM' | 'SUB';

export type Value = string;

export type CellRef = {positionX: number, positionY: number}

export type Sentence = { operation: Operation, refs: CellRef[]} | Value
