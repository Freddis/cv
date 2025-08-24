import {FC} from 'react';
import {Tag} from '../../types/Tag';
import {groupMap} from '../../model/groupMap';
import {tagMap} from '../../model/tagMap';
import {TagGroup} from '../../types/TagGroup';
import {nativeEnum} from 'zod';
import {cn} from '../../utils/cn';

export const TagBlock: FC<{tag: Tag, disabled?: boolean, onClick?: () => void}> = ({tag, onClick, disabled}) => {
  const props = tagMap[tag];
  const group = props.groups[0];
  const categoryTag = nativeEnum(TagGroup).safeParse(tag);
  const color = categoryTag.success ? groupMap[categoryTag.data].color : groupMap[group].color;
  const disabledOpacityAndCursor = disabled ? 'opacity-50 hover:scale-100' : '';

  const onTagClick = () => {
    // if (disabled) {
    //   return;
    // }
    if (onClick) {
      onClick();
    }
  };
  return (
  <span
  onClick={onTagClick}
  // eslint-disable-next-line max-len
  className={cn(`${color} px-1.5 py-0.5 rounded-sm text-sm hover:scale-115 transition-transform duration-500 cursor-pointer`, disabledOpacityAndCursor)}
  >
    {tag}
  </span>
  );
};
