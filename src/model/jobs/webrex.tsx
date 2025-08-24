import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const webrex: Job<Domain.Backend> = {
  from: new Date('2012-02-01'),
  to: new Date('2012-08-01'),
  title: 'PHP Programmer',
  company: {
    name: 'Webrex LLC',
  },
  skills: {
    management: 0,
    backend: 80,
  },
  tags: {
    Backend: [
      Tag.Backend,
      Tag.php,
      Tag.mysql,
      Tag.Apache,
    ],
    Frontend: [
      Tag.Frontend,
      Tag.javascript,
      Tag.ajax,
      Tag.HTML,
      Tag.CSS,
      Tag.jquery,
    ],
  },
  primaryDescription: Domain.Backend,
  description: {
    Backend: (
      <p>
        Developed a coupon website using <span x-data-tag={Tag.php}>PHP</span> and
        the Kohana framework on a 6-month contract. Responsible for selecting tools and libraries,
        designing the project, and implementing frontend functionality
        using <span x-data-tag={Tag.HTML}>HTML</span>
        , <span x-data-tag={Tag.CSS}>CSS</span>, and <span x-data-tag={Tag.jquery}>jQuery</span> where needed.
      </p>
    ),
  },
};
