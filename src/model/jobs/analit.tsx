import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const analit: Job = {
  from: new Date('2014-08-01'),
  to: new Date('2015-10-01'),
  title: 'Head of Department',
  company: {
    webiste: 'https://analit.net',
    name: 'Analytic Centr LLC',
  },
  skills: {
    management: 60,
    backend: 70,
  },
  tags: [
    Tag.cSharp,
    Tag.Hibernate,
    Tag.redmine,
    Tag.ASPNETMVC,
  ],
  description: (
    <div>
      <p className="mb-2">
        Analytic Center is a collaboration of the internet provider Inforum ( http://ivrn.net) and
        AnalitFarmacia (http://analit.net) which is a digital marketplace for drugstores and
        pharmaceutical companies around Russia. The IT department had been relocated to Moscow
        due to difficulties in recruitment and it served the needs of both Inforum and AnalitFarmacia.
      </p>
      <p className="mb-2">
        I was in charge of variety of things: made trips to Voronezh in order to set the course of
        development, searched for and hired the employees for the department, managed inventory and
        salaries, assessed productivity of the employees, tracked the progress for tasks, managed
        bonuses and fines for the developers and administered the office. As a developer I participated
        in usability testing, design, outsourcing, planning and coding.
      </p>
    </div>
  ),
};
