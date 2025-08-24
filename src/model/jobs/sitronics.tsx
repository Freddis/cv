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
          Designed and developed the frontend of the <b>Allyst platform</b>, a visual
          editor for creating <b>Enterprise Service Bus (ESB)</b>
          schemes quickly. Built as a <b>JavaScript</b> application using <b>SVG</b>,
          <b>HTML</b>, <b>CSS</b>, and <b>Websockets</b>, with automated tasks
          handled via <b>Gulp</b>. Ensured functionality with <b>Selenium</b> tests.
        </p>
     ),
    [Domain.Backend]: (
        <p>
          Supported frontend with <b>PostgreSQL</b>, <b>MongoDB</b>, and <b>Redis</b>,
          using a thin <b>PHP</b> layer for read/write operations and statistics.
          Applied <b>PHPUnit</b> for backend testing and maintained
          seamless data flow between server and visual editor components.
        </p>

     ),
  },
};
