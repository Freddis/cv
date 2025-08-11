import {FC} from 'react';
import {cn} from '../../../../utils/cn/cn';

type Color = 'red' | 'green' | 'blue' | 'orange';
export const Percentage: FC<{title: string, value: number, color?: Color}> = ({title, value, color}) => {

  const palette = color ?? 'blue';
  const colors: Record<Color, [string, string]> = {
    red: ['bg-red-400', 'border-red-400'],
    green: ['bg-accent-2', 'border-accent-2'],
    blue: ['bg-accent', 'border-accent'],
    orange: ['bg-orange-400', 'border-orange-400'],
  };

  return (
     <div className="mb-5">
      <div className="flex items-start">
        <h4 className="text-sm font-semibold">{title}</h4>
        <div className="text-on-main-3 text-xs grow flex flex-row-reverse">{value}%</div>
      </div>
      <div className={cn('border-1 border-solid rounded-full overflow-hidden p-0.5', colors[palette][1])}>
        <div className={cn('h-1 rounded-l-full', colors[palette][0])} style={{width: `${value}%`}}></div>
      </div>
    </div>
  );
};
