import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const paive: Job<Domain.Backend> = {
  from: new Date('2011-09-01'),
  to: new Date('2012-02-01'),
  title: 'Junior Web Developer',
  company: {
    websites: ['https://www.paive.com/'],
    name: 'PAIVE Media Group LLC',
  },
  skills: {
    management: 0,
    backend: 30,
  },
  tags: {
    Frontend: [
      Tag.Frontend,
      Tag.javascript,
      Tag.ajax,
      Tag.HTML,
      Tag.CSS,
      Tag.jquery,
    ],
    Backend: [
      Tag.Backend,
      Tag.php,
      Tag.mysql,
    ],
  },
  primaryDescription: Domain.Backend,
  description: {
    [Domain.Frontend]: (
      <p>
        Developed client-facing features using <span x-data-tag={Tag.javascript}>JavaScript</span>&nbsp;
        and <span x-data-tag={Tag.jquery}>jQuery</span> for the company CMS and
        standalone projects. Built interactive applications
        including platform the Diageo bartender competition, enabling real-time updates via <span x-data-tag={Tag.ajax}>AJAX</span>.
      </p>
    ),
    [Domain.Backend]: (
      <p>
        Implemented new modules and fixed bugs in the <span x-data-tag={Tag.php}>PHP</span>-based CMS.
        Managed routine tasks like data conversion and bulk uploads
        for <span x-data-tag={Tag.ecommerce}>e-commerce</span> shops,
        ensuring smooth backend operations and integration with frontend components.
      </p>
    ),
  },
};
