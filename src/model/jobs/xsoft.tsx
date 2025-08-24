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
        Hired and led
        a <span x-data-tag={Tag.Management}>team of 3</span> <span x-data-tag={Tag.javascript}>JavaScript developers</span>,
        coordinated with backend, design, and UX teams,
        and established project workflows using Git and <span x-data-tag={Tag.redmine}>Redmine</span> for
        efficient management.
      </p>
    ),
    Frontend: (
      <p>
        Designed the entire frontend architecture of a cloud operating system SAAS
        from scratch, ensuring no extra frameworks were used for security.
        Built interactive features
        with plain <span x-data-tag={Tag.javascript}>JavaScript</span>, <span x-data-tag={Tag.HTML}>HTML</span>,
         <span x-data-tag={Tag.CSS}>CSS</span>, <span x-data-tag={Tag.ajax}>AJAX</span>,
          and <span x-data-tag={Tag.longPolling}>long polling</span>.
      </p>
    ),
  },
};


