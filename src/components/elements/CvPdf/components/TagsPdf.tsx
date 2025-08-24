import {View, Text} from '@react-pdf/renderer';
import {Tag} from '../../../../types/Tag';
import {TagGroup} from '../../../../types/TagGroup';
import {FC} from 'react';
import {Domain} from '../../../../types/Domain';
import {orderTags} from '../../../../utils/orderTags';

interface TagsViewProps {
  tags: Partial<Record<Domain, Tag[]>>,
  allowedTags: Tag[],
  variant?: 'short'| 'long',
}
export const TagsPdf: FC<TagsViewProps> = ({allowedTags, tags, variant = 'short'}) => {
  const groups: {name: TagGroup, tags: Tag[]}[] = [];
  const excludeTags: Tag[] = [
    Tag.Backend,
    Tag.Frontend,
    Tag.Mobile,
    Tag.Management,
  ];
  const filterTags = (tags: Tag[]) => {
    return tags.filter((tag) => allowedTags.includes(tag) && !excludeTags.includes(tag));
  };
  if (allowedTags?.includes(Tag.Backend) && tags.Backend) {
    groups.push({
      name: TagGroup.Backend,
      tags: filterTags(tags.Backend),
    });
  }
  if (allowedTags?.includes(Tag.Frontend) && tags.Frontend) {
    groups.push({
      name: TagGroup.Frontend,
      tags: filterTags(tags.Frontend),
    });
  }
  if (allowedTags?.includes(Tag.Mobile) && tags.Mobile) {
    groups.push({
      name: TagGroup.Mobile,
      tags: filterTags(tags.Mobile),
    });
  }
  if (allowedTags?.includes(Tag.Management) && tags.Management) {
    groups.push({
      name: TagGroup.Management,
      tags: filterTags(tags.Management),
    });
  }
  const filteredGroups = groups.filter((x) => x.tags.length > 0);
  if (variant === 'short') {
    const allTags = orderTags([...new Set(filteredGroups.flatMap((x) => x.tags))]);
    return (
      <Text>
        {allTags.join(', ')}
      </Text>
    );
  }

  return (
    <View>
      {filteredGroups.map((group) => (
        <View key={group.name} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text>
            <Text style={{fontWeight: 'bold'}}>{group.name}: </Text>
            {group.tags.join(', ')}
          </Text>
        </View>
      ))}
    </View>
  );
};
