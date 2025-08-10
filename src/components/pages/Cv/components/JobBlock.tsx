import {FC} from "react";
import {Job} from "../../../../types/Job";

export const JobBlock: FC<{job: Job}> = ({job}) => {
  const from: string  =  `${job.from.getFullYear()}/${(job.from.getMonth()+1).toString().padStart(2,'0')}`;
  const to: string =  `${job.to.getFullYear()}/${(job.to.getMonth()+1).toString().padStart(2,'0')}`;
  return (
    <div className='flex gap-5'>
        <div className='hidden md:flex flex-col items-end text-right w-38 shrink-0 grow-0 pt-2'>
          <div>{from} - {to}</div>
          <div className='text-on-main-3 text-sm'>{job.company.name}</div>
        </div>
        <div className='border-l-1 border-l-solid border-l-surface relative z-10'>
          <div className='z-20 w-6 h-6 bg-radial  from-bg-main from-20%  via-accent via-20% to-transparent to-60% absolute -left-3 top-2'>
          </div>
        </div>
        <div>
          <div className='font-semibold text-lg mb-2 pt-2'>
            {job.title}
          </div>
          <div className="md:hidden mb-2">
            <div>{from} - {to}</div>
            <div className='text-on-main-3 text-sm'>{job.company.name}</div>
          </div>
          <div className='text-sm/relaxed text-on-main-2 mb-5'>
            {job.description}
          </div>
        </div>
      </div>
  )
}