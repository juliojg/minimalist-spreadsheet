export const genList = (n: number) => {
  const list = [];
  for (var i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

export function zip<T, U>(arr1: T[], arr2: U[]): Array<[T, U]> {
  const result: Array<[T, U]> = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}