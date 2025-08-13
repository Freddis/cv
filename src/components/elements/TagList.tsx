import {FC} from 'react';
import {Tag} from '../../types/Tag';
import {TagBlock} from './TagBlock';
import {groupMap} from '../../model/groupMap';
import {tagMap} from '../../model/tagMap';


export const TagList: FC<{tags: Tag[]}> = ({tags}) => {

  const sorted: Tag[] = [];
  for (const group of Object.keys(groupMap)) {
    for (const tag of tags) {
      if (tagMap[tag].groups[0] === group) {
        sorted.push(tag);
      }
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {sorted.map((tag) => <TagBlock key={tag} tag={tag} />)}
    </div>
  );
};
