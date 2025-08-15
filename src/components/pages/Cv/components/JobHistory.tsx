import {FC} from 'react';
import {Job} from '../../../../types/Job';
import {JobBlock} from './JobBlock';

export const JobHistory: FC<{jobs: Job[]}> = ({jobs}) => {

  return (
    <div>
      {jobs.map((x) => <JobBlock key={x.title} job={x} />)}
    </div>
  );
};
