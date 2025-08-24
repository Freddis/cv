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
      Tag.nodeJs,
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
        Designed microservices with <span x-data-tag={Tag.nodeJs}>Node.js</span>
        , <span x-data-tag={Tag.typescript}>TypeScript</span>, <span x-data-tag={Tag.java}>Java</span>
        , <span x-data-tag={Tag.php}>PHP</span>, and <span x-data-tag={Tag.cSharp}>C#</span>, using
        event-driven communication via <span x-data-tag={Tag.rabbitMQ}>RabbitMQ</span>. Built
        systems on <span x-data-tag={Tag.mysql}>MySQL</span>, <span x-data-tag={Tag.postgreSQL}>PostgreSQL</span>,
        and <span x-data-tag={Tag.redis}>Redis</span>, including
        a service for <a href="https://www.linkedin.com/company/finaxar" target="_blank">Finaxar</a> to process
        user acquisition requests with sensitive data validation and event-based workflows.
     </p>
    ),
    Frontend: (
      <p>
       Developed rich interfaces with <span x-data-tag={Tag.react}>React</span>
       , <span x-data-tag={Tag.angular}>Angular</span>, <span x-data-tag={Tag.Vue}>Vue</span>.
       Optimized builds using <span x-data-tag={Tag.Webpack}>Webpack</span> and built a visual analytics
       dashboard for <a href="https://www.ecomengine.com/feedbackfive" target="_blank">Feedback Five</a>, integrating Amazon
       seller data from APIs and scraping pipelines.
      </p>
    ),
    Mobile: (
      <p>
        Created native apps with <span x-data-tag={Tag.swift}>Swift</span> and <span x-data-tag={Tag.java}>Java</span>,
         delivering mobile-first solutions aligned with backend APIs for fintech and e-commerce projects.
      </p>
    ),
  },
};
