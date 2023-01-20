import { Sentence, CellRef } from "../types/spreadSheetTypes";

export const genList = (n: number) => {
  const list = [];
  for (var i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
}

export const parseCell = (cell: string) => {
  const positionX = cell[0];
  const positionY = cell.slice(1, cell.length);
  const res: CellRef = { valueX: positionX.charCodeAt(0) - 65 + 1, valueY: Number(positionY) };
  console.log('CELL', res)
  return res;
}

export const parseSentence = (command: string) => {
  let res: string = command;
  if (command.match('=SUM\\(')) {
    res = res.replace(" ", "").replace("=SUM", '').replace("(", '').replace(")", '');
    let cells = res.split(',')
    const sentence: Sentence = { operation: 'SUM', refs: cells.map(cell => parseCell(cell)) }
    return sentence;
  } else if (command.match('=SUB\\(')) {
    res = res.replace(" ", "").replace("=SUB", '').replace("(", '').replace(")", '');
    let cells = res.split(',')
    const sentence: Sentence = { operation: 'SUB', refs: cells.map(cell => parseCell(cell)) }
    return sentence;
  } else {
    return command;
  }
}
