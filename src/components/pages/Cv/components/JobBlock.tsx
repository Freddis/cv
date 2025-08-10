import {FC} from "react";
import {Job} from "../../../../types/Job";
import {BlockHeader} from "../../../elements/BlockHeader";
import {Percentage} from "./Percentage";

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
          <div className="flex flex-col md:flex-row gap-5">
            <div className='text-sm/relaxed text-on-main-2 mb-0 md:mb-10'>
              {job.description}
            </div>
            <div className='min-w-80 w-full md:w-80 shrink-0 grow-0 mb-10'>
              {job.skills?.management !== undefined && (
                <>
                {job.skills.management !== 0 && <Percentage title="Management" color="blue"  value={job.skills.management} />}
                {job.skills.management !== 100 && <Percentage title="Coding" color="green"  value={100-job.skills.management} />}
                </>
              )}
              {job.skills?.backend && (
                <>
                {job.skills.backend !== 0 && <Percentage title="Backend" color="red"  value={job.skills.backend} />}
                {job.skills.backend !== 100 && <Percentage title="Frontend" color="orange"  value={100-job.skills.backend} />}
                </>
              )}
              {job.tags && job.tags.length > 0  && (
                <>
                  <BlockHeader>Skills</BlockHeader>
                  <div className='w-full flex gap-2 flex-wrap text-sm '>
                    {job.tags.map( x => <span className='bg-accent px-2 py-1 rounded-sm '>{x}</span>)}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}