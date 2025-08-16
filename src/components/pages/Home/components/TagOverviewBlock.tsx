import {FC, useState} from 'react';
import {tagMap} from '../../../../model/tagMap';
import {Tag} from '../../../../types/Tag';
import {TagGroup} from '../../../../types/TagGroup';
import {TagList} from '../../../elements/TagList';
import {cn} from '../../../../utils/cn';
import {PrimaryButton} from '../../../elements/PrimaryButton';

export const TagOverviewBlock: FC<{onCustomCvClick: (tags: Tag[]) => void}> = (props) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const exclusions: TagGroup[] = [];

  const getTagsForGroup = (group: TagGroup, filter = true): Tag[] => {
    const tags = Object.keys(tagMap).filter((x) => {
      if (filter && selectedTags.includes(x)) {
        return false;
      }
      return tagMap[x]?.groups[0] === group;
      // return tagMap[x]?.groups?.includes(group);
    });

    return tags;
  };
  const getGroups = (): TagGroup[] => {
    const raw = Object.values(TagGroup).filter((x) => !exclusions.includes(x));
    return raw;
  };

  const onTagClicked = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((x) => x !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const onCustomCvClick = () => {
    if (selectedTags.length === 0) {
      return;
    }

    props.onCustomCvClick(selectedTags);
  };

  const getDisabledTags = (group:TagGroup): Tag[] => {
    const tags = getTagsForGroup(group);
    // if (selectedTags.length === 0) {
    //   return [];
    // }
    // const languages = getTagsForGroup(TagGroup.Languages, false);
    // const lanuageSelected = !!selectedTags.find((x) => languages.includes(x));
    const result = tags.filter((tag) => {
      if (group === TagGroup.Languages) {
        return false;
      }
      if (selectedTags.length === 0) {
        return true;
      }
      const tagLanguages = tagMap[tag].language;
      if (!tagLanguages) {
        return false;
      }

      for (const selected of selectedTags) {
        const castedToTag: Tag[] = tagLanguages;
        if (castedToTag.includes(selected)) {
          return false;
        }
      }
      return true;
    });

    return result;
  };
  const hasSelected = selectedTags.length > 0;
  return (
    <>
       <div className="mb-10">
        <div
        className={cn(
          'opacity transition-all duration-1000 max-h-0 overflow-y-hidden overflow-x-visible',
          hasSelected ? 'max-h-50' : ''
        )}>
          <h2 className={cn('text-base font-semibold mb-2 flex items-start', !hasSelected ? 'invisible' : '')}>
            Selected:
            <a className={'text-accent text-xs cursor-pointer ml-2'} onClick={() => setSelectedTags([])}>Clear all</a>
          </h2>
          <div className={cn('flex flex-wrap gap-2 mb-2', !hasSelected ? 'invisible' : '')}>
            <TagList onClick={onTagClicked} tags={hasSelected ? selectedTags : [Tag.OpenGL]}/>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div>
            Create customized CV for your stack. Start with selecting language.
          </div>
          <PrimaryButton disabled={!hasSelected} className={cn('min-w-42')} onClick={onCustomCvClick}>
            Customized CV
          </PrimaryButton>
        </div>
      </div>

      {getGroups().map((group) => (
        <div key={group} className="mb-5">
          <h2 className={cn('text-base font-semibold mb-2', !hasSelected && group !== TagGroup.Languages ? 'opacity-50' : '')}>{group}:</h2>
          <div className="flex flex-wrap gap-2">
           <TagList onClick={onTagClicked} tags={getTagsForGroup(group)} disabled={getDisabledTags(group)} />
          </div>
        </div>
      ))}
    </>
  );
};
