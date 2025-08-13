import {FC} from 'react';
import {cn} from '../../../../utils/cn/cn';
import {groupMap} from '../../../../model/groupMap';
import {TagGroup} from '../../../../types/TagGroup';

type Color = 'code' | 'management' | 'frontend' | 'backend';
export const Percentage: FC<{title: string, value: number, color?: Color}> = ({title, value, color}) => {

  const palette = color ?? 'code';
  const colors: Record<Color, [string, string]> = {
    code: [groupMap[TagGroup.Databases].color, groupMap[TagGroup.Databases].color],
    management: [groupMap[TagGroup.Management].color, groupMap[TagGroup.Management].color],
    frontend: [groupMap[TagGroup.Frontend].color, groupMap[TagGroup.Frontend].color],
    backend: [groupMap[TagGroup.Backend].color, groupMap[TagGroup.Backend].color],
  };

  return (
     <div className="mb-5">
      <div className="flex items-start">
        <h4 className="text-sm font-semibold">{title}</h4>
        <div className="text-on-main-3 text-xs grow flex flex-row-reverse">{value}%</div>
      </div>
      <div className={cn('border-1 border-solid rounded-full overflow-hidden ', 'border-transparent')}>
        <div className={cn('h-1 rounded-l-full', colors[palette][0])} style={{width: `${value}%`}}></div>
      </div>
    </div>
  );
};
