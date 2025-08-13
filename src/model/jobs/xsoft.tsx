import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const xsoft: Job = {
  from: new Date('2012-08-01'),
  to: new Date('2013-04-01'),
  title: 'Frontend Team Lead',
  company: {
    name: 'X-Soft LLC',
  },
  skills: {
    management: 40,
    backend: 0,
  },
  tags: [
    Tag.javascript,
    Tag.ajax,
    Tag.HTML,
    Tag.CSS,
    Tag.angular,
    Tag.longPolling,
    Tag.redmine,
  ],
  description: (
    <div>
      <p className="mb-2">
        I participated in development of the core for a cloud operating system. From scratch I was able
        to think through the architecture of the frontend of the web-service. One of the main
        requirements for the project was to avoid any extra frameworks and libraries due to security
        reasons.
      </p>
      <p className="mb-2">
        My duties were to manage 3 Javascript developers, assess and hire candidates for Javascript
        positions and communicate with other departments, such as backend, designers and UX. In
        order to manage the project I proposed to use Git along with the assembla.com project
        management system.
      </p>
    </div>
  ),
};


