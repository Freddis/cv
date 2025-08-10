import {FC} from "react";
import {BlockHeader} from "../../../elements/BlockHeader";

export const Skills: FC = () => {
  return (
    <div>
     <BlockHeader>Design Skills</BlockHeader>
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
      <BlockHeader>Coding Skills</BlockHeader>
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

      <BlockHeader>Skills</BlockHeader>
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
  )
}