import {FC, HTMLAttributes} from 'react';
import {cn} from '../../utils/cn/cn';

export const Heading1: FC<HTMLAttributes<HTMLHeadingElement>> = ({children, className}) => {

  return <h1 className={cn('text-xl', className)}>{children}</h1>;
};
