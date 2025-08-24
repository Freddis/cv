import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const upwork: Job<Domain.Backend> = {
  from: new Date('2019-02-01'),
  to: new Date('2021-09-01'),
  title: 'Top Rated+ Freelancer',
  company: {
    name: 'Upwork Inc.',
    websites: ['https://www.upwork.com/freelancers/~015e4e0f5478ebfb7d'],
  },
  skills: {
    backend: 30,
    management: 10,
    mobile: 20,
  },
  primaryDescription: Domain.Backend,
  tags: {
    Backend: [
      Tag.Backend,
      Tag.java,
      Tag.typescript,
      Tag.javascript,
      Tag.php,
      Tag.cSharp,
      Tag.Webpack,
      Tag.mysql,
      Tag.postgreSQL,
      Tag.redis,
      Tag.nodeJs,
    ],
    Frontend: [
      Tag.Webpack,
      Tag.Frontend,
      Tag.nextJS,
      Tag.typescript,
      Tag.javascript,
      Tag.react,
      Tag.angular,
      Tag.Vue,
      Tag.HTML,
      Tag.CSS,
    ],
    Mobile: [
      Tag.Mobile,
      Tag.java,
      Tag.swift,
    ],
  },
  description: {
    Backend: (
     <p>
        Designed microservices with <b>Node.js</b>, <b>TypeScript</b>, <b>Java</b>, <b>PHP</b>, and <b>C#</b>, using
        event-driven communication via <b>RabbitMQ</b>. Built
        systems on <b>MySQL</b>, <b>PostgreSQL</b>, and <b>Redis</b>, including
        a service for <a href="https://www.linkedin.com/company/finaxar" target="_blank">Finaxar</a> to process
        user acquisition requests with sensitive data validation and event-based workflows.
     </p>
    ),
    Frontend: (
      <p>
       Developed rich interfaces with <b>React</b>, <b>Angular</b>, <b>Vue</b>, <b>JavaScript</b>, <b>HTML</b>, and <b>CSS</b>.
       Optimized builds using <b>Webpack</b> and built a visual analytics
       dashboard for <a href="https://www.ecomengine.com/feedbackfive" target="_blank">Feedback Five</a>, integrating Amazon
       seller data from APIs and scraping pipelines.
      </p>
    ),
    Mobile: (
      <p>
        Created native apps with <b>Swift</b> and supported cross-platform integration,
         delivering mobile-first solutions aligned with backend APIs for fintech and e-commerce projects.
      </p>
    ),
  },
};
