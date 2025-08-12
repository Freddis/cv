import {Job} from '../types/Job';
import {Tag} from '../types/Tag';

export const upwork: Job = {
  from: new Date('2019-02-01'),
  to: new Date('2021-09-01'),
  title: 'Top Rated+ Freelancer',
  company: {
    webiste: 'https://skyground.group',
    name: 'Upwork Inc.',
  },
  skills: {
    backend: 30,
    management: 10,
  },
  tags: [
    Tag.java, 
    Tag.typescript,
    Tag.javascript,
    Tag.php,
    Tag.cSharp,
    Tag.Angular,
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
      <p className="mb-2">Participated in various projects, such as payment system, booking website and visual configurator for house interior/exterior.</p>
      <p className="mb-2">My account has 2 Top Rated badges (normal and high budget projects), Job Success Score: 100%.</p>
      <p className="mb-2 font-semibold">Notable SOA / Microservice Projects:</p>
      <p className="mb-2 ml-4">
        Led the development of Amazon Analytics Tool.
        We used distributed architecture in order to process the data of amazon sellers via Amazon API and scraping using chrome headless.
        Services were communicating via RabbitMQ.
        https://www.ecomengine.com/feedbackfive
      </p>
      <p className="mb-2 ml-4">
        Development of a microservice that processes user requests for acquiring.
        Gathering information from the user, checking sensitive information,
        and putting the request for acquiring on the bus. Event based communication.
        https://www.finaxar.com/
      </p>

    </div>
  ),
};
