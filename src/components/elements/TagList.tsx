import {FC} from 'react';
import {Tag} from '../../types/Tag';
import {TagBlock} from './TagBlock';
import {groupMap} from '../../model/groupMap';
import {tagMap} from '../../model/tagMap';


export const TagList: FC<{tags: Tag[], disabled?: Tag[], onClick?: (tag: Tag) => void}> = ({tags, disabled, onClick}) => {

  const sorted: {tag: Tag, disabled: boolean} [] = [];
  for (const group of Object.keys(groupMap)) {
    for (const tag of tags) {
      if (tagMap[tag].groups[0] === group) {
        const isDisabled = disabled ? disabled.includes(tag) : false;
        sorted.push({tag, disabled: isDisabled});
      }
    }
  }
  const onTagClick = (tag: Tag) => {
    if (!onClick) {
      return;
    }
    onClick(tag);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {sorted.map((row) => <TagBlock onClick={onTagClick.bind(null, row.tag)} key={row.tag} tag={row.tag} disabled={row.disabled} />)}
    </div>
  );
};
