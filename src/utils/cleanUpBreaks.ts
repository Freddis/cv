export const cleanUpBreaks = (str: string): string => {
  return str.split('\n').map((y) => y.trim()).join(' ');
};
