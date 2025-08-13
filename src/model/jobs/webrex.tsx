import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const webrex: Job = {
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
  tags: [
    Tag.php, Tag.javascript, Tag.ajax, Tag.HTML, Tag.CSS, Tag.jquery,
  ],
  description: (
    <div>
      <p className="mb-2">
        Development of a coupon website. It was a 6 month contract. My duties were to find proper
        tools and solutions for the development (version control system, frameworks, libraries),
        designing the project, and development.
      </p>
      <p className="mb-2">
        One of my achievements on that job is automatization of the coupon creation process.
      </p>
    </div>
  ),
};
