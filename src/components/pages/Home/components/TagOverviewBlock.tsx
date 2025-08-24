import {FC} from 'react';
import {tagMap} from '../../../../model/tagMap';
import {Tag} from '../../../../types/Tag';
import {TagGroup} from '../../../../types/TagGroup';
import {TagList} from '../../../elements/TagList';
import {cn} from '../../../../utils/cn';
import {PrimaryButton} from '../../../elements/PrimaryButton';
import {useNavigate, useSearch} from '@tanstack/react-router';
import {nativeEnum, object} from 'zod';

export const TagOverviewBlock: FC<{onCustomCvClick: (tags: Tag[]) => void}> = (props) => {
  const search = useSearch({
    strict: false,
  });
  const navigate = useNavigate();
  const parsedSearch = object({
    tags: nativeEnum(Tag).array().optional().default([]),
  }).safeParse(search);

  const selectedTags = parsedSearch.success ? parsedSearch.data.tags : [];
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

  const setSelectedTags = (values: Tag[]) => {
    const tags = values.length > 0 ? values : undefined;
    navigate({to: '/', search: {tags}});
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
    const categories = getTagsForGroup(TagGroup.Category, false);
    const categoriesSelected = !!selectedTags.find((x) => categories.includes(x));
    const result = tags.filter((tag) => {
      if (group === TagGroup.Languages) {
        return false;
      }
      if (group === TagGroup.Category) {
        return false;
      }

      if (selectedTags.length === 0) {
        return true;
      }

      let inSelectedGroup = false;
      for (const selected of selectedTags) {
        inSelectedGroup = categoriesSelected && !!tagMap[tag].groups.find((x) => x.toString() === selected);
        if (inSelectedGroup) {
          break;
        }
      }
      let fitsLanguages = false;
      for (const selected of selectedTags) {
        const castedToTag: Tag[] = tagMap[tag].language ?? [];
        fitsLanguages = tagMap[tag].language ? castedToTag.includes(selected) : true;
        if (fitsLanguages) {
          break;
        }
      }
      if (fitsLanguages && inSelectedGroup) {
        return false;
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
          hasSelected ? 'max-h-300' : ''
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
            Create customized CV for your stack. Start with selecting language and domain.
          </div>
          <PrimaryButton disabled={!hasSelected} className={cn('min-w-42')} onClick={onCustomCvClick}>
            Customized CV
          </PrimaryButton>
        </div>
      </div>
      {getGroups().map((group, i) => {
        const tags = getTagsForGroup(group);
        const disabledTags = getDisabledTags(group);
        const showAddAllButton = tags.length > disabledTags.length;
        const headerEnabled = !hasSelected && ![TagGroup.Languages, TagGroup.Category].includes(group);
        const onAddAllClick = () => {
          const difference = tags.filter((tag) => !disabledTags.includes(tag));
          setSelectedTags([...selectedTags, ...difference]);
        };
        if (tags.length === 0) {
          return null;
        }
        return (
          <div key={group} className="mb-5">
            {i === 2 && <div className="border-white/70 border-b-1 mt-10 mb-10" />}
            <h2 className={cn('text-base font-semibold mb-2', headerEnabled ? 'opacity-50' : '')}>
              {group}:
            </h2>
            <div className="flex flex-wrap gap-3">
            <TagList onClick={onTagClicked} tags={tags} disabled={disabledTags} >
            {showAddAllButton && <a onClick={onAddAllClick} className={'text-accent text-xs cursor-pointer'}>Add Available</a>}
            </TagList>
            </div>
          </div>
        );
      })}
    </>
  );
};
