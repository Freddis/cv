import {FC} from 'react';
import {Tag} from '../../types/Tag';
import {groupMap} from '../../model/groupMap';
import {tagMap} from '../../model/tagMap';
import {TagGroup} from '../../types/TagGroup';
import {nativeEnum} from 'zod';
import {cn} from '../../utils/cn';

export const TagBlock: FC<{tag: Tag, disabled?: boolean, onClick?: (tag: Tag) => void}> = ({tag, onClick, disabled}) => {
  const props = tagMap[tag];
  const group = props.groups[0];
  const categoryTag = nativeEnum(TagGroup).safeParse(tag);
  const color = categoryTag.success ? groupMap[categoryTag.data].color : groupMap[group].color;

  const onTagClick = () => {
    // commented out since it doesn't make sense from UX perspective
    // if (disabled) {
    //   return;
    // }
    if (onClick) {
      onClick(tag);
    }
  };
  return (
    <span
    onClick={onTagClick}
    className={cn(
      `${color} px-1.5 py-0.5 rounded-sm text-sm  transition-transform duration-500`,
      disabled ? 'opacity-50 hover:scale-100' : '',
      onClick ? 'cursor-pointer hover:scale-115' : undefined
    )}
    >
      {tag}
    </span>
  );
};
