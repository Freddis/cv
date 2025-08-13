import {FC} from 'react';
import {tagMap} from '../../../../model/tagMap';
import {Tag} from '../../../../types/Tag';
import {TagGroup} from '../../../../types/TagGroup';
import {TagList} from '../../../elements/TagList';

export const TagOverviewBlock: FC = () => {
  const getTagsForGroup = (group: TagGroup): Tag[] => {
    const tags = Object.keys(tagMap).filter((x) => tagMap[x]?.groups[0] === group);
    // const tags = Object.keys(tagMap).filter((x) =>
    //   tagMap[x]?.groups?.includes(group)
    // );

    return tags;
  };

  const getGroups = (): TagGroup[] => {
    const exclusions: TagGroup[] = [];
    const raw = Object.values(TagGroup).filter((x) => !exclusions.includes(x));

    return raw;
  };
  return (
    <>
      {getGroups().map((group) => (
        <div key={group} className="mb-5">
          <h2 className="text-base font-semibold mb-2">{group}:</h2>
          <div className="flex flex-wrap gap-2">
           <TagList tags={getTagsForGroup(group)}/>
          </div>
        </div>
      ))}
    </>
  );
};
