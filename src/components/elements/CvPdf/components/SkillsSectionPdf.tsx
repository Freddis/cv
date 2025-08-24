import {View, Text} from '@react-pdf/renderer';
import {FC} from 'react';
import {Tag} from '../../../../types/Tag';
import {getTags} from '../../../../utils/getTags';
import {Job} from '../../../../types/Job';
import {pdfStyles} from '../utils/pdfStyles';
import {orderTags} from '../../../../utils/orderTags';

export const SkillsSectionPdf: FC<{tags: Tag[], jobs: Job[]}> = ({tags, jobs}) => {

  const getJobMonths = (job: Job): number => {
    const ms = job.to.getTime() - job.from.getTime();
    const msInMonth = 1000 * 60 * 60 * 24 * 30;
    const months = ms / msInMonth;
    return months;
  };

  const getExperienceYears = (tag:Tag): number => {
    let result = 0;
    for (const job of jobs) {
      if (!getTags(job.tags).includes(tag)) {
        continue;
      }
      result += getJobMonths(job);
    }
    return result / 12;
  };
  const orderedTags = orderTags(tags);

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.section.heading}>Skills</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5}}>
        {orderedTags.map((tag, i) => <Text key={i}>{tag}: {getExperienceYears(tag).toFixed(1)}y.</Text>)}
      </View>
    </View>
  );
};
