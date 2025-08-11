import {ButtonHTMLAttributes, FC} from "react";


export const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children,className,...rest}) => {

return (
 <button {...rest} className='text-white border-accent hover:bg-accent transition-colors border-solid duration-500 border-2 rounded-xl px-4 py-1.5 cursor-pointer'>
    {children}
  </button>
)
}