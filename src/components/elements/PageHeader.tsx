import {FC} from 'react';

export const PageHeader: FC<{ children?: string }> = ({children}) => {
  return (
    <div className="z-1 relative overflow-visible mb-10">
      <div className="absolute z-0 top-[-4px] left-[-8px] ">
        <div className=" w-6 h-6 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50"></div>
      </div>
      <h2 className="text-3xl font-semibold z-1 relative">{children}</h2>
    </div>
  );
};
