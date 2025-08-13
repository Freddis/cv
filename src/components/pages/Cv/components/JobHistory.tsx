import {FC} from 'react';
import {skyground} from '../../../../model/jobs/skyground';
import {upwork} from '../../../../model/jobs/upwork';
import {unleashedCapital} from '../../../../model/jobs/unleashedCapital';
import {Job} from '../../../../types/Job';
import {JobBlock} from './JobBlock';
import {homeStudio} from '../../../../model/jobs/homeStudio';
import {analit} from '../../../../model/jobs/analit';
import {sitronics} from '../../../../model/jobs/sitronics';
import {alfabank} from '../../../../model/jobs/alfabank';
import {xsoft} from '../../../../model/jobs/xsoft';
import {paive} from '../../../../model/jobs/paive';
import {webrex} from '../../../../model/jobs/webrex';

export const JobHistory: FC = () => {
  const jobs: Job[] = [
    skyground,
    unleashedCapital,
    upwork,
    homeStudio,
    analit,
    sitronics,
    alfabank,
    xsoft,
    webrex,
    paive,
  ];


  return (
    <div>
      {jobs.map((x) => <JobBlock key={x.title} job={x} />)}
    </div>
  );
};
