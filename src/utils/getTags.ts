import {Domain} from '../types/Domain';
import {Tag} from '../types/Tag';

export const getTags = (tagMap: Partial<Record<Domain, Tag[]>>): Tag[] => {
  return [...new Set(Object.values(tagMap).flatMap((x) => x))];
};
