import {FC, ReactNode} from "react";


export const SecondaryButton: FC<{children: ReactNode}> = ({children}) => {

return (
  <button className='border-white border-solid border-2 rounded-full px-6 py-2'>
    {children}
  </button> 
)
}