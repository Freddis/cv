import {Page, Document} from '@react-pdf/renderer';
import {FC} from 'react';
import {Model} from '../../../types/Model';
import {Tag} from '../../../types/Tag';
import {tagMap} from '../../../model/tagMap';
import {ProjectSectionPdf} from './components/ProjectSectionPdf';
import {pdfStyles} from './utils/pdfStyles';
import {HeaderSectionPdf} from './components/HeaderSectionPdf';
import {ProfileSectionPdf} from './components/ProfileSectionPdf';
import {EducationSectionPdf} from './components/EductionSectionPdf';
import {SkillsSectionPdf} from './components/SkillsSectionPdf';
import {JobSectionPdf} from './components/JobSectionPdf';

export interface CvPdfProps {
  model: Model,
  allowedTags?: Tag[]
  contactsVariant?: 'vertical' | 'horizontal'
  profileVariant?: 'short' | 'long'
  jobsVariant?: 'short' | 'long',
  projects?: boolean,
  contacts?: Partial<Record<keyof Model['profile']['contacts'], boolean>>
}

export const CvPdf: FC<CvPdfProps> = ({
  model,
  allowedTags,
  profileVariant: profile = 'short',
  jobsVariant = 'short',
  projects = false,
  contacts,
}) => {

  const estimatableTags = allowedTags?.filter((tag) => tagMap[tag].estimatable) ?? [];
  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <HeaderSectionPdf profile={model.profile} contacts={contacts}/>
        <ProfileSectionPdf profile={model.profile} variant={profile} />
        {estimatableTags.length > 0 && <SkillsSectionPdf tags={estimatableTags} jobs={model.jobs}/>}
        <JobSectionPdf jobs={model.jobs} allowedTags={allowedTags ?? []} variant={jobsVariant}/>
        <EducationSectionPdf education={model.education} />
        {projects && <ProjectSectionPdf projects={model.projects} allowedTags={allowedTags}/>}
      </Page>
    </Document>
  );
};
