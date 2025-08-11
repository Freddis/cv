import {FC} from 'react';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {Link} from '@tanstack/react-router';
import {homeRoute} from '../../../routes/routes';
import {PrimaryButton} from '../../elements/PrimaryButton';

export const Projects: FC = () => {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>
      <div className='w-full'>
        {/* <div className='flex flex-wrap gap-3 text-on-main-3 text-sm mb-7 w-full'>
          <div className='text-on-main-2'>All</div>
          <div>Audio</div>
          <div>Detailed</div>
          <div>Mockups</div>
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
          <div>
            <div className='h-50 lg:h-100 bg-pink-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Discipline</div>
          </div>
           <div>
            <div className='h-50 lg:h-100 bg-blue-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Strap-On OpenAPI</div>
          </div>
           <div>
            <div className='h-50 lg:h-100 bg-orange-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Tauromarkets</div>
          </div>
         
        </div>
      </div>
      <div className='md:hidden w-full flex justify-center mt-20'>
        <PrimaryButton onClick={() => window.scrollTo(0,0)}>To the top</PrimaryButton>
      </div>
    </PageContainer>
  );
};
       
