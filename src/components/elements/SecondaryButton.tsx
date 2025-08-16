import {ButtonHTMLAttributes, FC} from 'react';
import {cn} from '../../utils/cn';

export const SecondaryButton:FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...rest}) => {

  return (
    <button
    {...rest}
    // eslint-disable-next-line max-len
    className={cn('border-white border-solid border-2 rounded-full px-6 py-2 cursor-pointer  hover:bg-white hover:text-black transition-colors  duration-500', className)}
    >
      {children}
    </button>
  );
};
