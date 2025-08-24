import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const homeStudio: Job<Domain.Management> = {
  from: new Date('2015-11-01'),
  to: new Date('2019-02-01'),
  title: 'Chief Technology Officer',
  company: {
    websites: ['https://home-studio.pro'],
    name: 'Home-Studio LLC',
  },
  skills: {
    management: 60,
    backend: 50,
    mobile: 25,
  },
  tags: {
    Backend: [
      Tag.Backend,
      Tag.javascript,
      Tag.typescript,
      Tag.jenkins,
      Tag.php,
      Tag.kubernetes,
      Tag.postgreSQL,
      Tag.mysql,
      Tag.redis,
      Tag.protobuf,
      Tag.Webpack,
      Tag.websocket,
      Tag.typeORM,
      Tag.vbox,
      Tag.pHPUnit,
      Tag.mongoDB,
    ],
    Frontend: [
      Tag.Frontend,
      Tag.javascript,
      Tag.typescript,
      Tag.nestJS,
      Tag.react,
      Tag.angular,
      Tag.Vue,
      Tag.nodeJs,
    ],
    Mobile: [
      Tag.Mobile,
      Tag.Mobile,
      Tag.swift,
      Tag.java,
    ],
    Management: [
      Tag.Management,
      Tag.selenium,
      Tag.pHPUnit,
    ],
  },
  primaryDescription: Domain.Management,
  description: {
    Backend: (
      <p>
        Developed internal tools and client projects
        using <b>PHP</b>,<b>NodeJs</b>, <b>PostgreSQL</b>, <b>MySQL</b>, <b>Redis</b>, <b>Node.js</b>, <b>NestJS</b>, <b>TypeORM</b>,
        and <b>Protobuf</b>, ensuring scalable and maintainable back-end systems.
        Managed deployments with <b>Jenkins</b> and <b>Kubernetes</b>.
      </p>
    ),
    Frontend: (
      <p>
        Built front-end applications using <b>JavaScript</b>, <b>TypeScript</b>, <b>Angular</b>, <b>Vue</b>, <b>Webpack</b>,
        and <b>Websockets</b>. Maintained high quality with <b>Selenium</b> tests and integrated
        front-end with backend APIs.
      </p>
    ),
    Management: (
      <p>
        Founded and led a digital agency with 7 employees,
        including <b>programmers</b>, <b>HTML developer</b>, <b>designer</b>, and <b>sales staff</b>. Oversaw project
        direction, partner relations, and architecture decisions
        while contributing to complex development tasks.
      </p>
    ),
    Mobile: (
       <p>
        Developed native <b>Android</b> and <b>iOS</b> applications,
        ensuring full cross-platform functionality and integration
        with company systems, leveraging <b>Mobile</b> technologies.
      </p>

    ),
  },
};
