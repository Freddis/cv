import {FC} from 'react';
import {Education} from './components/Education';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {Skills} from './components/Skills';
import {Link} from '@tanstack/react-router';
import {projectsRoute} from '../../../routes/routes';

export const CvPage: FC = () => {
  return (
<PageContainer>
  <PageHeader>Resume</PageHeader>
  <div className='flex flex-col lg:flex-row gap-5 w-full'> 
    <div className='grow'>
    <Education />
    </div>
    <div className='w-100 shrink-1'>
      <Skills />
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
