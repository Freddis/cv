import {FC} from 'react';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {Link} from '@tanstack/react-router';
import {cvRoute, homeRoute} from '../../../routes/routes';

export const Projects: FC = () => {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>
      <div className='w-full'>
        <div className='flex flex-wrap gap-3 text-on-main-3 text-sm mb-7 w-full'>
          <div className='text-on-main-2'>All</div>
          <div>Audio</div>
          <div>Detailed</div>
          <div>Mockups</div>
          <div>Sound Cloud</div>
          <div>Video</div>
          <div>Vimeo</div>
          <div>Youtube</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
          <div>
            <div className='h-50 lg:h-100 bg-pink-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>SoundCloud Audio</div>
          </div>
           <div>
            <div className='h-50 lg:h-100 bg-blue-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-50 lg:h-100 bg-orange-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-50 lg:h-100 bg-amber-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-50 lg:h-100 bg-pink-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-50 lg:h-100 bg-cyan-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
        </div>
      </div>
        <div className='md:hidden flex justify-center w-full mt-10 '>
          <Link to={homeRoute.id} className='border-accent border-solid border-2 rounded-full px-6 py-2 cursor-pointer'>
            Home
          </Link>
        </div>
    </PageContainer>
  );
};
       
