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
      Tag.nodeJs,
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
        using <span x-data-tag={Tag.java}>Java</span>
        , <span x-data-tag={Tag.php}>PHP</span>, <span x-data-tag={Tag.nodeJs}>NodeJs</span>
        , <span x-data-tag={Tag.postgreSQL}>PostgreSQL</span>
        , <span x-data-tag={Tag.mysql}>MySQL</span>, <span x-data-tag={Tag.redis}>Redis</span>
        , <span x-data-tag={Tag.typeORM}>TypeORM</span>, and <span x-data-tag={Tag.protobuf}>Protobuf</span>
        , ensuring scalable and maintainable back-end systems.
        Managed deployments with <span x-data-tag={Tag.vbox}>VBox</span> and <span x-data-tag={Tag.kubernetes}>Kubernetes</span>.
      </p>
    ),
    Frontend: (
      <p>
        Built front-end applications using <span x-data-tag={Tag.javascript}>JavaScript</span>
        , <span x-data-tag={Tag.typescript}>TypeScript</span>, <span x-data-tag={Tag.angular}>Angular</span>
        , <span x-data-tag={Tag.Vue}>Vue</span>, <span x-data-tag={Tag.Webpack}>Webpack</span>,
        and <span x-data-tag={Tag.websocket}>Websockets</span>. Maintained high
        quality with <span x-data-tag={Tag.selenium}>Selenium</span> tests and integrated
        front-end with backend APIs.
      </p>
    ),
    Management: (
      <p>
        Founded and led a digital agency with  <span x-data-tag={Tag.Management}>7 employees</span>,
        including programmers, HTML developer, designer, and sales staff. Oversaw project
        direction, partner relations, and architecture decisions
        while contributing to complex development tasks.
      </p>
    ),
    Mobile: (
       <p>
        Developed native <span x-data-tag={Tag.java}>Android</span> and <span x-data-tag={Tag.swift}>iOS</span> applications,
        ensuring full cross-platform functionality and integration
        with company systems, leveraging <span x-data-tag={Tag.Mobile}>Mobile</span> technologies.
      </p>

    ),
  },
};
