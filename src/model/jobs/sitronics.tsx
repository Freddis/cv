import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const sitronics: Job<Domain.Frontend> = {
  from: new Date('2014-02-01'),
  to: new Date('2014-07-01'),
  title: 'Web-Platform Architect',
  company: {
    websites: ['https://www.sitronics.com/en'],
    name: 'Sitronics JSC',
  },
  skills: {
    management: 0,
    backend: 30,
  },
  primaryDescription: Domain.Frontend,
  tags: {
    Backend: [
      Tag.Backend,
      Tag.php,
      Tag.pHPUnit,
      Tag.mongoDB,
    ],
    Frontend: [
      Tag.Frontend,
      Tag.selenium,
      Tag.javascript,
      Tag.websocket,
      Tag.Gulp,
      Tag.SVG,
      Tag.HTML,
      Tag.CSS,
      Tag.Frontend,
    ],
  },
  description: {
    [Domain.Frontend]: (
        <p>
          Designed and developed the frontend of the Allyst platform, a visual
          editor for creating Enterprise Service Bus (ESB) schemes quickly. Built as
          a <span x-data-tag={Tag.javascript}>JavaScript</span> application
          using <span x-data-tag={Tag.SVG}>SVG</span> and <span x-data-tag={Tag.websocket}>Websockets</span>.
          Ensured functionality with <span x-data-tag={Tag.selenium}>Selenium</span> tests.
        </p>
     ),
    [Domain.Backend]: (
        <p>
          Supported frontend with <span x-data-tag={Tag.mongoDB}>MongoDB</span>, and <span x-data-tag={Tag.redis}>Redis</span>,
          using a thin <span x-data-tag={Tag.php}>PHP</span>(
          <span x-data-tag={Tag.symfony}>Symfony</span>) layer for read/write operations and statistics.
          Applied <span x-data-tag={Tag.pHPUnit}>PHPUnit</span> for backend testing and maintained
          seamless data flow between server and visual editor components.
        </p>

     ),
  },
};
