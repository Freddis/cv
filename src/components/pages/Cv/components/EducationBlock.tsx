import {FC} from 'react';
import {Job} from '../../../../types/Job';

export const EducationBlock:FC = () => {
  const education: Job = {
    from: new Date('2008-09-01'),
    to: new Date('2012-06-01'),
    title: 'Bachelor Degree in Development of CAD Systems',
    description: <div></div>,
    company: {
      name: 'Moscow State University of Design and Technology',
      webiste: 'http://вфыв',
    },
  };
  const job = education;
  const from: string = `${job.from.getFullYear()}`;
  const to: string = `${job.to.getFullYear()}`;

  return (
     <div className="flex gap-5">
        <div className="hidden md:flex flex-col items-end text-right w-38 shrink-0 grow-0 pt-2">
          <div>{from} - {to}</div>
        </div>
        <div className="border-l-1 border-l-solid border-l-surface relative z-10">

        </div>
        <div>
          <div className="font-semibold text-lg mb-2 pt-2">
            {job.title}
          </div>
          <div className="md:hidden mb-2">
            <div>{from} - {to}</div>
          </div>
          <div className="text-sm/relaxed text-on-main-2 mb-5">
            {job.company.name}

          </div>
        </div>
        </div>

  );
};
