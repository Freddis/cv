import {FC, ReactNode} from 'react';
import {Tag} from '../../types/Tag';
import {TagBlock} from './TagBlock';
import {orderTags} from '../../utils/orderTags';

interface TagListProps {
  tags: Tag[],
  disabled?: Tag[],
  onClick?: (tag: Tag) => void,
  children?: ReactNode
}

export const TagList: FC<TagListProps> = ({tags, disabled, onClick, children}) => {
  const sorted: {tag: Tag, disabled: boolean} [] = [];
  for (const tag of orderTags(tags)) {
    const isDisabled = disabled ? disabled.includes(tag) : false;
    sorted.push({tag, disabled: isDisabled});
  }
  const onTagClick = (tag: Tag) => {
    if (!onClick) {
      return;
    }
    onClick(tag);
  };
  return (
    <div className="flex flex-wrap gap-3 px-2 py-0">
      {sorted.map((row) => <TagBlock onClick={onTagClick.bind(null, row.tag)} key={row.tag} tag={row.tag} disabled={row.disabled} />)}
      {children}
     </div>
  );
};
