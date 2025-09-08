import {FC} from 'react';
import {Job} from '../../../../types/Job';
import {View, Text, Link} from '@react-pdf/renderer';
import {pdfStyles} from '../utils/pdfStyles';
import {joinWith} from '../../../../utils/joinWith';
import {JsxPdf} from './JsxPdf';
import {Tag} from '../../../../types/Tag';
import {Domain} from '../../../../types/Domain';

interface JobSectionPdfProps {
  jobs: Job[]
  allowedTags: Tag[]
  variant?: 'short' | 'long'
}
export const JobSectionPdf: FC<JobSectionPdfProps> = ({jobs, allowedTags, variant = 'short'}) => {
  const hasBackend = allowedTags?.includes(Tag.Backend);
  const hasFrontend = allowedTags?.includes(Tag.Frontend);
  const hasMobile = allowedTags?.includes(Tag.Mobile);
  const hasManagement = allowedTags?.includes(Tag.Management);

  const getDate = (date?: Date): string => {
    if (!date) {
      return 'To Date';
    }
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'December',
    ];
    const month = date.getMonth();
    const name = months[month] ?? 'January';
    const result = `${name.substring(0, 3)} ${date.getFullYear()}`;
    return result;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shouldDisplayPrimaryDescription = (job: Job): boolean => {
    return true;

    // const somethingToDisplayExists = [
    //   hasBackend ? Domain.Backend : undefined,
    //   hasFrontend ? Domain.Frontend : undefined,
    //   hasMobile ? Domain.Mobile : undefined,
    //   hasManagement ? Domain.Management : undefined,
    // ]
    // .filter((x) => x !== undefined)
    // .filter((x) => x !== job.primaryDescription)
    // .find((x) => !!job.description[x]);
    // return !somethingToDisplayExists;
  };

  return (
    <>
     {jobs.map((j, i) => (
        <View key={j.company.name} style={pdfStyles.section} wrap={false}>
          {i === 0 && <Text style={pdfStyles.section.heading}>Employment History</Text>}
          <View style={pdfStyles.paragraph}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={pdfStyles.section.block.heading}>{j.title}</Text>
            <View style={{flexGrow: 1, flexDirection: 'row-reverse'}}>
              <Text>{getDate(j.from)} - {getDate(j.to)}</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{j.company.name}</Text>
              {!!j.company.websites && (
                <View style={{flexDirection: 'row'}}>
                  <Text>, </Text>
                  {joinWith(
                    j.company.websites.map((website) => <Link key={website}>{website}</Link>),
                    <Text key={Math.random()}>, </Text>
                  )}
                </View>
            )}
            </View>
          </View>
          <View style={{marginBottom: -5}}>
            {variant === 'short' && (
              <JsxPdf el={j.description[j.primaryDescription]} allowedTags={allowedTags}/>
            )}
            {variant === 'long' && (
              <>

                { //primary description goes first
                shouldDisplayPrimaryDescription(j) && (
                  <JsxPdf el={j.description[j.primaryDescription]} allowedTags={allowedTags}/>
                )}
                {hasManagement && j.primaryDescription !== Domain.Management && j.description?.Management && (
                  <JsxPdf el={j.description.Management} allowedTags={allowedTags}/>
                )}
                {hasBackend && j.primaryDescription !== Domain.Backend && j.description?.Backend && (
                  <JsxPdf el={j.description.Backend} allowedTags={allowedTags}/>
                )}
                {hasFrontend && j.primaryDescription !== Domain.Frontend && j.description?.Frontend && (
                  <JsxPdf el={j.description.Frontend} allowedTags={allowedTags}/>
                )}
                {hasMobile && j.primaryDescription !== Domain.Mobile && j.description?.Mobile && (
                  <JsxPdf el={j.description.Mobile} allowedTags={allowedTags}/>
                )}
              </>
            )}
          </View>
        </View>
     ))}
    </>
  );
};
