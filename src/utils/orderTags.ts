import {groupMap} from '../model/groupMap';
import {tagMap} from '../model/tagMap';
import {Tag} from '../types/Tag';

export const orderTags = (tags: Tag[]): Tag[] => {
  const sorted: Tag[] = [];
  for (const group of Object.keys(groupMap)) {
    for (const tag of tags) {
      if (tagMap[tag].groups[0] === group) {
        sorted.push(tag);
      }
    }
  }
  return sorted;
};
