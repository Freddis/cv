import {FC} from 'react';
import {FaClock, FaHeartCircleCheck, FaStar} from 'react-icons/fa6';

export const CvPage: FC = () => {
  return (
<div className="flex flex-col w-full justify-start items-start bg-main text-on-main px-20 py-20">
  
  <div className='z-1 relative overflow-visible mb-10'>
    <div className='absolute z-0 top-[-8px] left-[-14px]  w-6 h-6 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
    </div>
    <h2 className='text-3xl font-semibold z-1 relative'>Resume</h2>
  </div>

  

  <div className='grid grid-cols-2 gap-5 w-full'> 
    <div>
      <div className='z-1 relative overflow-visible mb-10'>
        <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
        </div>
        <h3 className='text-xl font-semibold z-1 relative'>Education</h3>
      </div>
      
      <div className='flex gap-5 -mt-7'>
        <div className='flex flex-col items-end text-right w-30 shrink-0 pt-2'>
          <div>2023 - Present</div>
          <div className='text-on-main-3 text-sm'>University of Studies</div>
        </div>
        <div className='border-l-1 border-l-solid border-l-surface relative z-10'>
          <div className='z-20 w-6 h-6 bg-radial  from-bg-main from-20%  via-accent via-20% to-transparent to-60% absolute -left-3 top-2'>
          </div>
        </div>
        <div className='mb-10 pt-2'>
          <div className='font-semibold text-lg mb-2'>Frontend Development</div>
          <div className='text-sm/relaxed text-on-main-3'>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</div>
        </div>
      </div>
       <div className='flex gap-5'>
        <div className='flex flex-col items-end text-right min-w-30 shrink-0'>
          <div>2008 - 2023</div>
          <div className='text-on-main-3 text-sm'>School #156</div>
        </div>
        <div className='border-l-1 border-l-solid border-l-surface relative z-10'>
          <div className='z-20 w-6 h-6 bg-radial  from-bg-main from-20%  via-accent via-20% to-transparent to-60% absolute -left-3'>
          </div>
        </div>
        <div>
          <div className='font-semibold text-lg mb-2'>Graphic Design</div>
          <div className='text-sm/relaxed text-on-main-3'>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</div>
        </div>
      </div>

      <div className='z-1 relative overflow-visible mb-10'>
        <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
        </div>
        <h3 className='text-xl font-semibold z-1 relative'>Experience</h3>
      </div>
      
      <div className='flex gap-5'>
        <div className='flex flex-col items-end text-right w-30 shrink-0 pt-2'>
          <div>2023 - Present</div>
          <div className='text-on-main-3 text-sm'>University of Studies</div>
        </div>
        <div className='border-l-1 border-l-solid border-l-surface relative z-10'>
          <div className='z-20 w-6 h-6 bg-radial  from-bg-main from-20%  via-accent via-20% to-transparent to-60% absolute -left-3'>
          </div>
        </div>
        <div className='mb-10 pt-2'>
          <div className='font-semibold text-lg mb-2'>Frontend Development</div>
          <div className='text-sm/relaxed text-on-main-3'>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</div>
        </div>
      </div>
       <div className='flex gap-5'>
        <div className='flex flex-col items-end text-right min-w-30 shrink-0'>
          <div>2008 - 2023</div>
          <div className='text-on-main-3 text-sm'>School #156</div>
        </div>
        <div className='border-l-1 border-l-solid border-l-surface relative z-10'>
          <div className='z-20 w-6 h-6 bg-radial  from-bg-main from-20%  via-accent via-20% to-transparent to-60% absolute -left-3'>
          </div>
        </div>
        <div>
          <div className='font-semibold text-lg mb-2'>Graphic Design</div>
          <div className='text-sm/relaxed text-on-main-3'>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</div>
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='flex flex-col items-end text-right min-w-30 shrink-0'>
          <div>2008 - 2023</div>
          <div className='text-on-main-3 text-sm'>School #156</div>
        </div>
        <div className='border-l-1 border-l-solid border-l-surface relative z-10'>
          <div className='z-20 w-6 h-6 bg-radial  from-bg-main from-20%  via-accent via-20% to-transparent to-60% absolute -left-3'>
          </div>
        </div>
        <div>
          <div className='font-semibold text-lg mb-2'>Graphic Design</div>
          <div className='text-sm/relaxed text-on-main-3'>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</div>
        </div>
      </div>

    </div>

    <div className=''>
      <div className='z-1 relative overflow-visible mb-5'>
        <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
        </div>
        <h3 className='text-xl font-semibold z-1 relative'>Design Skills</h3>
      </div>

      <div className='mb-5'>
        <div className='flex items-start'>
          <h4 className='text-sm font-semibold'>UI Design</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>50%</div>
        </div>
        <div className='border-1 border-solid border-accent rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent w-[50%] h-1 rounded-l-full'></div>
        </div>
      </div>
      <div className='mb-5'>
        <div className='flex items-start'>
          <h4 className='text-sm font-semibold'>Loudness</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>67%</div>
        </div>
        <div className='border-1 border-solid border-accent rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent w-[67%] h-1 rounded-l-full'></div>
        </div>
      </div>
      <div className='mb-5'>
        <div className='flex items-start'>
          <h4 className='text-sm font-semibold'>Love</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>46%</div>
        </div>
        <div className='border-1 border-solid border-accent rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent w-[46%] h-1 rounded-l-full'></div>
        </div>
      </div>
      <div className='mb-5'>
        <div className='flex items-start'>
          <h4 className='text-sm font-semibold'>Awesomeness</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>93%</div>
        </div>
        <div className='border-1 border-solid border-accent rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent w-[93%] h-1 rounded-l-full'></div>
        </div>
      </div>

      <div className='z-1 relative overflow-visible mt-10 mb-5'>
        <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
        </div>
        <h3 className='text-xl font-semibold z-1 relative'>Coding Skills</h3>
      </div>

      <div className='mb-5'>
        <div className='flex items-start'>
           <h4 className='text-sm font-semibold'>Javascript</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>97%</div>
        </div>
        <div className='border-1 border-solid border-accent-2 rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent-2 w-97%] h-1 rounded-l-full'></div>
        </div>
      </div>
      <div className='mb-5'>
        <div className='flex items-start'>
          <h4 className='text-sm font-semibold'>PHP</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>83%</div>
        </div>
        <div className='border-1 border-solid border-accent-2 rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent-2 w-[83%] h-1 rounded-l-full'></div>
        </div>
      </div>
      <div className='mb-5'>
        <div className='flex items-start'>
          <h4 className='text-sm font-semibold'>C#</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>38%</div>
        </div>
        <div className='border-1 border-solid border-accent-2 rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent-2 w-[38%] h-1 rounded-l-full'></div>
        </div>
      </div>
      <div className='mb-5'>
        <div className='flex items-start'>
          <h4 className='text-sm font-semibold'>Java</h4>
          <div className='text-on-main-3 text-xs grow flex flex-row-reverse'>67%</div>
        </div>
        <div className='border-1 border-solid border-accent-2 rounded-full overflow-hidden p-0.5'>
          <div className='bg-accent-2 w-[67%] h-1 rounded-l-full'></div>
        </div>
      </div>

      <div className='z-1 relative overflow-visible mt-10 mb-5'>
        <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
        </div>
        <h3 className='text-xl font-semibold z-1 relative'>Some Tags</h3>
      </div>
      <div className='w-full flex gap-2 flex-wrap text-sm '>
        <span className='bg-accent px-2 py-1 rounded-sm '>Marketing</span>
        <span className='bg-accent px-2 py-1 rounded-sm  '>Print</span>
        <span className='bg-accent px-2 py-1 rounded-sm  '>Digital Design</span>
        <span className='bg-accent px-2 py-1 rounded-sm  '>Social Media</span>
        <span className='bg-accent px-2 py-1 rounded-sm '>Time Managerment</span>
        <span className='bg-accent px-2 py-1 rounded-sm '>Communication</span>
        <span className='bg-accent px-2 py-1 rounded-sm  '>Problem-Solving</span>
        <span className='bg-accent px-2 py-1 rounded-sm  '>Social Networking</span>
        <span className='bg-accent px-2 py-1 rounded-sm  '>Flexibility</span>
      </div>

    </div>
  </div>

</div>
  );
};
