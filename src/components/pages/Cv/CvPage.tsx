import {FC} from 'react';
import {JobHistory} from './components/JobHistory';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {PrimaryButton} from '../../elements/PrimaryButton';

export const CvPage: FC = () => {
  return (
<PageContainer>
  <PageHeader>Resume</PageHeader>
  <div className='flex flex-col lg:flex-row gap-5 w-full'> 
    <div className='grow'>
    <JobHistory />
    </div>
  </div>
  <div className='md:hidden w-full flex justify-center mt-20'>
    <PrimaryButton onClick={() => window.scrollTo(0,0)}>To the top</PrimaryButton>
  </div>
</PageContainer>
  );
};
