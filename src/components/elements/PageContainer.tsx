import { FC, ReactNode } from "react";

export const PageContainer: FC<{ children?: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <div className="flex flex-col w-full justify-start items-start bg-main text-on-main px-20 py-20">
      {children}
    </div>
  )
};
