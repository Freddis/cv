import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const sitronics: Job = {
  from: new Date('2014-02-01'),
  to: new Date('2014-07-01'),
  title: 'Web-Platform Architect',
  company: {
    webiste: 'https://analit.net',
    name: 'Sitronics JSC',
  },
  skills: {
    management: 0,
    backend: 30,
  },
  tags: [
    Tag.php, Tag.pHPUnit, Tag.selenium, Tag.javascript, Tag.websocket, Tag.Gulp, Tag.SVG, Tag.HTML, Tag.CSS,
  ],
  description: (
    <div>
      <p className="mb-2">
Designed and developed the frontend part of the Allyst platform. The purpose of the platform is
creation of Enterprise Service Bus (ESB) schemes.The frontend was a visual editor which gave an
ability to create system integration for the company within minutes.
      </p>
      <p className="mb-2">
The visual editor was a Javascript application utilizing SVG in order to display graphic elements.
Serverside part for the frontend consisted of PostgreSQL, MongoDB, Redis and thin PHP shiv for
read / write operations and statistics.
      </p>
    </div>
  ),
};
