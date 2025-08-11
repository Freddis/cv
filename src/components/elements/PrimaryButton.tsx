import {ButtonHTMLAttributes, FC} from 'react';


export const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...rest}) => {

  return (
 <button {...rest} className="text-white border-accent hover:bg-accent transition-colors border-solid duration-500 border-2 rounded-full px-5 py-2 cursor-pointer">
    {children}
  </button>
  );
};
