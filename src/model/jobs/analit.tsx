import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const analit: Job<Domain.Management> = {
  from: new Date('2014-08-01'),
  to: new Date('2015-10-01'),
  title: 'Head of Department',
  company: {
    websites: ['https://analit.net', 'https://ivrn.net'],
    name: 'Analytic Centr LLC',
  },
  skills: {
    management: 60,
    backend: 70,
  },
  primaryDescription: Domain.Management,
  tags: {
    Backend: [
      Tag.Backend,
      Tag.cSharp,
      Tag.Hibernate,
      Tag.ASPNETMVC,
      Tag.jenkins,
    ],
    Frontend: [
      Tag.javascript,
    ],
    Management: [
      Tag.Management,
      Tag.redmine,
    ],
  },
  description: {
    Backend: (
      <p>
        Developed and maintained systems using <b>C#</b>, <b>ASP.NET MVC</b>, and <b>Hibernate</b>, contributing
        to coding, design, and usability testing. Implemented build automation and
        deployment pipelines with <b>Jenkins</b>, ensuring reliable backend operations.
      </p>
    ),
    Management: (
      <p>
        Led the IT department relocation to Moscow, hiring and managing
        employees, tracking productivity, handling bonuses and fines,
        and administering the office. Coordinated development direction,
        outsourcing, planning, and task tracking using <b>Redmine</b>.
      </p>
    ),
  },
};
