import {FC} from 'react';
import {JobHistory} from './components/JobHistory';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {ScrollToTopButton} from '../../elements/ScrollToTopButton';

export const CvPage: FC = () => {
  return (
<PageContainer>
  <PageHeader>Resume</PageHeader>
  <div className="flex flex-col lg:flex-row gap-5 w-full">
    <div className="grow">
    <JobHistory />
    </div>
  </div>
  <ScrollToTopButton/>
</PageContainer>
  );
};
