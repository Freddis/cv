import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const upwork: Job = {
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
  tags: [
    Tag.java,
    Tag.typescript,
    Tag.javascript,
    Tag.php,
    Tag.cSharp,
    Tag.angular,
    Tag.Vue,
    Tag.HTML,
    Tag.CSS,
    Tag.Webpack,
    Tag.swift,
    Tag.react,
    Tag.mysql,
    Tag.postgreSQL,
    Tag.redis,
    Tag.Jira,
    Tag.nodeJs,
  ],
  description: (
    <div>
      <p className="mb-2">
        Participated in various projects, such as payment system, booking website and visual configurator for house interior/exterior.
      </p>
      <p className="mb-2">My account has 2 Top Rated badges (normal and high budget projects), Job Success Score: 100%.</p>
      <p className="mb-2 font-semibold">Notable SOA / Microservice Projects:</p>
      <ul>
        <li>
      <p className="mb-2 pl-2">
        Led the development of Amazon Analytics Tool.
        We used distributed architecture in order to process the data of amazon sellers via Amazon API and scraping using chrome headless.
        Services were communicating via RabbitMQ.
        <br />
        <a href={'https://www.ecomengine.com/feedbackfive'} target="_blank" className="text-accent/70">Feedback Five</a>
      </p>
      </li>
      <li>
      <p className="mb-2 pl-2">
        Development of a microservice that processes user requests for acquiring.
        Gathering information from the user, checking sensitive information,
        and putting the request for acquiring on the bus. Event based communication.
        <br />
        <a href={'https://www.linkedin.com/company/finaxar'} target="_blank" className="text-accent/70">Finaxar</a>
      </p>
      </li>
      </ul>
    </div>
  ),
};
