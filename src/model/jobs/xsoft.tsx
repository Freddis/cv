import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const xsoft: Job<Domain.Management> = {
  from: new Date('2012-08-01'),
  to: new Date('2013-04-01'),
  title: 'Frontend Team Lead',
  company: {
    name: 'X-Soft LLC',
  },
  skills: {
    management: 40,
    backend: 0,
  },

  primaryDescription: Domain.Management,
  tags: {
    Frontend: [
      Tag.Frontend,
      Tag.javascript,
      Tag.ajax,
      Tag.HTML,
      Tag.CSS,
      Tag.angular,
      Tag.longPolling,
      Tag.Frontend,
    ],
    Management: [
      Tag.Management,
      Tag.redmine,
    ],
  },
  description: {
    Management: (
      <p>
        Hired and led a team of 3 <b>JavaScript</b> developers,
        coordinated with backend, design, and UX teams,
        and established project workflows using <b>Git</b> and <b>Redmine</b> for
        efficient management.
      </p>
    ),
    Frontend: (
      <p>
        Designed the entire frontend architecture of a <b>cloud operating system</b> web service
        from scratch, ensuring no extra frameworks were used for security.
        Built interactive features
        with <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>Angular</b>, <b>AJAX</b>, and <b>long polling</b>.
      </p>
    ),
  },
};


