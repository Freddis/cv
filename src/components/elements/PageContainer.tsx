import {FC, ReactNode} from 'react';

export const PageContainer: FC<{ children?: ReactNode | ReactNode[] }> = ({children}) => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-start items-start bg-main text-on-main p-5 sm:p-10 md:p-20">
      {children}
    </div>
  );
};
