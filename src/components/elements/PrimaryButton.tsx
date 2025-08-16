import {ButtonHTMLAttributes, FC} from 'react';
import {cn} from '../../utils/cn';


export const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...rest}) => {

  return (
  <button
  {...rest}

  className={
    cn(
      'text-white border-accent hover:bg-accent transition-colors border-solid duration-500 border-2 rounded-full px-5 py-2 cursor-pointer',
      rest.disabled ? 'cursor-not-allowed opacity-50 hover:bg-transparent' : '',
      className,
      )}>
    {children}
  </button>
  );
};
