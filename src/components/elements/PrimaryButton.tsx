import {FC, ReactNode} from "react";


export const PrimaryButton: FC<{children: ReactNode}> = ({children}) => {

return (
 <button className='border-accent hover:bg-accent transition-colors border-solid duration-500 border-2 rounded-xl px-4 py-1.5 cursor-pointer'>
    {children}
  </button>
)
}