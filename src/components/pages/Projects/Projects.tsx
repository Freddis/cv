import {FC} from 'react';
import {FaHeartCircleCheck, FaClock, FaStar} from 'react-icons/fa6';

export const Projects: FC = () => {
  return (
    <div className="flex flex-col w-full justify-start items-start bg-main text-on-main px-20 py-20">
      <div className='w-full'>
        <div className='z-1 relative overflow-visible mb-10'>
          <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
          </div>
          <h3 className='text-xl font-semibold'>Fun <span className='text-accent'>Facts</span></h3>
        </div>
        <div className='grid grid-cols-3 gap-5'> 
          <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
            <FaHeartCircleCheck className='text-4xl text-accent' />
            <h3 className='font-semibold text-base mt-5 mb-5'>Happy Clients</h3>
            <h4 className='text-on-main-3 text-4xl'>532</h4>
          </div>
          <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
            <FaClock className='text-4xl text-accent' />
            <h3 className='font-semibold text-base mt-5 mb-5'>Working Hours</h3>
            <h4 className='text-on-main-3 text-4xl'>10,234</h4>
          </div>
          <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
            <FaStar className='text-4xl text-accent' />
            <h3 className='font-semibold text-base mt-5 mb-5'>Awards Won</h3>
            <h4 className='text-on-main-3 text-4xl'>5</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
