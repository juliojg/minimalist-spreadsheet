export type Operation = 'SUM' | 'SUB';

export type Value = string;

export type CellRef = {valueX: number, valueY: number}

export type Sentence = { operation: Operation, refs: CellRef[]} | Value
