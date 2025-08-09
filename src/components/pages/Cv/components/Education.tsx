import {FC} from "react"
import {BlockHeader} from "../../../elements/BlockHeader"


export const Education: FC = () => {

  return (
    <div>
      <BlockHeader>Education</BlockHeader>
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
      <BlockHeader>Experience</BlockHeader>
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
  )
}