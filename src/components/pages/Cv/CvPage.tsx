import {FC} from 'react';
import {JobHistory} from './components/JobHistory';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {ScrollToTopButton} from '../../elements/ScrollToTopButton';
import {EducationBlock} from './components/EducationBlock';
import {BlockHeader} from '../../elements/BlockHeader';
import {model} from '../../../model/model';

export const CvPage: FC = () => {
  const {jobs, education} = model;
  return (
  <PageContainer>
    <PageHeader>Resume</PageHeader>
    <div className="flex flex-col lg:flex-row gap-5 w-full">
      <div className="grow">
        <BlockHeader>Experience</BlockHeader>
        <JobHistory jobs={jobs}/>
        <BlockHeader>Education</BlockHeader>
        <EducationBlock education={education}/>
      </div>
    </div>
    <ScrollToTopButton/>
  </PageContainer>
  );
};
