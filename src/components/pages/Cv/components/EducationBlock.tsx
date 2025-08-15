import {FC} from 'react';
import {Education} from '../../../../types/Education';

export const EducationBlock:FC<{education: Education}> = ({education}) => {
  const from: string = `${education.start.getFullYear()}`;
  const to: string = `${education.end.getFullYear()}`;

  return (
     <div className="flex gap-5">
        <div className="hidden md:flex flex-col items-end text-right w-38 shrink-0 grow-0 pt-2">
          <div>{from} - {to}</div>
        </div>
        <div className="border-l-1 border-l-solid border-l-surface relative z-10">

        </div>
        <div>
          <div className="font-semibold text-lg mb-2 pt-2">
            {education.degree}
          </div>
          <div className="md:hidden mb-2">
            <div>{from} - {to}</div>
          </div>
          <div className="text-sm/relaxed text-on-main-2 mb-5">
            {education.insitution}
          </div>
        </div>
        </div>

  );
};
