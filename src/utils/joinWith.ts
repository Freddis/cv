import {createElement, ReactNode} from 'react';

export const joinWith = <T extends ReactNode>(arr: T[], sep: T): ReactNode[] => {
  return arr.flatMap((item, i) => i < arr.length - 1 ? [item, createElement('fragment', {key: Math.random()}, sep)] : [item]);
};
