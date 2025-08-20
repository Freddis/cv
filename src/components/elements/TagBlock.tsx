import {FC} from 'react';
import {Tag} from '../../types/Tag';
import {groupMap} from '../../model/groupMap';
import {tagMap} from '../../model/tagMap';


export const TagBlock: FC<{tag: Tag, disabled?: boolean, onClick?: () => void}> = ({tag, onClick, disabled}) => {

  const props = tagMap[tag];
  const group = props.groups[0];
  const color = groupMap[group].color;
  const disabledOpacity = disabled ? 'opacity-30' : '';

  return (
  <span
  onClick={onClick}
  // eslint-disable-next-line max-len
  className={`${color} ${disabledOpacity} px-1.5 py-0.5 rounded-sm text-sm hover:scale-115 transition-transform duration-500 cursor-pointer`}
  >
    {tag}
  </span>
  );
};
