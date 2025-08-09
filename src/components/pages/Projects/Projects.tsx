import {FC} from 'react';
import {FaHeartCircleCheck, FaClock, FaStar} from 'react-icons/fa6';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';

export const Projects: FC = () => {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>
      <div className='w-full'>
        <div className='flex gap-3 text-on-main-3 text-sm mb-7'>
          <div className='text-on-main-2'>All</div>
          <div>Audio</div>
          <div>Detailed</div>
          <div>Mockups</div>
          <div>Sound Cloud</div>
          <div>Video</div>
          <div>Vimeo</div>
          <div>Youtube</div>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          <div>
            <div className='h-100 bg-pink-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>SoundCloud Audio</div>
          </div>
           <div>
            <div className='h-100 bg-blue-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-100 bg-orange-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-100 bg-amber-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-100 bg-pink-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
           <div>
            <div className='h-100 bg-cyan-200 w-full rounded-xl'></div>
            <div className='mt-3 font-semibold'>Detailed Project 2</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
       
