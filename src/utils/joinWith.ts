export const joinWith = <T>(arr: T[], sep: T): T[] => {
  return arr.flatMap((item, i) => i < arr.length - 1 ? [item, sep] : [item]);
};
