import {FC} from 'react';
import {JobHistory} from './components/JobHistory';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {Link} from '@tanstack/react-router';
import {projectsRoute} from '../../../routes/routes';
import {Skills} from './components/Skills';

export const CvPage: FC = () => {
  return (
<PageContainer>
  <PageHeader>Resume</PageHeader>
  <div className='flex flex-col lg:flex-row gap-5 w-full'> 
    <div className='grow'>
    <JobHistory />
    </div>
  </div>
    <div className='md:hidden flex justify-center w-full mt-10 '>
      <Link to={projectsRoute.id} className='border-accent border-solid border-2 rounded-full px-6 py-2 cursor-pointer'>
        Projects
      </Link>
  </div>
</PageContainer>
  );
};
