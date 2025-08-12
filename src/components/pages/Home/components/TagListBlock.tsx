import { FC } from "react";
import { tagMap } from "../../../../model/tagMap";
import { Tag } from "../../../../types/Tag";
import { TagGroup } from "../../../../types/TagGroup";
import { TagBlock } from "../../../elements/TagBlock";

export const TagListBlock: FC = () => {
  const getTagsForGroup = (group: TagGroup): Tag[] => {
    // const tags =  Object.keys(tagProps).filter( x => tagProps[x]?.categories[0] === group);
    const tags = Object.keys(tagMap).filter((x) =>
      tagMap[x]?.categories?.includes(group)
    );

    return tags;
  };

  const getGroups = (): TagGroup[] => {
    const exclusions: TagGroup[] = [];
    const raw = Object.values(TagGroup).filter((x) => !exclusions.includes(x));

    return raw;
  };
  const groups = getGroups();
  return (
    <>
      {getGroups().map((group) => (
        <div className="mb-5">
          <h2 className="text-base font-semibold mb-2">{group}:</h2>
          <div className="flex flex-wrap gap-2">
            {getTagsForGroup(group).map((tag) => (
              <TagBlock key={tag} skill={tag} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
