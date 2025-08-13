import {FC} from 'react';
import {Job} from '../../../../types/Job';
import {Percentage} from './Percentage';
import {TagList} from '../../../elements/TagList';

export const JobBlock: FC<{job: Job}> = ({job}) => {
  const from: string = `${job.from.getFullYear()}/${(job.from.getMonth() + 1).toString().padStart(2, '0')}`;
  const to: string = `${job.to.getFullYear()}/${(job.to.getMonth() + 1).toString().padStart(2, '0')}`;
  return (
    <div className="flex gap-5">
        <div className="hidden lg:flex flex-col items-end text-right w-38 shrink-0 grow-0 pt-2">
          <div>{from} - {to}</div>
          <div className="text-on-main-3 text-sm">
            {!!job.company.webiste && (
            <a href={job.company.webiste} target="_blank" className="text-accent/80 transition-all duration-700">
            {job.company.name}
            </a>
            )}
            {!job.company.webiste && job.company.name}
          </div>
        </div>
        <div className="border-l-1 border-l-solid border-l-surface relative z-10">
          <div className="z-20 w-6 h-6 bg-radial  from-bg-main from-20%  via-accent via-20% to-transparent to-60% absolute -left-3 top-2">
          </div>
        </div>
        <div className="max-w-full">
          <div className="font-semibold text-xl mb-2 pt-2">
            {job.title}
          </div>
          <div className="lg:hidden mb-2">
            <div>{from} - {to}</div>
            <div className="text-on-main-3 text-sm">{job.company.name}</div>
          </div>
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="text-base/relaxed text-on-main-2 mb-0 md:mb-10">
              {job.description}
            </div>

            <div className="min-w-80 w-full xl:w-80  shrink-0 mb-10">
              {job.skills?.management !== undefined && (
                <>
                {job.skills.management !== 0 && <Percentage title="Management" color="management" value={job.skills.management} />}
                {job.skills.management !== 100 && <Percentage title="Coding" color="code" value={100 - job.skills.management} />}
                </>
              )}
              {job.skills?.backend !== undefined && (
                <>
                {job.skills.backend !== 0 && <Percentage title="Backend" color="backend" value={job.skills.backend} />}
                {job.skills.backend !== 100 && <Percentage title="Frontend" color="frontend" value={100 - job.skills.backend} />}
                </>
              )}
              {job.tags && job.tags.length > 0 && <TagList tags={job.tags} />}
            </div>
          </div>
        </div>
      </div>
  );
};
