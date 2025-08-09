import { FC } from "react";

export const PageHeader: FC<{ children?: string }> = ({ children }) => {
  return (
    <div className="z-1 relative overflow-visible mb-10">
      <div className="absolute z-0 top-[-8px] left-[-14px]  w-6 h-6 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50"></div>
      <h2 className="text-3xl font-semibold z-1 relative">{children}</h2>
    </div>
  );
};
